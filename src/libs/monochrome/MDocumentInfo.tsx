import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MDocumentInfo: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M20,9,13,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3Z"
      ></path>
      <path
        className="uim-primary"
        d="M20 9H15a2 2 0 0 1-2-2V2zM12 18.00031a.99943.99943 0 0 1-1-1v-2a1 1 0 1 1 2 0v2A.99943.99943 0 0 1 12 18.00031zM12 13.00031a.8444.8444 0 0 1-.37988-.08008 1.02883 1.02883 0 0 1-.33008-.21.98946.98946 0 0 1-.29-.71 1.02776 1.02776 0 0 1 .29-.71 1.60941 1.60941 0 0 1 .14941-.12012.74157.74157 0 0 1 .18067-.08984.61981.61981 0 0 1 .17968-.06055.95515.95515 0 0 1 .58008.06055 1.16023 1.16023 0 0 1 .33008.21 1.0321 1.0321 0 0 1 .29.71.99349.99349 0 0 1-.29.71A1.01024 1.01024 0 0 1 12 13.00031z"
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

export default MDocumentInfo;
