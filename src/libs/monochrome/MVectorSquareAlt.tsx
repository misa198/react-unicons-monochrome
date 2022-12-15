import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MVectorSquareAlt: React.FC<Props> = ({
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
        className="uim-primary"
        d="M4 22a2 2 0 1 1 2-2A2.0026 2.0026 0 0 1 4 22zm0-2.002v0zM4 6A2 2 0 1 1 6 4 2.0026 2.0026 0 0 1 4 6zM4 3.99805v0zM20 6a2 2 0 1 1 2-2A2.0026 2.0026 0 0 1 20 6zm0-2.00195v0zM20 22a2 2 0 1 1 2-2A2.0026 2.0026 0 0 1 20 22zm0-2.002v0z"
      ></path>
      <rect
        width="10"
        height="10"
        x="7"
        y="7"
        className="uim-tertiary"
        rx="1"
      ></rect>
      <path
        className="uim-quaternary"
        d="M18.27832 5a1.93565 1.93565 0 0 1 0-2H5.72168a1.93565 1.93565 0 0 1 0 2zM20 18a1.97629 1.97629 0 0 1 1 .27832V5.72168a1.93565 1.93565 0 0 1-2 0V18.27832A1.97629 1.97629 0 0 1 20 18zM4 18a1.97629 1.97629 0 0 1 1 .27832V5.72168a1.93565 1.93565 0 0 1-2 0V18.27832A1.97629 1.97629 0 0 1 4 18zM18.27832 19H5.72168a1.93565 1.93565 0 0 1 0 2H18.27832a1.93565 1.93565 0 0 1 0-2z"
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

export default MVectorSquareAlt;
