import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MSignOutAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M15.707,11.293l-4-4A.99989.99989,0,0,0,10.293,8.707L12.58594,11H2.05c-.03.33-.05.66-.05,1s.02.67.05,1h10.536l-2.293,2.293A.99989.99989,0,1,0,11.707,16.707l4-4A.99962.99962,0,0,0,15.707,11.293Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M12,2a10.00042,10.00042,0,0,0-9.94952,9H12.58594L10.293,8.707A.99989.99989,0,0,1,11.707,7.293l4,4a.99962.99962,0,0,1,0,1.41406l-4,4A.99989.99989,0,0,1,10.293,15.293L12.58594,13H2.05048A9.99983,9.99983,0,1,0,12,2Z"
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

export default MSignOutAlt;
