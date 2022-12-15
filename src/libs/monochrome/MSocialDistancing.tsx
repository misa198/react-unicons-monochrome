import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MSocialDistancing: React.FC<Props> = ({
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
      <path
        className="uim-quaternary"
        d="M6,11A3.5,3.5,0,1,1,9.5,7.5,3.50424,3.50424,0,0,1,6,11Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M8.64026 9.77179a3.452 3.452 0 0 1-5.28052 0A4.98821 4.98821 0 0 0 1 14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1A4.98821 4.98821 0 0 0 8.64026 9.77179zM18 11a3.5 3.5 0 1 1 3.5-3.5A3.50424 3.50424 0 0 1 18 11z"
      ></path>
      <path
        className="uim-secondary"
        d="M20.64026,9.77179a3.452,3.452,0,0,1-5.28052,0A4.98821,4.98821,0,0,0,13,14a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1A4.98821,4.98821,0,0,0,20.64026,9.77179Z"
      ></path>
      <path
        className="uim-primary"
        d="M21.207 18.293l-2-2A.99989.99989 0 0 0 17.793 17.707l.293.293H15.5a1 1 0 0 0 0 2h2.58594l-.293.293A.99989.99989 0 1 0 19.207 21.707l2-2A.99962.99962 0 0 0 21.207 18.293zM8.5 18H5.91406l.293-.293A.99989.99989 0 0 0 4.793 16.293l-2 2a.99962.99962 0 0 0 0 1.41406l2 2A.99989.99989 0 0 0 6.207 20.293L5.91406 20H8.5a1 1 0 0 0 0-2z"
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

export default MSocialDistancing;
