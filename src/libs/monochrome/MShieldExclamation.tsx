import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MShieldExclamation: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M12,22a.9986.9986,0,0,1-.581-.18652l-3.6504-2.60743A9.01643,9.01643,0,0,1,4,11.88281v-7.457a1.00039,1.00039,0,0,1,1.20605-.97851,8.00089,8.00089,0,0,0,6.22168-1.26758.99888.99888,0,0,1,1.14454,0A7.99842,7.99842,0,0,0,18.794,3.44727,1.00039,1.00039,0,0,1,20,4.42578v7.457a9.01643,9.01643,0,0,1-3.76855,7.32324l-3.6504,2.60743A.9986.9986,0,0,1,12,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M12 12.36426a.99943.99943 0 0 1-1-1v-3a1 1 0 0 1 2 0v3A.99943.99943 0 0 1 12 12.36426zM12 16.35938a.97521.97521 0 0 1-.91992-.60938A.87366.87366 0 0 1 11 15.35938a1.24719 1.24719 0 0 1 .01953-.18946.718.718 0 0 1 .06055-.19043.5469.5469 0 0 1 .08984-.16992.62031.62031 0 0 1 .12012-.14941 1.027 1.027 0 0 1 1.41992 0 .99988.99988 0 0 1 .12012.14941.56828.56828 0 0 1 .08984.16992.681.681 0 0 1 .05957.19043A1.13557 1.13557 0 0 1 13 15.35938a1.04972 1.04972 0 0 1-.08008.39062.98142.98142 0 0 1-.21.31934 1.17735 1.17735 0 0 1-.33008.2207A.989.989 0 0 1 12 16.35938z"
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

export default MShieldExclamation;
