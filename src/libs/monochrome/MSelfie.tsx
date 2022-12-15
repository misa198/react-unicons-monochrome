import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MSelfie: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M16,2H8C6.3,2,5,3.3,5,5v14c0,1.7,1.3,3,3,3h8c1.7,0,3-1.3,3-3V5C19,3.3,17.7,2,16,2z M16,19L16,19H8c-0.6,0-1-0.4-1-1l0,0c0-1.9,1-3.5,2.5-4.3l0,0C9.2,13.2,9,12.6,9,12c0-1.7,1.3-3,3-3s3,1.3,3,3c0,0.6-0.2,1.2-0.5,1.7C16,14.5,17,16.1,17,18C17,18.6,16.6,19,16,19z"
      ></path>
      <circle cx="12" cy="5" r="1" className="uim-primary"></circle>
      <path
        className="uim-quaternary"
        d="M12,15c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S13.7,15,12,15z"
      ></path>
      <path
        className="uim-secondary"
        d="M14.5,13.7C13.9,14.5,13,15,12,15s-1.9-0.5-2.5-1.3C8,14.5,7,16.1,7,18l0,0c0,0.6,0.4,1,1,1h8l0,0c0.6,0,1-0.4,1-1C17,16.1,16,14.5,14.5,13.7z"
      ></path>
      <path
        className="uim-primary"
        d="M16,22H8c-1.7,0-3-1.3-3-3v-1h14v1C19,20.7,17.7,22,16,22z"
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

export default MSelfie;
