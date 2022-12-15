import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MExternalLinkAlt: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M21,2.0003H15a1,1,0,0,0,0,2h3.58594L8.293,14.29326A.99989.99989,0,1,0,9.707,15.70733L20,5.41436V9.0003a1,1,0,0,0,2,0v-6A.99942.99942,0,0,0,21,2.0003Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M16,22.0003H5a3.00328,3.00328,0,0,1-3-3v-11a3.00328,3.00328,0,0,1,3-3h7.17969a1,1,0,0,1,0,2H5a1.00067,1.00067,0,0,0-1,1v11a1.00068,1.00068,0,0,0,1,1H16a1.00068,1.00068,0,0,0,1-1V11.81963a1,1,0,0,1,2,0V19.0003A3.00328,3.00328,0,0,1,16,22.0003Z"
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

export default MExternalLinkAlt;
