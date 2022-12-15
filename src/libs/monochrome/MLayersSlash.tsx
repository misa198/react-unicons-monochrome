import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MLayersSlash: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M12,16.39026c-0.17551-0.00005-0.34792-0.04618-0.5-0.13379l-9-5.19727c-0.47839-0.27632-0.64221-0.88814-0.36589-1.36653C2.22187,9.54073,2.34806,9.41454,2.5,9.32678l9-5.19336c0.30964-0.17773,0.69036-0.17773,1,0l9,5.19336c0.4784,0.27632,0.64221,0.88814,0.36589,1.36653c-0.08776,0.15194-0.21395,0.27813-0.36589,0.36589l-9,5.19727C12.34792,16.34408,12.17551,16.39021,12,16.39026z"
      ></path>
      <path
        className="uim-tertiary"
        d="M21.5,13.93658l-2.49231-1.43817L12.5,16.25647c-0.1521,0.08759-0.32446,0.13373-0.5,0.13379c-0.17548-0.00006-0.3479-0.0462-0.5-0.13379l-6.50769-3.75806L2.5,13.93658c-0.15192,0.08777-0.27814,0.21393-0.36591,0.36584C1.85779,14.78082,2.02161,15.3927,2.5,15.66901l9,5.1972C11.6521,20.9538,11.82452,20.99994,12,21c0.17548,0,0.3479-0.04614,0.5-0.13373l9-5.19727c0.15192-0.08777,0.27814-0.21393,0.36591-0.36591C22.14221,14.82471,21.97839,14.21289,21.5,13.93658z"
      ></path>
      <path
        className="uim-primary"
        d="M21,22c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-18-18C1.90605,3.31302,1.91175,2.67995,2.30573,2.293c0.38897-0.38203,1.0123-0.38203,1.40127,0l18,18c0.39046,0.39058,0.39037,1.02375-0.00021,1.41421C21.51931,21.89463,21.26509,21.99994,21,22z"
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

export default MLayersSlash;
