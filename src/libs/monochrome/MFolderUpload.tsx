import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFolderUpload: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M19,21.5H5a3.00328,3.00328,0,0,1-3-3V5.5a3.00328,3.00328,0,0,1,3-3H9.55859A2.99629,2.99629,0,0,1,12.4043,4.55078L12.7207,5.5H19a3.00328,3.00328,0,0,1,3,3v10A3.00328,3.00328,0,0,1,19,21.5Z"
      ></path>
      <path
        className="uim-primary"
        d="M12,17.5a.99943.99943,0,0,1-1-1v-5a1,1,0,0,1,2,0v5A.99943.99943,0,0,1,12,17.5Z"
      ></path>
      <path
        className="uim-primary"
        d="M14,14.5a.99676.99676,0,0,1-.707-.293L12,12.91406l-1.293,1.293A.99989.99989,0,0,1,9.293,12.793l2-2a.99962.99962,0,0,1,1.41406,0l2,2A1,1,0,0,1,14,14.5Z"
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

export default MFolderUpload;
