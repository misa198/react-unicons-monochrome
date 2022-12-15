import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MRuler: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M10.5859 20.48539L7.05036 16.94986a1 1 0 0 1 0-1.41421h0a1 1 0 0 1 1.41422 0l3.53553 3.53553zM13.41433 17.657L11.293 15.53564a1 1 0 0 1 0-1.41421h0a1 1 0 0 1 1.41421 0l2.12132 2.12132zM16.24275 14.82854L12.70722 11.293a1 1 0 0 1 0-1.41421h0a1 1 0 0 1 1.41421 0L17.657 13.41432zM19.07118 12.00011L16.94986 9.87879a1 1 0 0 1 0-1.41421h0a1 1 0 0 1 1.41421 0l2.12132 2.12132z"
      ></path>
      <path
        className="uim-tertiary"
        d="M22.60645,7.05078,16.94971,1.39355a.99967.99967,0,0,0-1.41407,0L1.39355,15.53516a.99964.99964,0,0,0,0,1.41406l5.65674,5.65723a.99967.99967,0,0,0,1.41407,0l2.12133-2.12128L7.05035,16.94983A1,1,0,1,1,8.4646,15.53564L11.99994,19.071l1.41424-1.41418L11.293,15.53564a1,1,0,0,1,1.41418-1.41424l2.12122,2.12121,1.41418-1.41418L12.70721,11.293a1,1,0,0,1,1.41425-1.41419l3.53546,3.53547,1.41419-1.41419L16.94983,9.87878a1,1,0,0,1,1.41424-1.41424l2.12134,2.12134,2.121-2.121A.99964.99964,0,0,0,22.60645,7.05078Z"
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

export default MRuler;
