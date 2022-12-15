import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCalendarAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M22,9H2V6c0-1.65685,1.34315-3,3-3h14c1.65685,0,3,1.34315,3,3V9z"
      ></path>
      <path
        className="uim-quaternary"
        d="M2,19c0.00183,1.65613,1.34387,2.99817,3,3h14c1.65613-0.00183,2.99817-1.34387,3-3V9H2V19z"
      ></path>
      <path
        className="uim-primary"
        d="M7,7C6.44772,7,6,6.55228,6,6V2c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v4C8,6.55228,7.55228,7,7,7z M17,7c-0.55228,0-1-0.44772-1-1V2c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v4C18,6.55228,17.55228,7,17,7z"
      ></path>
      <circle cx="7" cy="13" r="1" className="uim-primary"></circle>
      <circle cx="17" cy="13" r="1" className="uim-primary"></circle>
      <circle cx="12" cy="13" r="1" className="uim-primary"></circle>
      <circle cx="12" cy="17" r="1" className="uim-primary"></circle>
      <circle cx="7" cy="17" r="1" className="uim-primary"></circle>
      <circle cx="17" cy="17" r="1" className="uim-primary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MCalendarAlt;
