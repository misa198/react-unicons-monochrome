import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MLocationArrowAlt: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M19.00879,21.99435a3.02232,3.02232,0,0,1-1.2334-.26563l-5.36914-2.39551a.99574.99574,0,0,0-.81152,0h-.001L6.22461,21.72872a2.99622,2.99622,0,0,1-3.90088-4.07617L9.31982,3.66036a2.99669,2.99669,0,0,1,5.36036,0l6.99609,13.99219a3.00308,3.00308,0,0,1-2.66748,4.3418Zm-7.82227-3.57422h0Z"
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

export default MLocationArrowAlt;
