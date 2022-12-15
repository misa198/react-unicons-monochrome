import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMapMarker: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M12,22a.99325.99325,0,0,1-.65039-.24121C11.04883,21.502,4,15.39746,4,10a8,8,0,0,1,16,0c0,5.39746-7.04883,11.502-7.34961,11.75879A.99325.99325,0,0,1,12,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M12,14a4,4,0,1,1,4-4A4.004,4.004,0,0,1,12,14Z"
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

export default MMapMarker;
