import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MTrademark: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M9.5,9h-6a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z"
      ></path>
      <path
        className="uim-primary"
        d="M6.5 17a.99974.99974 0 0 1-1-1V8a1 1 0 0 1 2 0v8A.99974.99974 0 0 1 6.5 17zM13.5 17a.99974.99974 0 0 1-1-1V8a1 1 0 0 1 2 0v8A.99974.99974 0 0 1 13.5 17zM20.5 17a.99974.99974 0 0 1-1-1V8a1 1 0 0 1 2 0v8A.99974.99974 0 0 1 20.5 17z"
      ></path>
      <path
        className="uim-primary"
        d="M17,12.5a.99676.99676,0,0,1-.707-.293l-3.5-3.5A.99989.99989,0,0,1,14.207,7.293L17,10.08594l2.793-2.793A.99989.99989,0,0,1,21.207,8.707l-3.5,3.5A.99676.99676,0,0,1,17,12.5Z"
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

export default MTrademark;
