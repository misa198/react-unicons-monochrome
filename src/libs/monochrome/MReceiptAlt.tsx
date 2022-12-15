import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MReceiptAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M20,22.0001a.995.995,0,0,1-.59961-.20019L17.333,20.2501l-2.06543,1.54981a.99757.99757,0,0,1-1.2002,0L12,20.2501,9.93262,21.79991a.99757.99757,0,0,1-1.2002,0L6.667,20.2501,4.59961,21.79991A.99956.99956,0,0,1,3,21.0001v-18a.99943.99943,0,0,1,1-1H20a.99943.99943,0,0,1,1,1v18a.99966.99966,0,0,1-1,1Z"
      ></path>
      <path
        className="uim-primary"
        d="M16 8.0001H10a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM16 12.0001H8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zM16 16.0001H8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
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

export default MReceiptAlt;
