import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCommentShield: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M10.93359,22h-8a.99992.99992,0,0,1-.707-1.707l1.67481-1.67481A9.00076,9.00076,0,1,1,10.93359,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M17.95557,12a1.00233,1.00233,0,0,1-.58155-.18652L15.75146,10.6543a4.5635,4.5635,0,0,1-1.90722-3.70606V3.63379a1.00257,1.00257,0,0,1,.36914-.77637.98767.98767,0,0,1,.83545-.20215,2.9869,2.9869,0,0,0,2.334-.47461,1.0046,1.0046,0,0,1,1.146,0,2.98937,2.98937,0,0,0,2.333.47461.99209.99209,0,0,1,.83545.20215,1.0026,1.0026,0,0,1,.36914.77637V6.94824a4.56263,4.56263,0,0,1-1.90772,3.70606l-1.62158,1.15918A1.00121,1.00121,0,0,1,17.95557,12Z"
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

export default MCommentShield;
