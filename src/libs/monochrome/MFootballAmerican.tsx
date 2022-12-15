import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFootballAmerican: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M21.8,5.7c-0.2-1.8-1.7-3.3-3.5-3.5c-1.1-0.1-2.3-0.1-3.4,0c-8,0.9-13.6,8.1-12.7,16.1c0.2,1.8,1.7,3.3,3.5,3.5c0.6,0.1,1.1,0.1,1.7,0.1c0.6,0,1.1,0,1.7-0.1C17.1,20.9,22.7,13.7,21.8,5.7z M14.8,10.6l0.7,0.7c0.4,0.4,0.4,1,0,1.4c-0.2,0.2-0.4,0.3-0.7,0.3s-0.5-0.1-0.7-0.3L13.4,12L12,13.4l0.7,0.7c0.4,0.4,0.4,1,0,1.4c-0.2,0.2-0.4,0.3-0.7,0.3s-0.5-0.1-0.7-0.3l-0.7-0.7l-3.1,3.1l-1.4-1.4l3.1-3.1l-0.7-0.7c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l0.7,0.7l1.4-1.4l-0.7-0.7c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l0.7,0.7l3.1-3.1l1.4,1.4L14.8,10.6z"
      ></path>
      <path
        className="uim-quaternary"
        d="M14.8,10.6l3.1-3.1l-1.4-1.4l-3.1,3.1l-0.7-0.7c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l0.7,0.7L10.6,12l-0.7-0.7c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l0.7,0.7l-3.1,3.1l1.4,1.4l3.1-3.1l0.7,0.7c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L12,13.4l1.4-1.4l0.7,0.7c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L14.8,10.6z"
      ></path>
      <path
        className="uim-primary"
        d="M11.5,3l9.5,9.5c0.3-0.7,0.5-1.5,0.6-2.2l-7.9-7.9C13,2.5,12.2,2.8,11.5,3z M2.4,13.7l7.9,7.9c0.7-0.2,1.5-0.4,2.2-0.6L3,11.5C2.8,12.2,2.5,13,2.4,13.7z"
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

export default MFootballAmerican;
