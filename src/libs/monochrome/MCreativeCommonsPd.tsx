import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCreativeCommonsPd: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M12,20c4.41827,0,8-3.58173,8-8c-0.00507-4.4162-3.5838-7.99493-8-8c-4.41827,0-8,3.58173-8,8S7.58173,20,12,20z"
      ></path>
      <path
        className="uim-tertiary"
        d="M12,2C6.47717,2,2,6.47717,2,12s4.47717,10,10,10c5.52032-0.00616,9.99384-4.47968,10-10C22,6.47717,17.52283,2,12,2z M20,12c0,1.84845-0.633,3.54553-1.68579,4.90015L7.09985,5.68579C8.45447,4.633,10.15155,4,12,4C16.4162,4.00507,19.99493,7.5838,20,12z M4,12c0-1.84845,0.633-3.54553,1.68579-4.90015l11.21442,11.21436C15.54559,19.367,13.84845,20,12,20C7.58173,20,4,16.41827,4,12z"
      ></path>
      <path
        className="uim-primary"
        d="M15 13c-.1687 0-.32043.05237-.45984.1261l1.4057 1.4057C15.97711 14.35858 15.99982 14.18219 16 14 16 13.44769 15.55231 13 15 13zM10.54053 9.12646C10.67987 9.05267 10.83142 9.00024 11 9h2c.552.00073.99927.448 1 1 0 .55231.44769 1 1 1s1-.44769 1-1c-.00183-1.65613-1.34387-2.99817-3-3h-2c-.72223.00079-1.37585.26697-1.89349.69244L10.54053 9.12646zM13.45953 14.87354C13.32019 14.94733 13.16864 14.99976 13 15h-2c-.552-.00073-.99927-.448-1-1v-2.58594L8.05414 9.4682C8.02289 9.64142 8.00018 9.81781 8 10v4c.00183 1.65613 1.34387 2.99817 3 3h2c.72229-.00079 1.37592-.26697 1.89355-.69244L13.45953 14.87354z"
      ></path>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MCreativeCommonsPd;
