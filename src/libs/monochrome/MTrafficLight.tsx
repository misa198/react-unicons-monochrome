import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MTrafficLight: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M6,8.5H2c-0.00018,0-0.00037,0-0.00055,0C1.44733,8.50012,0.99988,8.94788,1,9.5c0.00031,2.97205,2.16357,5.43268,5,5.90991V8.5z"
      ></path>
      <path
        className="uim-tertiary"
        d="M15,22.5H9c-1.65611-0.00181-2.99819-1.34389-3-3v-15c0.00181-1.65611,1.34389-2.99819,3-3h6c1.65611,0.00181,2.99819,1.34389,3,3v15C17.99819,21.15611,16.65611,22.49819,15,22.5z"
      ></path>
      <path
        className="uim-primary"
        d="M6 4.5c.00085-.77191.30109-1.46844.78033-2H2c-.00018 0-.00037 0-.00055 0C1.44733 2.50012.99988 2.94788 1 3.5c.00031 2.97205 2.16357 5.43268 5 5.90991V4.5zM6 19.5v-4.09015C5.15686 15.2674 4.37146 14.95483 3.68652 14.5H2c-.00018 0-.00037 0-.00055 0C1.44733 14.50012.99988 14.94788 1 15.5c.00037 3.23615 2.56439 5.86658 5.77075 5.9884C6.29749 20.95819 6.00085 20.26654 6 19.5zM22 14.5h-1.68652c-.68494.4549-1.4704.7674-2.31348.90985V19.5c-.00085.76654-.29749 1.45819-.77075 1.9884C20.43561 21.36658 22.99963 18.73615 23 15.5c0-.00018 0-.00037 0-.00055C22.99988 14.94733 22.55212 14.49988 22 14.5z"
      ></path>
      <path
        className="uim-quaternary"
        d="M22,8.5h-4v6.90991c2.83643-0.47723,4.99969-2.93787,5-5.90991c0-0.00018,0-0.00037,0-0.00055C22.99988,8.94733,22.55212,8.49988,22,8.5z"
      ></path>
      <path
        className="uim-primary"
        d="M22,2.5h-4.78033C17.69891,3.03156,17.99915,3.72809,18,4.5v4.90991C20.83643,8.93268,22.99969,6.47205,23,3.5c0-0.00018,0-0.00037,0-0.00055C22.99988,2.94733,22.55212,2.49988,22,2.5z"
      ></path>
      <circle cx="12" cy="7" r="1.5" className="uim-primary"></circle>
      <circle cx="12" cy="12" r="1.5" className="uim-primary"></circle>
      <circle cx="12" cy="17" r="1.5" className="uim-primary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MTrafficLight;
