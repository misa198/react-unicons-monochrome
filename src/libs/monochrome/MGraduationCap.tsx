import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MGraduationCap: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M15,20.5H7c-1.7,0-3-1.3-3-3v-5.3c0-0.6,0.4-1,1-1s11.4,0,12,0s1,0.4,1,1v5.3C18,19.2,16.7,20.5,15,20.5z"
      ></path>
      <path
        className="uim-primary"
        d="M21.5,10.2l-1-0.5c0,0,0,0,0,0l-9-5c-0.3-0.2-0.7-0.2-1,0l-9,5C1,9.9,0.9,10.5,1.1,11c0.1,0.2,0.2,0.3,0.4,0.4l9,5c0.3,0.2,0.7,0.2,1,0l8.5-4.7v0.3v2.6c0,0.6,0.4,1,1,1s1-0.4,1-1v-2.6v-0.4v-0.4C22,10.7,21.8,10.4,21.5,10.2z"
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

export default MGraduationCap;
