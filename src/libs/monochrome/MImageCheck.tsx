import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MImageCheck: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M11.89,13.61l-2.48-2.49c-1.1016-1.04499-2.8284-1.04499-3.93,0L2,14.6V19c0.00487,1.65483,1.34517,2.99513,3,3h12c0.13773,0.00207,0.27526-0.01134,0.41-0.04c0.7152-0.08939,1.37132-0.44242,1.84-0.99L11.89,13.61z M16.91992,8c-0.2619,0.00019-0.51338-0.10257-0.70019-0.28613L14.2998,5.83105c-0.39426-0.38671-0.40037-1.01981-0.01367-1.41406c0.38671-0.39426,1.01981-0.40037,1.41407-0.01367l1.21972,1.19629l3.37988-3.31348c0.39307-0.38792,1.02619-0.38374,1.41411,0.00934s0.38374,1.02619-0.00934,1.41411c-0.00145,0.00143-0.00291,0.00286-0.00437,0.00429l-4.08008,4C17.43331,7.89743,17.18182,8.00019,16.91992,8z"
      ></path>
      <path
        className="uim-quaternary"
        d="M19.25,20.97009C19.7334,20.42773,20.00037,19.7265,20,19v-2.62l-3.47998-3.47009c-1.09967-1.04993-2.83038-1.04993-3.92999,0l-0.70001,0.70007l0,0L19.25,20.96997"
      ></path>
      <path
        className="uim-tertiary"
        d="M19.68396,5.69055l-2.06384,2.02332C17.43329,7.8974,17.18182,8.00018,16.91992,8c-0.2619,0.00018-0.51337-0.1026-0.7002-0.28613L14.2998,5.83105c-0.39429-0.38672-0.40039-1.01984-0.01367-1.41406c0.38672-0.39429,1.01984-0.40039,1.41406-0.01367l1.21973,1.19629l1.33795-1.31165C17.87427,4.10895,17.45099,4.00134,17,4H5C3.34515,4.00482,2.00482,5.34515,2,7v7.59998L5.47998,11.12c1.10162-1.04498,2.82843-1.04498,3.92999,0l2.48004,2.48999l0.70001-0.70007c1.09961-1.04993,2.83032-1.04993,3.92999,0L20,16.38V7C19.9986,6.52808,19.87891,6.08765,19.68396,5.69055z"
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

export default MImageCheck;
