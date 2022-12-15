import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCommentAltQuestion: React.FC<Props> = ({
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
        d="M21,22a.99576.99576,0,0,1-.67822-.26562L17.35889,19H9a3.00328,3.00328,0,0,1-3-3V9A3.00328,3.00328,0,0,1,9,6H19a3.00328,3.00328,0,0,1,3,3V21a1.00032,1.00032,0,0,1-1,1Z"
      ></path>
      <path
        className="uim-primary"
        d="M7 9.00391a1 1 0 0 1 0-2 1 1 0 0 0 0-2 1.00168 1.00168 0 0 0-.86572.5 1.00016 1.00016 0 1 1-1.73242-1A3 3 0 1 1 7 9.00391zM7 12a1.00073 1.00073 0 0 1-.71-1.7002 1.027 1.027 0 0 1 1.41992 0A1.04136 1.04136 0 0 1 8 11a.852.852 0 0 1-.08008.38965.9935.9935 0 0 1-.21.32031 1.18822 1.18822 0 0 1-.33008.21973A.98989.98989 0 0 1 7 12z"
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

export default MCommentAltQuestion;
