import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MEnvelopeTimes: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M21.2,6.21l-7.58,7.58c-1.16755,1.17084-3.06319,1.17351-4.23404,0.00596C9.38397,13.79398,9.38198,13.79199,9.38,13.79L1.8,6.21C2.29464,5.16676,3.34544,4.50126,4.5,4.5h14C19.65456,4.50126,20.70536,5.16676,21.2,6.21z"
      ></path>
      <path
        className="uim-quaternary"
        d="M21.20001,6.21002L13.62,13.78998c-1.16754,1.17084-3.06317,1.17352-4.23401,0.00598C9.38397,13.79401,9.38196,13.79199,9.38,13.78998L1.79999,6.21002C1.60345,6.61169,1.50085,7.0528,1.5,7.5v10c0.00488,1.65485,1.34515,2.99512,3,3h14c1.65485-0.00488,2.99512-1.34515,3-3v-10C21.49915,7.0528,21.39655,6.61169,21.20001,6.21002z"
      ></path>
      <path
        className="uim-primary"
        d="M17.5,9.5c-0.55228-0.00012-0.9999-0.44793-0.99979-1.00021C16.50027,8.2347,16.60558,7.98048,16.793,7.793l4-4c0.39399-0.38694,1.02706-0.38123,1.414,0.01275c0.38202,0.38897,0.38202,1.01227,0,1.40125l-4,4C18.01971,9.39485,17.76527,9.5003,17.5,9.5z"
      ></path>
      <path
        className="uim-primary"
        d="M21.5,9.5c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-4-4c-0.38695-0.39398-0.38124-1.02705,0.01274-1.414c0.38897-0.38203,1.01229-0.38203,1.40126,0l4,4c0.39046,0.39058,0.39037,1.02375-0.00021,1.41421C22.01931,9.39463,21.76509,9.49994,21.5,9.5z"
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

export default MEnvelopeTimes;
