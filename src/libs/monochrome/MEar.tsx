import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MEar: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M18.05524,12.49615a6.99715,6.99715,0,1,0-11.0459,1.3991,2.06394,2.06394,0,0,1,.38925,2.38086,3.9869,3.9869,0,0,0,7.09262,3.63911Z"
      ></path>
      <path
        className="uim-primary"
        d="M12,6a3.00078,3.00078,0,0,0-2.01758,5.2207c.01.0091.16113.16992.19336.21485a.9875.9875,0,0,1,0,1.11914.99952.99952,0,1,0,1.64844,1.13086,2.98332,2.98332,0,0,0-.00488-3.38867,3.04516,3.04516,0,0,0-.35254-.41407c-.0196-.01959-.251-.25781-.29688-.32422A1.00022,1.00022,0,1,1,13,9a1,1,0,0,0,2,0A3.00328,3.00328,0,0,0,12,6Z"
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

export default MEar;
