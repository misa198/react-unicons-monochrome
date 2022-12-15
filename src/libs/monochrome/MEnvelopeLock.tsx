import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MEnvelopeLock: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M21.20001,7.96771L13.62,15.54779c-1.16754,1.1709-3.06317,1.17352-4.23401,0.00598C9.38397,15.55182,9.38196,15.5498,9.38,15.54779L1.79999,7.96771C1.60345,8.36945,1.50085,8.81055,1.5,9.25775v10c0.00488,1.65485,1.34515,2.99512,3,3h14c1.65485-0.00488,2.99512-1.34515,3-3v-10C21.49915,8.81055,21.39655,8.36945,21.20001,7.96771z"
      ></path>
      <path
        className="uim-quaternary"
        d="M19.5,9.25781h-4c-0.55214,0.00014-0.99986-0.44734-1-0.99948c0-0.00017,0-0.00035,0-0.00052v-2c0-1.65685,1.34315-3,3-3s3,1.34315,3,3v2c0.00014,0.55214-0.44734,0.99986-0.99948,1C19.50035,9.25781,19.50017,9.25781,19.5,9.25781z M16.5,7.25781h2v-1c0-0.55228-0.44772-1-1-1s-1,0.44772-1,1V7.25781z"
      ></path>
      <polygon
        className="uim-tertiary"
        points="16.5 6.258 16.5 7.258 18.5 7.258 18.5 6.258 18.5 6.258 16.5 6.258"
      ></polygon>
      <path
        className="uim-tertiary"
        d="M20.5 8.25781c.00006.27014-.10938.51337-.28345.69336l.98346-.98346C21.02844 7.60583 20.78656 7.29327 20.5 7.03424V8.25781zM19.50055 9.25781c-.00018 0-.00037 0-.00055 0h-4c-.55212.00012-.99988-.44733-1-.99951 0-.00012 0-.00031 0-.00049v-2V6.25775h-10C3.34546 6.25897 2.29462 6.9245 1.79999 7.96771L9.38 15.54779c.00195.00201.00397.00403.00598.00598 1.17084 1.16754 3.06647 1.16492 4.23401-.00598L20.19373 8.974C20.01385 9.14819 19.77069 9.25775 19.50055 9.25781z"
      ></path>
      <path
        className="uim-primary"
        d="M19.5,15.25781h-4c-1.65611-0.00181-2.99819-1.34389-3-3v-2c0.00181-1.65611,1.34389-2.99819,3-3h4c1.65611,0.00181,2.99819,1.34389,3,3v2C22.49819,13.91391,21.15611,15.256,19.5,15.25781z"
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

export default MEnvelopeLock;
