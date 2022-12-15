import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMountains: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M21,19H11c-0.55258-0.00037-1.00024-0.44862-0.99988-1.0012c0.00012-0.18707,0.05269-0.37036,0.15174-0.52907l5-8c0.33258-0.46842,0.98192-0.57853,1.45033-0.24595c0.09521,0.0676,0.17835,0.15074,0.24595,0.24595l5,8c0.29256,0.46878,0.14971,1.08597-0.31907,1.37853C21.37037,18.94731,21.18707,18.99988,21,19z"
      ></path>
      <path
        className="uim-primary"
        d="M10.00012,17.99878c0.00012-0.18707,0.05267-0.37036,0.15173-0.52905l3.98083-6.36932l-3.26892-5.60431C10.68463,5.18878,10.35571,4.99988,10,5C9.64429,4.99988,9.31537,5.18878,9.13623,5.49609l-7,12C2.047,17.64905,2,17.82294,2,18c0,0.55231,0.44769,1,1,1h8C10.44739,18.99963,9.99976,18.55139,10.00012,17.99878z"
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

export default MMountains;
