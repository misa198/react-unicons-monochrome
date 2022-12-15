import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MTelegram: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M15.17383,17.15247c-0.14503,0.36162-0.55575,0.5372-0.91738,0.39217c-0.02908-0.01166-0.05735-0.02525-0.08462-0.04067l-2.71467-2.10938L9.71484,17.002c-0.08216,0.0607-0.18957,0.07538-0.285,0.03894l0.334-2.98846l0.01069,0.00848l0.00683-0.059c0,0,4.885-4.44751,5.084-4.637c0.20147-0.189,0.135-0.23,0.135-0.23c0.01147-0.23053-0.36152,0-0.36152,0L8.16632,13.299l-2.69549-0.918c0,0-0.414-0.1485-0.453-0.475c-0.041-0.324,0.46649-0.5,0.46649-0.5l10.717-4.25751c0,0,0.881-0.39252,0.881,0.25751L15.17383,17.15247z"
      ></path>
      <path
        className="uim-primary"
        d="M11.99402,2c-5.52289,0-10,4.47717-10,10s4.47711,10,10,10c5.52283,0,10-4.47717,10-10S17.51685,2,11.99402,2z M15.17383,17.15247c-0.14502,0.36163-0.55573,0.53723-0.91736,0.39215c-0.02911-0.01166-0.05737-0.02521-0.08466-0.04065l-2.71466-2.10938l-1.74231,1.60742c-0.08215,0.06067-0.18958,0.07538-0.28497,0.03894l0.33398-2.98846l0.01068,0.00848l0.00684-0.05902c0,0,4.88501-4.44751,5.08398-4.63696c0.20148-0.18903,0.13501-0.23004,0.13501-0.23004c0.01147-0.23053-0.36151,0-0.36151,0l-6.47253,4.16406l-2.6955-0.91803c0,0-0.414-0.1485-0.453-0.47498c-0.04102-0.32404,0.46649-0.5,0.46649-0.5L16.20129,7.1485c0,0,0.88104-0.39252,0.88104,0.25751L15.17383,17.15247z"
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

export default MTelegram;
