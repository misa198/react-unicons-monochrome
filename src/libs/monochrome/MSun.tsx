import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MSun: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M4 13H3a1 1 0 0 1 0-2H4a1 1 0 0 1 0 2zM21 13H20a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM12 5a.99974.99974 0 0 1-1-1V3a1 1 0 0 1 2 0V4A.99974.99974 0 0 1 12 5zM12 22a.99974.99974 0 0 1-1-1V20a1 1 0 0 1 2 0v1A.99974.99974 0 0 1 12 22zM6.34326 7.34277a.99672.99672 0 0 1-.707-.293l-.707-.707A.99989.99989 0 0 1 6.34326 4.92871l.707.707a1 1 0 0 1-.707 1.707zM18.36377 19.36426a.99676.99676 0 0 1-.707-.293l-.707-.707a.99989.99989 0 1 1 1.41406-1.41406l.707.707a1 1 0 0 1-.707 1.707zM17.65674 7.34277a1 1 0 0 1-.707-1.707l.707-.707A.99989.99989 0 0 1 19.0708 6.34277l-.707.707A.99672.99672 0 0 1 17.65674 7.34277zM5.63623 19.36426a1 1 0 0 1-.707-1.707l.707-.707a.99989.99989 0 1 1 1.41406 1.41406l-.707.707A.99676.99676 0 0 1 5.63623 19.36426z"
      ></path>
      <circle cx="12" cy="12" r="5.5" className="uim-primary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MSun;
