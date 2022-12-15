import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCoronavirus: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <circle cx="9.5" cy="10.5" r="1.5" className="uim-secondary"></circle>
      <circle cx="9" cy="15" r="1" className="uim-primary"></circle>
      <circle cx="14.5" cy="13.5" r="1.5" className="uim-secondary"></circle>
      <circle cx="15" cy="9" r="1" className="uim-primary"></circle>
      <path
        className="uim-quaternary"
        d="M12 8a1 1 0 0 1-1-1V2a1 1 0 0 1 2 0V7A1 1 0 0 1 12 8zM12 23a1 1 0 0 1-1-1V17a1 1 0 0 1 2 0v5A1 1 0 0 1 12 23zM22 13H18a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zM6 13H2a1 1 0 0 1 0-2H6a1 1 0 0 1 0 2z"
      ></path>
      <path
        className="uim-tertiary"
        d="M18,13a1,1,0,0,1,0-2h2.941A9.01292,9.01292,0,0,0,13,3.059V7a1,1,0,0,1-2,0V3.059A9.01292,9.01292,0,0,0,3.059,11H6a1,1,0,0,1,0,2H3.059A9.01292,9.01292,0,0,0,11,20.941V17a1,1,0,0,1,2,0v3.941A9.01292,9.01292,0,0,0,20.941,13ZM9,16a1,1,0,1,1,1-1A1,1,0,0,1,9,16Zm.5-4A1.5,1.5,0,1,1,11,10.5,1.5,1.5,0,0,1,9.5,12Zm5,3A1.5,1.5,0,1,1,16,13.5,1.5,1.5,0,0,1,14.5,15Zm.5-5a1,1,0,1,1,1-1A1,1,0,0,1,15,10Z"
      ></path>
      <path
        className="uim-primary"
        d="M4.97852 6.39258A9.06336 9.06336 0 0 1 6.39258 4.97852l-.75684-.75684A.99989.99989 0 0 0 4.22168 5.63574zM4.97852 17.60742l-.75684.75684a.99989.99989 0 1 0 1.41406 1.41406l.75684-.75684A9.06336 9.06336 0 0 1 4.97852 17.60742zM19.02148 17.60742a9.06336 9.06336 0 0 1-1.41406 1.41406l.75684.75684a.99989.99989 0 0 0 1.41406-1.41406zM19.02148 6.39258l.75684-.75684a.99989.99989 0 0 0-1.41406-1.41406l-.75684.75684A9.06336 9.06336 0 0 1 19.02148 6.39258z"
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

export default MCoronavirus;
