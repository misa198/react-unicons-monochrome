import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MTemperatureMinus: React.FC<Props> = ({
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
        d="M9.49121,22.99805a6.24981,6.24981,0,0,1-1.27734-.13282A5.99448,5.99448,0,0,1,5,13.03809V5.5a4.5,4.5,0,0,1,9,0v7.53711a5.99467,5.99467,0,0,1-4.50879,9.96094Z"
      ></path>
      <path
        className="uim-primary"
        d="M10.5 15.27734V5.5a1 1 0 0 0-2 0v9.77734a2 2 0 1 0 2 0zM19.5 4.5h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z"
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

export default MTemperatureMinus;
