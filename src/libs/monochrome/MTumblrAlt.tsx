import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MTumblrAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M16.7855,17.97432a4.7287,4.7287,0,0,1-1.61437.34575,1.75537,1.75537,0,0,1-1.92505-1.97215V11h4.01646V7.0946H13.26117V2H10.331a.15657.15657,0,0,0-.14333.1493A6.11958,6.11958,0,0,1,6.25252,7.5386V11.122H8.27671v5.53565c0,2.23667,1.65047,5.41529,6.00756,5.34112a5.33685,5.33685,0,0,0,3.46321-1.17141l-.962-2.853"
        data-name="Brand Logos"
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

export default MTumblrAlt;
