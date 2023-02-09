const monochrome = require("../resources/data/monochrome.json");
const path = require("path");
const fs = require("fs");
const prettier = require("prettier");
const { toPascalCase } = require("./utils/converter");

const createComponent = (name, jsx) => `
import React from 'react';
import '../../assets/styles/monochrome.css';

export const ${name}: React.FC = () => {
  return (${jsx});
};
`;

let index = "";

let components = [];

monochrome.forEach(({ name, svg }) => {
  const componentName = `M${toPascalCase(name)}`;
  let jsx = svg
    .replace(/class/g, "className")
    .replace(/enable-background/g, "enableBackground");

  const styles = jsx.match(/style=".+:.+"/g);
  if (styles) {
    styles.forEach((style) => {
      const paths = style.split('"');
      let res = paths[0];
      const kv = paths[1].split(":");
      res += `{{${kv[0]}: "${kv[1]}"}}`;
      jsx = jsx.replace(new RegExp(style, "g"), res);
    });
  }

  let content = createComponent(componentName, jsx);
  const needReplace = "return (<svg";
  const replace = "return (<svg className='misa198-unicons'";
  content = content.replace(needReplace, replace);

  const filePath = path.join(
    __dirname,
    `../src/libs/monochrome/${componentName}.tsx`
  );
  components.push(componentName);
  index += `import { ${componentName} } from './libs/monochrome/${componentName}';\n`;
  prettier.resolveConfig(filePath).then((options) => {
    const formatted = prettier.format(content, {
      ...options,
      filepath: filePath,
    });
    fs.writeFileSync(filePath, formatted);
  });
});

index += `\nexport { ${components.join(", ")} };\n`;

const indexFilePath = path.join(__dirname, "../src/index.ts");
prettier.resolveConfig(indexFilePath).then((options) => {
  const formatted = prettier.format(index, {
    ...options,
    filepath: indexFilePath,
  });
  fs.writeFileSync(indexFilePath, formatted);
});
