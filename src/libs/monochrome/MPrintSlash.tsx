import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MPrintSlash: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-secondary"
        d="M17,22H7c-0.55197,0.00031-0.99969-0.44689-1-0.99886C6,21.00076,6,21.00038,6,21v-6c-0.00031-0.55197,0.44689-0.99969,0.99886-1C6.99924,14,6.99962,14,7,14h10c0.55197-0.00031,0.99969,0.44689,1,0.99886c0,0.00038,0,0.00076,0,0.00114v6c0.00031,0.55197-0.44689,0.99969-0.99886,1C17.00076,22,17.00038,22,17,22z"
      ></path>
      <path
        className="uim-tertiary"
        d="M19,6H5C3.34387,6.00183,2.00183,7.34387,2,9v6c0.00183,1.65613,1.34387,2.99817,3,3h1v-3c-0.00031-0.55194,0.4469-0.99969,0.99884-1C6.99927,14,6.99963,14,7,14h10c0.55194-0.00031,0.99969,0.4469,1,0.99884c0,0.00043,0,0.00079,0,0.00116v3h1c1.65613-0.00183,2.99817-1.34387,3-3V9C21.99817,7.34387,20.65613,6.00183,19,6z"
      ></path>
      <path
        className="uim-quaternary"
        d="M18,6V3c0-0.00037,0-0.00073,0-0.00116C17.99969,2.4469,17.55194,1.99969,17,2H7C6.99963,2,6.99927,2,6.99884,2C6.4469,2.00031,5.99969,2.44806,6,3v3H18z"
      ></path>
      <circle cx="7" cy="11" r="1" className="uim-primary"></circle>
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

export default MPrintSlash;
