import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MArrowsShrinkV: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M12 18a.99676.99676 0 0 1-.707-.293l-2.5-2.5A.99989.99989 0 0 1 10.207 13.793L12 15.58594l1.793-1.793A.99989.99989 0 0 1 15.207 15.207l-2.5 2.5A.99676.99676 0 0 1 12 18zM14.5 10.5a.99676.99676 0 0 1-.707-.293L12 8.41406l-1.793 1.793A.99989.99989 0 0 1 8.793 8.793l2.5-2.5a.99962.99962 0 0 1 1.41406 0l2.5 2.5A1 1 0 0 1 14.5 10.5z"
      ></path>
      <path
        className="uim-primary"
        d="M12,18a.99974.99974,0,0,1-1-1V7a1,1,0,0,1,2,0V17A.99974.99974,0,0,1,12,18Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M17 4H7A1 1 0 0 1 7 2H17a1 1 0 0 1 0 2zM17 22H7a1 1 0 0 1 0-2H17a1 1 0 0 1 0 2z"
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

export default MArrowsShrinkV;
