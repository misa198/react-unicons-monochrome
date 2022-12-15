import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MDialpadAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <rect
        width="4"
        height="4"
        x="10"
        y="6.955"
        className="uim-primary"
        rx=".545"
      ></rect>
      <rect
        width="4"
        height="4"
        x="10"
        y=".955"
        className="uim-primary"
        rx=".545"
      ></rect>
      <rect
        width="4"
        height="4"
        x="10"
        y="13.045"
        className="uim-primary"
        rx=".545"
      ></rect>
      <rect
        width="4"
        height="4"
        x="4"
        y="6.955"
        className="uim-primary"
        rx=".545"
      ></rect>
      <rect
        width="4"
        height="4"
        x="4"
        y=".955"
        className="uim-primary"
        rx=".545"
      ></rect>
      <rect
        width="4"
        height="4"
        x="4"
        y="13.045"
        className="uim-primary"
        rx=".545"
      ></rect>
      <rect
        width="4"
        height="4"
        x="16"
        y="6.955"
        className="uim-primary"
        rx=".545"
      ></rect>
      <rect
        width="4"
        height="4"
        x="16"
        y=".955"
        className="uim-primary"
        rx=".545"
      ></rect>
      <rect
        width="4"
        height="4"
        x="16"
        y="13.045"
        className="uim-primary"
        rx=".545"
      ></rect>
      <rect
        width="4"
        height="4"
        x="10"
        y="19"
        className="uim-primary"
        rx=".545"
      ></rect>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MDialpadAlt;
