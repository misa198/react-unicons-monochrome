import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MPathfinderUnite: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M21,22H8.53857a.99974.99974,0,0,1-1-1V16.46191H3a.99973.99973,0,0,1-1-1V3A.99974.99974,0,0,1,3,2H15.46143a.99974.99974,0,0,1,1,1V7.53809H21a.99973.99973,0,0,1,1,1V21A.99974.99974,0,0,1,21,22Z"
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

export default MPathfinderUnite;
