import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MToiletPaper: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <ellipse
        cx="7"
        cy="7.993"
        className="uim-primary"
        rx="1"
        ry="1.25"
      ></ellipse>
      <path
        className="uim-tertiary"
        d="M7,2C4.24316,2,2,4.69141,2,8s2.24316,6,5,6,5-2.69141,5-6S9.75684,2,7,2ZM7,9.24286a1.14613,1.14613,0,0,1-1-1.25,1.14613,1.14613,0,0,1,1-1.25,1.14613,1.14613,0,0,1,1,1.25A1.14613,1.14613,0,0,1,7,9.24286Z"
      ></path>
      <path
        className="uim-quaternary"
        d="M22.75977,20.34961A7.50372,7.50372,0,0,1,21,15.459V8c0-3.30859-2.24316-6-5-6H7c2.75684,0,5,2.69141,5,6v7.459a9.50732,9.50732,0,0,0,2.24023,6.19141A1.00118,1.00118,0,0,0,15,22h7a1.00028,1.00028,0,0,0,.75977-1.65039Z"
      ></path>
      <path className="uim-primary" d="M12,8c0,3.30859-2.24316,6-5,6h5Z"></path>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MToiletPaper;
