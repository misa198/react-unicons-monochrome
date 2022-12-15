import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MSadDizzy: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" className="uim-tertiary"></circle>
      <path
        className="uim-primary"
        d="M14.99951 17.0918a.99473.99473 0 0 1-.64209-.23438 3.766 3.766 0 0 0-4.71484 0 .99955.99955 0 1 1-1.28516-1.53125 5.81162 5.81162 0 0 1 7.28516 0 .99974.99974 0 0 1-.64307 1.76563zM8.25 12a1 1 0 0 1-.707-1.707l.293-.293-.293-.293A.99989.99989 0 0 1 8.957 8.293l1 1a.99962.99962 0 0 1 0 1.41406l-1 1A.99676.99676 0 0 1 8.25 12z"
      ></path>
      <path
        className="uim-primary"
        d="M10.25 12a.99676.99676 0 0 1-.707-.293l-1-1a.99962.99962 0 0 1 0-1.41406l1-1A.99989.99989 0 0 1 10.957 9.707l-.293.293.293.293A1 1 0 0 1 10.25 12zM14.25 12a1 1 0 0 1-.707-1.707l.293-.293-.293-.293A.99989.99989 0 0 1 14.957 8.293l1 1a.99962.99962 0 0 1 0 1.41406l-1 1A.99676.99676 0 0 1 14.25 12z"
      ></path>
      <path
        className="uim-primary"
        d="M16.25,12a.99676.99676,0,0,1-.707-.293l-1-1a.99962.99962,0,0,1,0-1.41406l1-1A.99989.99989,0,0,1,16.957,9.707l-.293.293.293.293A1,1,0,0,1,16.25,12Z"
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

export default MSadDizzy;
