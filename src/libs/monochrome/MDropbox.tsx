import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MDropbox: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <polygon
        className="uim-primary"
        fill-rule="evenodd"
        points="16.53 10.091 21 12.939 16.498 15.807 12 12.941 7.502 15.807 3 12.939 7.47 10.091 3 7.243 7.502 4.375 12 7.241 16.498 4.375 21 7.243"
        clip-rule="evenodd"
      ></polygon>
      <polygon
        className="uim-quaternary"
        fill-rule="evenodd"
        points="16.467 10.091 12 7.245 7.533 10.091 12 12.936"
        clip-rule="evenodd"
      ></polygon>
      <polygon
        className="uim-tertiary"
        fill-rule="evenodd"
        points="7.531 16.757 7.502 15.807 12 12.941 16.498 15.807 16.534 16.757 12.032 19.625"
        clip-rule="evenodd"
      ></polygon>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MDropbox;
