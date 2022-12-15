import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFileShieldAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M18.49342,8.99969l-7-7h-6a3,3,0,0,0-3,3v14a3,3,0,0,0,3,3h10a3,3,0,0,0,3-3Z"
      ></path>
      <path
        className="uim-primary"
        d="M18.49342,8.99969h-5a2,2,0,0,1-2-2v-5Z"
      ></path>
      <path
        className="uim-primary"
        d="M18.5 8.99969h-5a2 2 0 0 1-2-2v-5zM17.5 22a1.00091 1.00091 0 0 1-.5957-.19629l-1.56446-1.15918A4.60754 4.60754 0 0 1 13.5 16.94824V14.63379a1.00026 1.00026 0 0 1 1.21191-.97754 2.74646 2.74646 0 0 0 2.20118-.46582.99964.99964 0 0 1 1.17382 0 2.74409 2.74409 0 0 0 2.20118.46582A1.00026 1.00026 0 0 1 21.5 14.63379v2.31445a4.6076 4.6076 0 0 1-1.83984 3.69629L18.0957 21.80371A1.00091 1.00091 0 0 1 17.5 22zM10.5 18h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2zM11.5 14h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zM8.5 10h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z"
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

export default MFileShieldAlt;
