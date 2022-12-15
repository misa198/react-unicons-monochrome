import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MBedDouble: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M16,8.5h-2c-1.10455,0-2,0.89545-2,2c0-1.10455-0.89545-2-2-2H8c-1.10455,0-2,0.89545-2,2v2h6h6v-2C18,9.39545,17.10455,8.5,16,8.5z"
      ></path>
      <path
        className="uim-tertiary"
        d="M20,3.5H4c-1.65613,0.00183-2.99817,1.34387-3,3v6c0,0.00018,0,0.00037,0,0.00055C1.00012,13.05267,1.44788,13.50012,2,13.5h20c0.00018,0,0.00037,0,0.00055,0c0.55212-0.00012,0.99957-0.44788,0.99945-1v-6C22.99817,4.84387,21.65613,3.50183,20,3.5z M18,12.5h-6H6v-2c0-1.10455,0.89545-2,2-2h2c1.10455,0,2,0.89545,2,2c0-1.10455,0.89545-2,2-2h2c1.10455,0,2,0.89545,2,2V12.5z"
      ></path>
      <path
        className="uim-primary"
        d="M22,20.5h-4c-0.33435,0.00005-0.64659-0.16707-0.832-0.44531L15.46484,17.5H8.53516L6.832,20.05469C6.64659,20.33293,6.33435,20.50005,6,20.5H2c-0.55214,0.00014-0.99986-0.44734-1-0.99948C1,19.50035,1,19.50017,1,19.5v-7c-0.00014-0.55214,0.44734-0.99986,0.99948-1c0.00017,0,0.00035,0,0.00052,0h20c0.55214-0.00014,0.99986,0.44734,1,0.99948c0,0.00017,0,0.00035,0,0.00052v7c0.00014,0.55214-0.44734,0.99986-0.99948,1C22.00035,20.5,22.00017,20.5,22,20.5z"
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

export default MBedDouble;
