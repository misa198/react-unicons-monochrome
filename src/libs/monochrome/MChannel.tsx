import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MChannel: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M4,22a3,3,0,1,1,3-3A3.00328,3.00328,0,0,1,4,22Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M10.2793,15.019a.99911.99911,0,0,0-1.37012-.34912l-3.178,1.88843A2.99866,2.99866,0,0,1,6.87891,18.203l3.05175-1.81335A1.00019,1.00019,0,0,0,10.2793,15.019Z"
      ></path>
      <path
        className="uim-quaternary"
        d="M20,22a3,3,0,1,1,3-3A3.00328,3.00328,0,0,1,20,22Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M18.26886,16.55835l-3.178-1.88843a1.00011,1.00011,0,0,0-1.02148,1.71973L17.12109,18.203A2.99845,2.99845,0,0,1,18.26886,16.55835Z"
      ></path>
      <path
        className="uim-quaternary"
        d="M12,8a3,3,0,1,1,3-3A3.00328,3.00328,0,0,1,12,8Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M12,8a2.96485,2.96485,0,0,1-1-.18433V11a1,1,0,0,0,2,0V7.81573A2.96457,2.96457,0,0,1,12,8Z"
      ></path>
      <circle cx="12" cy="14" r="3" className="uim-primary"></circle>
      <path
        className="uim-primary"
        d="M12,18a4,4,0,1,1,4-4A4.00427,4.00427,0,0,1,12,18Zm0-6a2,2,0,1,0,2,2A2.00229,2.00229,0,0,0,12,12Z"
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

export default MChannel;
