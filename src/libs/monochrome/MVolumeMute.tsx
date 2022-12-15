import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MVolumeMute: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M16,15.5a1,1,0,0,1-.707-1.707l5-5A.99989.99989,0,0,1,21.707,10.207l-5,5A.99676.99676,0,0,1,16,15.5Z"
      ></path>
      <path
        className="uim-primary"
        d="M21,15.5a.99676.99676,0,0,1-.707-.293l-5-5A.99989.99989,0,0,1,16.707,8.793l5,5A1,1,0,0,1,21,15.5Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M12,20a.99926.99926,0,0,1-.62451-.21875L6.64941,16H3a.99974.99974,0,0,1-1-1V9A.99974.99974,0,0,1,3,8H6.64941l4.72608-3.78125A1.00014,1.00014,0,0,1,13,5V19a.99992.99992,0,0,1-1,1Z"
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

export default MVolumeMute;
