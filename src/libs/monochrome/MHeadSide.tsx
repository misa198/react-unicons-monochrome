import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MHeadSide: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M18.5,22h-9a.99974.99974,0,0,1-1-1V19h-1a2.00229,2.00229,0,0,1-2-2V15h-1a.99944.99944,0,0,1-.9043-1.42627L5.5,9.53027V9.5A7.44044,7.44044,0,0,1,7.77734,4.11719a7.36485,7.36485,0,0,1,5.45313-2.11377A7.698,7.698,0,0,1,20.5,9.77246V10a1.03147,1.03147,0,0,1-.0332.25635l-1.92969,7.26611.92383,3.2002A1.00064,1.00064,0,0,1,18.5,22Z"
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

export default MHeadSide;
