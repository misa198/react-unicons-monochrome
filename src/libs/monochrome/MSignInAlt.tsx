import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MSignInAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M21,12c0-.34-.02-.67-.05-1H12.5V9.5a.99991.99991,0,0,0-1.707-.707l-2.5,2.5a.99962.99962,0,0,0,0,1.41406l2.5,2.5A.99991.99991,0,0,0,12.5,14.5V13h8.45C20.98,12.67,21,12.34,21,12Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M12.5,13v1.5a.99989.99989,0,0,1-1.707.707l-2.5-2.5a.99962.99962,0,0,1,0-1.41406l2.5-2.5A.99991.99991,0,0,1,12.5,9.5V11h8.44952a10,10,0,1,0,0,2Z"
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

export default MSignInAlt;
