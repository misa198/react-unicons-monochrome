import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MWebGrid: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <polygon
        className="uim-quaternary"
        points="2 13 14 13 14 22 16 22 16 13 16 13 16 11 16 11 16 2 14 2 14 11 2 11"
      ></polygon>
      <path
        className="uim-primary"
        d="M21,22h-5l0,0V2l0,0h5c0.55228,0,1,0.44772,1,1v18C22,21.55228,21.55228,22,21,22z"
      ></path>
      <path
        className="uim-tertiary"
        d="M14 22H3c-.55229 0-1-.44772-1-1v-8l0 0h12l0 0V22L14 22zM14 11H2l0 0V3c0-.55229.44771-1 1-1h11l0 0V11L14 11z"
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

export default MWebGrid;
