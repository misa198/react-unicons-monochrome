import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFlipH: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M21,13H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"
      ></path>
      <polygon
        className="uim-primary"
        points="12 21 17 16 7 16 12 21"
      ></polygon>
      <path
        className="uim-primary"
        d="M12,22a.99676.99676,0,0,1-.707-.293l-5-5A.99991.99991,0,0,1,7,15H17a.99991.99991,0,0,1,.707,1.707l-5,5A.99676.99676,0,0,1,12,22ZM9.41406,17,12,19.58594,14.58594,17Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M12 4a.99075.99075 0 0 1-.92041-1.37988A1.03011 1.03011 0 0 1 11.29 2.29a.99764.99764 0 0 1 1.08984-.21 1.03418 1.03418 0 0 1 .33008.21A1.05232 1.05232 0 0 1 13 3a.83792.83792 0 0 1-.08008.37988 1.17124 1.17124 0 0 1-.21.33008A.99183.99183 0 0 1 12 4zM8.79 6.21A1.00761 1.00761 0 0 1 8.79 4.79h0a1.00671 1.00671 0 0 1 1.41992 0h0a1.0085 1.0085 0 0 1 0 1.41992h0a1.02749 1.02749 0 0 1-.71.29h0A1.02577 1.02577 0 0 1 8.79 6.21zM7 9A.99042.99042 0 0 1 6 8a1 1 0 0 1 1.71-.71A1.05232 1.05232 0 0 1 8 8 .99042.99042 0 0 1 7 9zM12.66992 8a.99662.99662 0 0 1 1-1h0a1.00319 1.00319 0 0 1 1 1h0a1.00319 1.00319 0 0 1-1 1h0A.99662.99662 0 0 1 12.66992 8zM9.32959 8a1.0032 1.0032 0 0 1 1-1h0a.99662.99662 0 0 1 1 1h0a.99662.99662 0 0 1-1 1h0A1.0032 1.0032 0 0 1 9.32959 8zM17 9a.99042.99042 0 0 1-1-1 1 1 0 1 1 2 0 .99042.99042 0 0 1-1 1zM13.79 6.21a1.00761 1.00761 0 0 1 0-1.41992h0a1.00671 1.00671 0 0 1 1.41992 0h0a1.0085 1.0085 0 0 1 0 1.41992h0a1.02749 1.02749 0 0 1-.71.29h0A1.02577 1.02577 0 0 1 13.79 6.21z"
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

export default MFlipH;
