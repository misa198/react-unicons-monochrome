import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MPresentationLine: React.FC<Props> = ({
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
        className="uim-tertiary"
        d="M19,16H5a.99974.99974,0,0,1-1-1V3A.99974.99974,0,0,1,5,2H19a.99974.99974,0,0,1,1,1V15A.99974.99974,0,0,1,19,16Z"
      ></path>
      <path
        className="uim-primary"
        d="M21,16H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"
      ></path>
      <path
        className="uim-primary"
        d="M12,22a.99974.99974,0,0,1-1-1V15a1,1,0,0,1,2,0v6A.99974.99974,0,0,1,12,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M16.999,22a.99564.99564,0,0,1-.55078-.166l-5-3.30957a1,1,0,1,1,1.10352-1.668l5,3.30957A1,1,0,0,1,16.999,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M7.001 22a1 1 0 0 1-.55274-1.834l5-3.30957a1 1 0 0 1 1.10352 1.668l-5 3.30957A.9945.9945 0 0 1 7.001 22zM8.999 12a1 1 0 0 1-.831-1.55469l2-3a1.00009 1.00009 0 0 1 .7334-.44043A1.01395 1.01395 0 0 1 11.707 7.293l1.1377 1.13769L14.168 6.44531A1 1 0 1 1 15.832 7.55469l-2 3A.99983.99983 0 0 1 12.293 10.707l-1.1377-1.13769L9.832 11.55469A.99908.99908 0 0 1 8.999 12z"
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

export default MPresentationLine;
