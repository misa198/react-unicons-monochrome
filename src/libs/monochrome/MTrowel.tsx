import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MTrowel: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M4.99609,21.99805c-1.65804-0.00534-2.99781-1.35378-2.99247-3.01182c0.00103-0.31897,0.05288-0.63573,0.15361-0.93838l2.66162-7.98437c0.52424-1.57193,2.22351-2.42126,3.79544-1.89702C9.05578,8.3137,9.45697,8.56162,9.78613,8.89062l0,0l5.32325,5.32325c1.1716,1.17189,1.17137,3.07166-0.00052,4.24326c-0.32927,0.32919-0.73064,0.57724-1.17234,0.72451L5.95215,21.8418C5.644,21.94522,5.32113,21.99799,4.99609,21.99805z"
      ></path>
      <path
        className="uim-quaternary"
        d="M16.58594,10.41211c-0.79571,0.00161-1.55925-0.31402-2.12158-0.877l0,0c-1.17098-1.17153-1.1712-3.07031-0.00049-4.24211l2.415-2.41406c1.18737-1.13282,3.0553-1.13282,4.24267,0c1.16955,1.17231,1.16933,3.07014-0.00049,4.24218L18.707,9.53516C18.14481,10.09802,17.38147,10.41362,16.58594,10.41211z"
      ></path>
      <path
        className="uim-primary"
        d="M14.46436,9.5351c-0.24908-0.24921-0.43372-0.53558-0.57684-0.83661l-4.42462,4.42462c-0.18738,0.18744-0.29272,0.44165-0.29279,0.70679c-0.00006,0.55225,0.44751,1.00006,0.99982,1.00018c0.26526,0.00031,0.51978-0.1051,0.70709-0.29297l4.42444-4.42444C14.99536,9.96722,14.70844,9.77948,14.46436,9.5351z"
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

export default MTrowel;
