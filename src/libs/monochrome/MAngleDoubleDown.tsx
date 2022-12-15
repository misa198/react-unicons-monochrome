import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MAngleDoubleDown: React.FC<Props> = ({
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
        d="M12 11.75a.99676.99676 0 0 1-.707-.293l-3-3A.99989.99989 0 0 1 9.707 7.043L12 9.33594l2.293-2.293A.99989.99989 0 0 1 15.707 8.457l-3 3A.99676.99676 0 0 1 12 11.75zM12 17.25a.99676.99676 0 0 1-.707-.293l-3-3A.99989.99989 0 0 1 9.707 12.543L12 14.83594l2.293-2.293A.99989.99989 0 0 1 15.707 13.957l-3 3A.99676.99676 0 0 1 12 17.25z"
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

export default MAngleDoubleDown;
