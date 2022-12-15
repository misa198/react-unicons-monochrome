import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MImageLock: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M11.89,13.61l-2.48-2.49c-1.1016-1.04499-2.8284-1.04499-3.93,0L2,14.6V19c0.00487,1.65483,1.34517,2.99513,3,3h12c0.13773,0.00207,0.27526-0.01134,0.41-0.04c0.7152-0.08939,1.37132-0.44242,1.84-0.99L11.89,13.61z M19,7h-4c-0.55197,0.00031-0.99969-0.44689-1-0.99886C14,6.00076,14,6.00038,14,6V4c0-1.65685,1.34315-3,3-3s3,1.34315,3,3v2c0.00031,0.55197-0.44689,0.99969-0.99886,1C19.00076,7,19.00038,7,19,7z M16,5h2V4c0-0.55228-0.44772-1-1-1s-1,0.44772-1,1V5z"
      ></path>
      <path
        className="uim-tertiary"
        d="M18,4.18616C17.68585,4.07373,17.3526,4.00104,17,4h-1v1h2V4.18616z"
      ></path>
      <path
        className="uim-tertiary"
        d="M19.00116,7C19.00073,7,19.00037,7,19,7h-4c-0.55194,0.00031-0.99969-0.4469-1-0.99884C14,6.00073,14,6.00037,14,6V4H5C3.34515,4.00482,2.00482,5.34515,2,7v7.59998L5.47998,11.12c1.10162-1.04498,2.82843-1.04498,3.92999,0l2.48004,2.48999L19.25,20.96997C19.7334,20.42767,20.00037,19.7265,20,19V7c-0.00061-0.21924-0.02777-0.4317-0.07294-0.63751C19.78168,6.73438,19.42456,6.99976,19.00116,7z"
      ></path>
      <path
        className="uim-primary"
        d="M19,13h-4c-1.65611-0.00181-2.99819-1.34389-3-3V8c0.00181-1.65611,1.34389-2.99819,3-3h4c1.65611,0.00181,2.99819,1.34389,3,3v2C21.99819,11.65611,20.65611,12.99819,19,13z"
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

export default MImageLock;
