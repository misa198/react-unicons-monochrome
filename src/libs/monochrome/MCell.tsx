import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCell: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <polygon
        className="uim-quaternary"
        points="7.5 13.28 7.5 18.4 12 20.96 16.5 18.4 16.5 13.28 12 10.72 7.5 13.28"
      ></polygon>
      <polygon
        className="uim-tertiary"
        points="3 5.6 3 10.72 7.5 13.28 12 10.72 12 5.6 7.5 3.04 3 5.6"
      ></polygon>
      <polygon
        className="uim-primary"
        points="12 5.6 12 10.72 16.5 13.28 21 10.72 21 5.6 16.5 3.04 12 5.6"
      ></polygon>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MCell;
