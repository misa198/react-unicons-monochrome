import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MTemperatureEmpty: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M11.99121,22.99805a6.24981,6.24981,0,0,1-1.27734-.13282A5.99448,5.99448,0,0,1,7.5,13.03809V5.5a4.5,4.5,0,0,1,9,0v7.53711a5.99467,5.99467,0,0,1-4.50879,9.96094Z"
      ></path>
      <circle cx="12" cy="17" r="2" className="uim-primary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MTemperatureEmpty;
