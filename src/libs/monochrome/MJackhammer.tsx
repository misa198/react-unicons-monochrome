import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MJackhammer: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M13,15h-2c-1.1,0-2-0.9-2-2v-1.2C7.8,11.4,7,10.3,7,9V5c0-1.7,1.3-3,3-3h4c1.7,0,3,1.3,3,3v4c0,1.3-0.8,2.4-2,2.8V13C15,14.1,14.1,15,13,15z M3,8C2.4,8,2,7.6,2,7c0,0,0,0,0,0V5c0-0.6,0.4-1,1-1s1,0.4,1,1v2C4,7.6,3.6,8,3,8C3,8,3,8,3,8z"
      ></path>
      <path
        className="uim-primary"
        d="M11,21C11,21,11,21,11,21c0,0.6,0.4,1,1,1c0,0,0,0,0,0c0.6,0,1-0.4,1-1v-6h-2V21z"
      ></path>
      <rect width="3" height="2" x="4" y="5" className="uim-quaternary"></rect>
      <path
        className="uim-primary"
        d="M12,9c-0.6,0-1-0.4-1-1c0,0,0,0,0,0V7c0-0.6,0.4-1,1-1s1,0.4,1,1v1C13,8.6,12.6,9,12,9C12,9,12,9,12,9z"
      ></path>
      <path
        className="uim-tertiary"
        d="M21,8c-0.6,0-1-0.4-1-1c0,0,0,0,0,0V5c0-0.6,0.4-1,1-1s1,0.4,1,1v2C22,7.6,21.6,8,21,8C21,8,21,8,21,8z"
      ></path>
      <rect width="3" height="2" x="17" y="5" className="uim-quaternary"></rect>
      <path
        className="uim-quaternary"
        d="M16,22c-0.6,0-1-0.4-1-1c0-0.3,0.1-0.5,0.3-0.7l0.8-0.8l-0.3-0.1c-0.5-0.1-0.9-0.7-0.7-1.2c0-0.2,0.1-0.3,0.3-0.4l2.1-2.1c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4L18,17.9l0.3,0.1c0.5,0.1,0.8,0.7,0.7,1.2c0,0.2-0.1,0.3-0.3,0.4l-2,2C16.5,21.9,16.3,22,16,22z M8,22c-0.3,0-0.5-0.1-0.7-0.3l-2-2c-0.4-0.4-0.4-1,0-1.4c0.1-0.1,0.3-0.2,0.4-0.3L6,17.9l-0.8-0.8c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l2.1,2.1c0.4,0.4,0.4,1,0,1.4c-0.1,0.1-0.3,0.2-0.4,0.3l-0.3,0.1l0.8,0.8c0.4,0.4,0.4,1,0,1.4C8.5,21.9,8.3,22,8,22z"
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

export default MJackhammer;
