import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MBusSchool: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M19.89,9.89014H1V6.5c0.00487-1.65483,1.34517-2.99513,3-3h11.56c1.2909-0.00435,2.43764,0.8234,2.84,2.05l1.32,3.95l0.12006,0.35986L19.89,9.89014z"
      ></path>
      <path
        className="uim-quaternary"
        d="M22.54999,11.66992l-0.25-0.16992l-2.40997-1.60986H1V16.5c0.00159,0.55164,0.44836,0.99841,1,1h20c0.55164-0.00159,0.99841-0.44836,1-1v-4C22.99915,12.16522,22.83008,11.85333,22.54999,11.66992z"
      ></path>
      <path
        className="uim-primary"
        d="M19.89,9.89014H14V3.5h1.56c1.2909-0.00435,2.43764,0.8234,2.84,2.05l1.32,3.95l0.12006,0.35986L19.89,9.89014z M6,20.5c-1.65685,0-3-1.34315-3-3s1.34315-3,3-3s3,1.34315,3,3C8.99819,19.15611,7.65611,20.49819,6,20.5z M18,20.5c-1.65685,0-3-1.34315-3-3s1.34315-3,3-3s3,1.34315,3,3C20.99819,19.15611,19.65611,20.49819,18,20.5z"
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

export default MBusSchool;
