import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MLink: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M12.979,15.50488a4.43353,4.43353,0,0,1-2.92627-1.09961,1.84838,1.84838,0,0,1-.23584-.2041.99994.99994,0,0,1,1.40137-1.42676.55055.55055,0,0,1,.11914.09668,2.45734,2.45734,0,0,0,3.38916-.09277l4.54785-4.54785a2.47832,2.47832,0,0,0-3.50488-3.50488L14.041,6.4541A.99989.99989,0,0,1,12.627,5.04l1.72852-1.72852a4.47811,4.47811,0,0,1,6.333,6.333l-4.54786,4.54785A4.4623,4.4623,0,0,1,12.979,15.50488Z"
      ></path>
      <path
        className="uim-primary"
        d="M6.478,21.99805a4.47608,4.47608,0,0,1-3.16651-7.64258L7.85938,9.80762a4.4558,4.4558,0,0,1,6.08789-.21289,1.84838,1.84838,0,0,1,.23584.2041.99994.99994,0,0,1-1.40137,1.42676.55055.55055,0,0,1-.11914-.09668,2.45636,2.45636,0,0,0-3.38916.09277L4.72559,15.76953a2.47832,2.47832,0,0,0,3.50488,3.50488L9.959,17.5459A.99989.99989,0,0,1,11.373,18.96L9.64453,20.68848A4.4638,4.4638,0,0,1,6.478,21.99805Z"
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

export default MLink;
