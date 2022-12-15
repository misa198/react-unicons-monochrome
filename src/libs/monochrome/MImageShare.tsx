import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MImageShare: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M17,4H5C3.34515,4.00482,2.00482,5.34515,2,7v7.59998L5.47998,11.12c1.10162-1.04498,2.82843-1.04498,3.92999,0l2.48004,2.48999l0.70001-0.70007c1.09961-1.04993,2.83032-1.04993,3.92999,0L20,16.38V7C19.99518,5.34515,18.65485,4.00482,17,4z"
      ></path>
      <path
        className="uim-quaternary"
        d="M16.52,12.90991c-1.09963-1.04992-2.83037-1.04992-3.93,0l-1.41,1.41016c-0.18789,0.18415-0.29262,0.43692-0.29,0.7c-0.00271,0.26603,0.10182,0.52194,0.29,0.71l6.23,6.23c0.7152-0.08939,1.37132-0.44242,1.84-0.99C19.7334,20.42773,20.00035,19.7265,20,19v-2.62L16.52,12.90991z"
      ></path>
      <path
        className="uim-primary"
        d="M11.89,13.61l-2.48-2.49c-1.1016-1.04499-2.8284-1.04499-3.93,0L2,14.6V19c0.00487,1.65483,1.34517,2.99513,3,3h12c0.13773,0.00207,0.27526-0.01134,0.41-0.04c0.7152-0.08939,1.37132-0.44242,1.84-0.99L11.89,13.61z M14.68066,7.59082C14.12849,7.5913,13.68048,7.14407,13.68,6.5919c-0.00034-0.39084,0.22709-0.74604,0.58221-0.90928l4.50634-2.07324c0.50159-0.23084,1.09533-0.01135,1.32617,0.49023s0.01135,1.09533-0.49023,1.32617l0,0L15.09814,7.499C14.9673,7.55957,14.82484,7.59091,14.68066,7.59082z"
      ></path>
      <path
        className="uim-primary"
        d="M19.186,9.66406c-0.14418,0.00009-0.28665-0.03123-0.41749-0.09179L14.26221,7.499c-0.50159-0.23084-0.72107-0.82458-0.49024-1.32617s0.82458-0.72107,1.32617-0.49023l0,0l4.50635,2.07324c0.5017,0.23065,0.72142,0.82433,0.49078,1.32602c-0.16324,0.35508-0.51842,0.5825-0.90923,0.58218L19.186,9.66406z"
      ></path>
      <circle cx="20" cy="4" r="2" className="uim-primary"></circle>
      <circle cx="15" cy="6.5" r="2" className="uim-primary"></circle>
      <circle cx="20" cy="9" r="2" className="uim-primary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MImageShare;
