import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMoneyBillSlash: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="3.002" className="uim-quaternary"></circle>
      <path
        className="uim-tertiary"
        d="M20,5H4C2.34387,5.00183,1.00183,6.34387,1,8v8c0.00183,1.65613,1.34387,2.99817,3,3h16c1.65613-0.00183,2.99817-1.34387,3-3V8C22.99817,6.34387,21.65613,5.00183,20,5z M11.99976,15.00189c-1.65808,0-3.0022-1.34412-3.0022-3.0022s1.34412-3.0022,3.0022-3.0022s3.0022,1.34412,3.0022,3.0022S13.65784,15.00189,11.99976,15.00189z"
      ></path>
      <circle cx="6" cy="12" r="1" className="uim-primary"></circle>
      <circle cx="18" cy="12" r="1" className="uim-primary"></circle>
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

export default MMoneyBillSlash;
