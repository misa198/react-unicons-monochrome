import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MTrademarkCircle: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
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
        d="M10,11H7A1,1,0,0,1,7,9h3a1,1,0,0,1,0,2Z"
      ></path>
      <path
        className="uim-primary"
        d="M8.5 15a1 1 0 0 1-1-1V10a1 1 0 0 1 2 0v4A1 1 0 0 1 8.5 15zM17 15a1 1 0 0 1-1-1V12.41406l-.293.293a.99962.99962 0 0 1-1.41406 0l-.293-.293V14a1 1 0 0 1-2 0V10a.99991.99991 0 0 1 1.707-.707L15 10.58594l1.293-1.293A.99991.99991 0 0 1 18 10v4A1 1 0 0 1 17 15z"
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

export default MTrademarkCircle;
