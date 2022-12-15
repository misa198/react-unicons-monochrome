import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MDatabaseAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M16,10H8c-2.20917,0-4-1.79083-4-4v6c0.0022,2.20825,1.79175,3.9978,4,4h8c2.20825-0.0022,3.9978-1.79175,4-4V6C20,8.20917,18.20917,10,16,10z"
      ></path>
      <path
        className="uim-tertiary"
        d="M16,16H8c-2.20825-0.0022-3.9978-1.79175-4-4v6c0.0022,2.20825,1.79175,3.9978,4,4h8c2.20825-0.0022,3.9978-1.79175,4-4v-6C19.9978,14.20825,18.20825,15.9978,16,16z"
      ></path>
      <polygon
        className="uim-quaternary"
        points="20 5.998 20 6 20 5.999"
      ></polygon>
      <path
        className="uim-tertiary"
        d="M16,10H8c-2.20914,0-4-1.79086-4-4s1.79086-4,4-4h8c2.20914,0,4,1.79086,4,4S18.20914,10,16,10z"
      ></path>
      <circle cx="8" cy="13" r="1" className="uim-primary"></circle>
      <circle cx="8" cy="19" r="1" className="uim-primary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MDatabaseAlt;
