import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MXAdd: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M12.41406 11l2.293-2.293A.99989.99989 0 0 0 13.293 7.293L11 9.58594 8.707 7.293A.99989.99989 0 0 0 7.293 8.707L9.58594 11 7.293 13.293A.99989.99989 0 1 0 8.707 14.707L11 12.41406l2.293 2.293A.99989.99989 0 0 0 14.707 13.293zM21 18H20V17a1 1 0 0 0-2 0v1H17a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V20h1a1 1 0 0 0 0-2z"
      ></path>
      <path
        className="uim-tertiary"
        d="M7 20a5.00588 5.00588 0 0 1-5-5V7A5.00588 5.00588 0 0 1 7 2 1 1 0 0 1 7 4 3.00328 3.00328 0 0 0 4 7v8a3.00328 3.00328 0 0 0 3 3 1 1 0 0 1 0 2zM19 14a1 1 0 0 1-1-1V7a3.00328 3.00328 0 0 0-3-3 1 1 0 0 1 0-2 5.00588 5.00588 0 0 1 5 5v6A1 1 0 0 1 19 14z"
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

export default MXAdd;
