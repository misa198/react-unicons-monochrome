import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MImageEdit: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M17,4H5C3.34515,4.00482,2.00482,5.34515,2,7v12c0.00488,1.65485,1.34515,2.99512,3,3h12c0.13776,0.00208,0.27527-0.01135,0.40997-0.03998c0.71521-0.08942,1.37134-0.44244,1.84003-0.99005l-7.35999-7.35999l0.70001-0.70007c1.09961-1.04993,2.83032-1.04993,3.92999,0L20,16.38V7C19.99518,5.34515,18.65485,4.00482,17,4z"
      ></path>
      <path
        className="uim-primary"
        d="M11.89,13.61l-2.48-2.49c-1.1016-1.04499-2.8284-1.04499-3.93,0L2,14.6V19c0.00487,1.65483,1.34517,2.99513,3,3h12c0.13773,0.00207,0.27526-0.01134,0.41-0.04c0.7152-0.08939,1.37132-0.44242,1.84-0.99L11.89,13.61z M16.43506,10.51855h-2.41992c-0.55214,0.00015-0.99985-0.44732-1-0.99946c0-0.00018,0-0.00036,0-0.00054V7.09863c-0.00002-0.26521,0.10538-0.51955,0.293-0.707l4.58007-4.58008c0.1875-0.18754,0.44181-0.29293,0.707-0.293l0,0c0.26519,0.00007,0.5195,0.10546,0.707,0.293l2.41992,2.4209c0.39048,0.39029,0.39064,1.02322,0.00036,1.4137c-0.00012,0.00012-0.00024,0.00024-0.00036,0.00036l-4.58008,4.57911C16.95454,10.41313,16.70024,10.5185,16.43506,10.51855z"
      ></path>
      <path
        className="uim-quaternary"
        d="M19.25,20.97009C19.7334,20.42773,20.00037,19.7265,20,19v-2.62l-3.47998-3.47009c-1.09967-1.04993-2.83038-1.04993-3.92999,0l-0.70001,0.70007l0,0L19.25,20.96997"
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

export default MImageEdit;
