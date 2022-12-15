import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MVideoSlash: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M14,18H5c-1.65611-0.00181-2.99819-1.34389-3-3V9c0.00181-1.65611,1.34389-2.99819,3-3h9c1.65611,0.00181,2.99819,1.34389,3,3v6C16.99819,16.65611,15.65611,17.99819,14,18z"
      ></path>
      <path
        className="uim-tertiary"
        d="M21.89465,7.55359c-0.24683-0.49432-0.8476-0.69495-1.34192-0.44812l-3.56421,1.7821C16.98999,8.92572,16.99994,8.96149,17,9v6c-0.00006,0.03851-0.01001,0.07428-0.01147,0.11243l3.56421,1.7821C20.69165,16.96381,20.84479,16.99994,21,17c0.55212-0.00037,0.99969-0.44788,1-1V8C21.99994,7.84503,21.96387,7.6922,21.89465,7.55359z"
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

export default MVideoSlash;
