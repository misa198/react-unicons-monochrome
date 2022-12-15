import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MImageMinus: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M16.52,11.90991c-1.09963-1.04992-2.83037-1.04992-3.93,0l-1.41,1.41016c-0.18789,0.18415-0.29262,0.43692-0.29,0.7c-0.00271,0.26603,0.10182,0.52194,0.29,0.71l6.23,6.23c0.7152-0.08939,1.37132-0.44242,1.84-0.99C19.7334,19.42773,20.00035,18.7265,20,18v-2.62L16.52,11.90991z"
      ></path>
      <path
        className="uim-primary"
        d="M11.89,12.61l-2.48-2.49c-1.1016-1.04499-2.8284-1.04499-3.93,0L2,13.6V18c0.00487,1.65483,1.34517,2.99513,3,3h12c0.13773,0.00207,0.27526-0.01134,0.41-0.04c0.7152-0.08939,1.37132-0.44242,1.84-0.99L11.89,12.61z M21,5.00781h-4c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h4c0.55228,0,1,0.44772,1,1S21.55228,5.00781,21,5.00781z"
      ></path>
      <path
        className="uim-tertiary"
        d="M17,5.00781c-0.55231,0-1-0.44769-1-1s0.44769-1,1-1h0.07556C17.04987,3.00708,17.02588,3.00006,17,3H5C3.34515,3.00482,2.00482,4.34515,2,6v7.59998L5.47998,10.12c1.10162-1.04498,2.82843-1.04498,3.92999,0l2.48004,2.48999l0.70001-0.70007c1.09961-1.04993,2.83032-1.04993,3.92999,0L20,15.38V6c-0.00104-0.34973-0.07306-0.68024-0.18372-0.99219H17z"
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

export default MImageMinus;
