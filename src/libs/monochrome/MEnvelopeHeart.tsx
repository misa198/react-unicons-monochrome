import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MEnvelopeHeart: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M21.2,6.71l-7.58,7.58c-1.16755,1.17084-3.06319,1.17351-4.23404,0.00596C9.38397,14.29398,9.38198,14.29199,9.38,14.29L1.8,6.71C2.29464,5.66676,3.34544,5.00126,4.5,5h14C19.65456,5.00126,20.70536,5.66676,21.2,6.71z"
      ></path>
      <path
        className="uim-quaternary"
        d="M21.20001,6.71002L13.62,14.28998c-1.16754,1.17084-3.06317,1.17352-4.23401,0.00598C9.38397,14.29401,9.38196,14.29199,9.38,14.28998L1.79999,6.71002C1.60345,7.11169,1.50085,7.5528,1.5,8v10c0.00488,1.65485,1.34515,2.99512,3,3h14c1.65485-0.00488,2.99512-1.34515,3-3V8C21.49915,7.5528,21.39655,7.11169,21.20001,6.71002z"
      ></path>
      <path
        className="uim-primary"
        d="M17.67188,12c-0.26521,0.00002-0.51955-0.10538-0.707-0.293L13.793,8.53613c-1.26645-1.26667-1.26627-3.32018,0.0004-4.58663c1.02674-1.02657,2.61067-1.24566,3.87753-0.53637c1.27183-0.68512,2.84085-0.46806,3.8789,0.53662c1.26465,1.26708,1.26465,3.31885,0,4.58593L18.37891,11.707C18.19145,11.89462,17.9371,12.00003,17.67188,12z"
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

export default MEnvelopeHeart;
