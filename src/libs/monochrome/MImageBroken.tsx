import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MImageBroken: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M19,2H5A3.00328,3.00328,0,0,0,2,5v5.25977a.96931.96931,0,0,0,.05444.26977.95938.95938,0,0,0,.01978.09815.98867.98867,0,0,0,1.65423.30786L5.5,9.16406l2.293,2.293a.99962.99962,0,0,0,1.41406,0l2.293-2.293,2.793,2.793a.99963.99963,0,0,0,1.41406,0l2.793-2.793,1.77155,1.77149a.98867.98867,0,0,0,1.65429-.308c.012-.02942.00946-.06164.01856-.09179a.972.972,0,0,0,.0556-.276V5A3.00328,3.00328,0,0,0,19,2Z"
      ></path>
      <path
        className="uim-primary"
        d="M21.70575,14.54175,19.207,12.043a.99962.99962,0,0,0-1.41406,0L15,14.83594l-2.793-2.793a.99962.99962,0,0,0-1.41406,0L8.5,14.33594,6.207,12.043a.99962.99962,0,0,0-1.41406,0L2.29425,14.54175A1.01327,1.01327,0,0,0,2,15.25V19a3.00328,3.00328,0,0,0,3,3H19a3.00328,3.00328,0,0,0,3-3V15.25a1.01258,1.01258,0,0,0-.29425-.70825Z"
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

export default MImageBroken;
