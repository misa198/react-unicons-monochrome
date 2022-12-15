import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MStethoscopeAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M8 15a.99811.99811 0 0 1-.62451-.21924l-3.499-2.79883A4.975 4.975 0 0 1 2 8.07764V3A1 1 0 0 1 3 2H5A1 1 0 0 1 5 4H4V8.07764a2.985 2.985 0 0 0 1.126 2.34277L8 12.71924l2.87451-2.29883A2.98608 2.98608 0 0 0 12 8.07764V4H11a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1V8.07764a4.976 4.976 0 0 1-1.876 3.90429L8.62451 14.78076A.99811.99811 0 0 1 8 15zM19 14a3 3 0 1 1 3-3A3.00328 3.00328 0 0 1 19 14z"
      ></path>
      <path
        className="uim-primary"
        d="M19,14a2.96485,2.96485,0,0,1-1-.18433V15.5a4.5,4.5,0,0,1-9,0V14.48047l-.37549.30029a.99909.99909,0,0,1-1.249,0L7,14.48041V15.5a6.5,6.5,0,0,0,13,0V13.81573A2.96457,2.96457,0,0,1,19,14Z"
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

export default MStethoscopeAlt;
