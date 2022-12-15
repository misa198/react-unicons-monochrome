import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MPalette: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M12.37207,23A11.00051,11.00051,0,0,1,1.37695,11.65723,11.001,11.001,0,0,1,22.21387,7.084a3.98019,3.98019,0,0,1,.18066,3.10547,3.8462,3.8462,0,0,1-2.0625,2.2461,4.99832,4.99832,0,0,0-2.85937,5.56152,4.20628,4.20628,0,0,1-.61426,3.17578,3.84086,3.84086,0,0,1-2.5,1.64551A10.96266,10.96266,0,0,1,12.37207,23Z"
      ></path>
      <circle cx="12.372" cy="6" r="1" className="uim-primary"></circle>
      <circle cx="12.372" cy="12" r="1" className="uim-primary"></circle>
      <circle cx="12.372" cy="18" r="1" className="uim-primary"></circle>
      <circle cx="6.372" cy="12" r="1" className="uim-primary"></circle>
      <circle cx="8.129" cy="7.757" r="1" className="uim-primary"></circle>
      <circle cx="8.129" cy="16.243" r="1" className="uim-primary"></circle>
      <circle cx="16.615" cy="7.757" r="1" className="uim-primary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MPalette;
