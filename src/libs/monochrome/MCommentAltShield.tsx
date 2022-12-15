import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCommentAltShield: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M20.54466,22a.99578.99578,0,0,1-.67822-.26562L16.90355,19H8.54466a3.00328,3.00328,0,0,1-3-3V9a3.00328,3.00328,0,0,1,3-3h10a3.00328,3.00328,0,0,1,3,3V21a1.00032,1.00032,0,0,1-1,1Z"
      ></path>
      <path
        className="uim-primary"
        d="M6.56641,12a.99863.99863,0,0,1-.58106-.18652L4.36328,10.6543a4.56311,4.56311,0,0,1-1.9082-3.70606V3.63379a.9988.9988,0,0,1,1.2041-.97852,2.99,2.99,0,0,0,2.334-.47461,1.002,1.002,0,0,1,1.14649,0,2.99249,2.99249,0,0,0,2.334.47461.9988.9988,0,0,1,1.2041.97852V6.94824a4.56309,4.56309,0,0,1-1.9082,3.70606L7.14746,11.81348A.99862.99862,0,0,1,6.56641,12Z"
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

export default MCommentAltShield;
