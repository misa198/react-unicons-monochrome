import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MDatabase: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M12,10c-3.97559,0-8-1.37402-8-4v6c0,2.62598,4.02441,4,8,4s8-1.37402,8-4V6C20,8.62598,15.97559,10,12,10z"
      ></path>
      <polygon
        className="uim-quaternary"
        points="20 5.998 20 6 20 5.999"
      ></polygon>
      <path
        className="uim-tertiary"
        d="M12,16c-3.97559,0-8-1.37402-8-4v6c0,2.62598,4.02441,4,8,4s8-1.37402,8-4v-6C20,14.62598,15.97559,16,12,16z"
      ></path>
      <circle cx="8" cy="18.5" r="1" className="uim-primary"></circle>
      <circle cx="8" cy="12.5" r="1" className="uim-primary"></circle>
      <path
        className="uim-tertiary"
        d="M12,10c-3.97559,0-8-1.374-8-4s4.02441-4,8-4s8,1.374,8,4S15.97559,10,12,10z"
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

export default MDatabase;
