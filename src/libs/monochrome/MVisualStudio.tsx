import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MVisualStudio: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M9.13313,14.2416,4.19906,18.08677,2.04679,17.01489V6.99362L4.19056,5.91323l4.9,3.85368L16.849,2l5.10421,2.03318V19.93279L16.87452,22Zm7.56275,1.35261V8.40579L12.051,12.00425l4.64484,3.59ZM4.3692,14.30115l2.44152-2.22033L4.3692,9.64781Z"
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

export default MVisualStudio;
