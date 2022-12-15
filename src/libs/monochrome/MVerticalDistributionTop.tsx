import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MVerticalDistributionTop: React.FC<Props> = ({
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
        className="uim-primary"
        d="M21,16H3c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h18c0.55228,0,1,0.44771,1,1S21.55228,16,21,16z M21,6H3C2.44772,6,2,5.55228,2,5s0.44772-1,1-1h18c0.55228,0,1,0.44772,1,1S21.55228,6,21,6z"
      ></path>
      <path
        className="uim-quaternary"
        d="M5,16v3c0,0.00018,0,0.00037,0,0.00055C5.00012,19.55267,5.44788,20.00012,6,20h12c0.00018,0,0.00037,0,0.00055,0c0.55212-0.00012,0.99957-0.44788,0.99945-1v-3H5z"
      ></path>
      <path
        className="uim-tertiary"
        d="M4,11.00055C4.00012,11.55267,4.44788,12.00012,5,12h14c0.00018,0,0.00037,0,0.00055,0c0.55212-0.00012,0.99957-0.44788,0.99945-1V6H4v5C4,11.00018,4,11.00037,4,11.00055z"
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

export default MVerticalDistributionTop;
