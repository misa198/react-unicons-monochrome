import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MTachometerFast: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M19.48047,20H4.51953a1.00022,1.00022,0,0,1-.83008-.44238A9.999,9.999,0,1,1,22,14a9.93248,9.93248,0,0,1-1.68945,5.55762A1.00022,1.00022,0,0,1,19.48047,20Z"
      ></path>
      <path
        className="uim-primary"
        d="M19.47949,20a1,1,0,0,1-.8291-1.55762,8,8,0,1,0-13.30078,0,1,1,0,0,1-1.66016,1.11524A9.999,9.999,0,1,1,22,14a9.93248,9.93248,0,0,1-1.68945,5.55762A.99828.99828,0,0,1,19.47949,20Z"
      ></path>
      <path
        className="uim-primary"
        d="M10,18a1,1,0,0,1-.707-1.707l6-6A.99989.99989,0,0,1,16.707,11.707l-6,6A.99676.99676,0,0,1,10,18Z"
      ></path>
      <circle cx="12" cy="15" r="2" className="uim-primary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MTachometerFast;
