import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MBan: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M12,2A10,10,0,1,0,22,12,10.01177,10.01177,0,0,0,12,2Zm8,10a7.951,7.951,0,0,1-1.68835,4.89758L7.10242,5.68835A7.98659,7.98659,0,0,1,20,12ZM4,12A7.951,7.951,0,0,1,5.68835,7.10242L16.89758,18.31165A7.98659,7.98659,0,0,1,4,12Z"
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

export default MBan;
