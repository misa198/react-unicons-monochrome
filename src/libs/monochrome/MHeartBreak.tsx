import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MHeartBreak: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M12,21.228a.99676.99676,0,0,1-.707-.293L3.83691,13.479A6.27237,6.27237,0,0,1,12,3.99951,6.27237,6.27237,0,0,1,20.16309,13.479L12.707,20.93506A.99676.99676,0,0,1,12,21.228Z"
      ></path>
      <path
        className="uim-primary"
        d="M12.8968,15.44189l1.96777-3.99707a1.00031,1.00031,0,0,0-.65186-1.41162L11.4715,9.34033,14.85633,2.851a6.22751,6.22751,0,0,0-2.854,1.1471L9.1131,9.5376a1.00048,1.00048,0,0,0,.64161,1.43213l2.77.6997-1.42188,2.88868a.99992.99992,0,1,0,1.794.88378Z"
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

export default MHeartBreak;
