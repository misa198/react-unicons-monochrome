import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MAngleDoubleRight: React.FC<Props> = ({
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
        d="M7.75 16a1 1 0 0 1-.707-1.707L9.33594 12 7.043 9.707A.99989.99989 0 0 1 8.457 8.293l3 3a.99962.99962 0 0 1 0 1.41406l-3 3A.99676.99676 0 0 1 7.75 16zM13.25 16a1 1 0 0 1-.707-1.707L14.83594 12 12.543 9.707A.99989.99989 0 0 1 13.957 8.293l3 3a.99962.99962 0 0 1 0 1.41406l-3 3A.99676.99676 0 0 1 13.25 16z"
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

export default MAngleDoubleRight;
