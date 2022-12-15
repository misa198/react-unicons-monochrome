import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MWebcam: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="10" r="7" className="uim-quaternary"></circle>
      <path
        className="uim-tertiary"
        d="M20.63116,18.44141c-0.51448-1.72425-1.53387-3.25477-2.92663-4.39405c-2.22807,3.15052-6.58828,3.89832-9.73881,1.67025c-0.64751-0.45792-1.21233-1.02274-1.67025-1.67025c-1.39276,1.13928-2.41215,2.6698-2.92663,4.39405c-0.30667,1.06305,0.30649,2.17342,1.36953,2.4801C4.91977,20.97384,5.10766,21.00026,5.29645,21h13.4071c1.1064,0.00154,2.00456-0.89412,2.0061-2.00051C20.70992,18.81069,20.68349,18.62281,20.63116,18.44141z"
      ></path>
      <circle cx="12" cy="10" r="2" className="uim-primary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MWebcam;
