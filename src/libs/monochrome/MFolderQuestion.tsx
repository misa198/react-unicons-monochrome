import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFolderQuestion: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M19,21.5H5a3.00328,3.00328,0,0,1-3-3V5.5a3.00328,3.00328,0,0,1,3-3H9.55859a2.99737,2.99737,0,0,1,2.8462,2.05078L12.7207,5.5H19a3.00328,3.00328,0,0,1,3,3v10A3.00328,3.00328,0,0,1,19,21.5Z"
      ></path>
      <path
        className="uim-primary"
        d="M11.86621 15.00391a1 1 0 0 1 0-2 1 1 0 0 0 0-2 1.00189 1.00189 0 0 0-.86621.5 1.00016 1.00016 0 0 1-1.73242-1 3.0002 3.0002 0 1 1 2.59863 4.5zM11.86963 18a1.00361 1.00361 0 0 1-.38965-.07031 1.018 1.018 0 0 1-.32031-.21973.98559.98559 0 0 1-.29-.70019.99627.99627 0 0 1 .07031-.38965 1.01246 1.01246 0 0 1 .21973-.32032.97979.97979 0 0 1 .90039-.28027c.06982.02051.12988.04.18994.06055.06006.0293.11963.05957.16992.08984a.643.643 0 0 1 .1499.12988.87638.87638 0 0 1 .22022.32032 1.00992 1.00992 0 0 1 .07959.38965.99555.99555 0 0 1-.29981.70019 1.01587 1.01587 0 0 1-.31982.21973A.99067.99067 0 0 1 11.86963 18z"
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

export default MFolderQuestion;
