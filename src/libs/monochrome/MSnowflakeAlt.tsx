import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MSnowflakeAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M17.65686 17.65686a1 1 0 1 0 1.41418 0A1 1 0 0 0 17.65686 17.65686zM6.34314 6.34314a1 1 0 1 0-1.41418 0A1 1 0 0 0 6.34314 6.34314zM4.929 17.65686a1 1 0 1 0 1.41418 0A.99988.99988 0 0 0 4.929 17.65686zM19.071 6.34314a1 1 0 1 0-1.41418 0A.99988.99988 0 0 0 19.071 6.34314z"
      ></path>
      <path
        className="uim-primary"
        d="M21,11H19.41406l1.293-1.293A.99989.99989,0,0,0,19.293,8.293L16.58594,11H14.41406l2.293-2.293A.99989.99989,0,0,0,15.293,7.293L13,9.58594V7.41406l2.707-2.707A.99989.99989,0,0,0,14.293,3.293L13,4.58594V3a1,1,0,0,0-2,0V4.58594L9.707,3.293A.99989.99989,0,0,0,8.293,4.707L11,7.41406V9.58594L8.707,7.293A.99989.99989,0,0,0,7.293,8.707L9.58594,11H7.41406L4.707,8.293A.99989.99989,0,0,0,3.293,9.707L4.58594,11H3a1,1,0,0,0,0,2H4.58594L3.293,14.293A.99989.99989,0,1,0,4.707,15.707L7.41406,13H9.58594L7.293,15.293A.99989.99989,0,1,0,8.707,16.707L11,14.41406v2.17188L8.293,19.293A.99989.99989,0,0,0,9.707,20.707L11,19.41406V21a1,1,0,0,0,2,0V19.41406l1.293,1.293A.99989.99989,0,0,0,15.707,19.293L13,16.58594V14.41406l2.293,2.293A.99989.99989,0,0,0,16.707,15.293L14.41406,13h2.17188l2.707,2.707A.99989.99989,0,0,0,20.707,14.293L19.41406,13H21a1,1,0,0,0,0-2Z"
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

export default MSnowflakeAlt;
