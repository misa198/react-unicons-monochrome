import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MWheelchairAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M18,13.18463V7h1c0.55231,0,1-0.44769,1-1s-0.44769-1-1-1H7C6.99817,3.34387,5.65613,2.00183,4,2H3C2.44769,2,2,2.44769,2,3s0.44769,1,1,1h1c0.55206,0.00055,0.99945,0.44794,1,1v8c0,0.00018,0,0.00037,0,0.00055C5.00012,13.55267,5.44788,14.00012,6,14c0.00018,0,0.00037,0,0.00055,0C6.55267,13.99988,7.00012,13.55212,7,13v-2h9v2h-6c-0.55231,0-1,0.44769-1,1s0.44769,1,1,1h7c0.55206,0.00055,0.99945,0.44794,1,1v1c0,0.00018,0,0.00037,0,0.00055c0.00012,0.55212,0.44788,0.99957,1,0.99945c0.00018,0,0.00037,0,0.00055,0c0.55212-0.00012,0.99957-0.44788,0.99945-1v-1C19.99854,14.69641,19.16168,13.59863,18,13.18463z M7,9V7h9v2H7z"
      ></path>
      <rect width="9" height="2" x="7" y="7" className="uim-quaternary"></rect>
      <path
        className="uim-quaternary"
        d="M10,13h6v-2H7v2c0.00012,0.55212-0.44733,0.99988-0.99945,1H9C9,13.44769,9.44769,13,10,13z"
      ></path>
      <circle cx="7" cy="17" r="1" className="uim-tertiary"></circle>
      <circle cx="7" cy="17" r="1" className="uim-tertiary"></circle>
      <path
        className="uim-primary"
        d="M7 12c-2.76141 0-5 2.23859-5 5s2.23859 5 5 5c2.76007-.00323 4.99677-2.23993 5-5C12 14.23859 9.76141 12 7 12zM7 18c-.55231 0-1-.44769-1-1s.44769-1 1-1 1 .44769 1 1S7.55231 18 7 18zM19 22c-1.65685 0-3-1.34315-3-3s1.34315-3 3-3 3 1.34315 3 3C21.99819 20.65611 20.65611 21.99819 19 22zM19 18c-.55228 0-1 .44772-1 1s.44772 1 1 1 1-.44772 1-1C19.99945 18.44794 19.55206 18.00055 19 18z"
      ></path>
      <circle cx="19" cy="19" r="1" className="uim-tertiary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MWheelchairAlt;
