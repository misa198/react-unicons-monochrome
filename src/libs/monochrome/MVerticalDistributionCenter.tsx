import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MVerticalDistributionCenter: React.FC<Props> = ({
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
        className="uim-tertiary"
        d="M19,20H5c-0.55214,0.00014-0.99986-0.44734-1-0.99948C4,19.00035,4,19.00017,4,19v-6c-0.00014-0.55214,0.44734-0.99986,0.99948-1C4.99965,12,4.99983,12,5,12h14c0.55214-0.00014,0.99986,0.44734,1,0.99948c0,0.00017,0,0.00035,0,0.00052v6c0.00014,0.55214-0.44734,0.99986-0.99948,1C19.00035,20,19.00017,20,19,20z"
      ></path>
      <path
        className="uim-quaternary"
        d="M18,10H6c-0.55214,0.00014-0.99986-0.44734-1-0.99948C5,9.00035,5,9.00017,5,9V5C4.99986,4.44786,5.44734,4.00014,5.99948,4C5.99965,4,5.99983,4,6,4h12c0.55214-0.00014,0.99986,0.44734,1,0.99948C19,4.99965,19,4.99983,19,5v4c0.00014,0.55214-0.44734,0.99986-0.99948,1C18.00035,10,18.00017,10,18,10z"
      ></path>
      <path
        className="uim-primary"
        d="M3 8h2V6H3C2.44769 6 2 6.44769 2 7S2.44769 8 3 8zM19 8h2c.55231 0 1-.44769 1-1s-.44769-1-1-1h-2V8zM21 15h-1v2h1c.55231 0 1-.44769 1-1S21.55231 15 21 15zM4 15H3c-.55231 0-1 .44769-1 1s.44769 1 1 1h1V15z"
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

export default MVerticalDistributionCenter;
