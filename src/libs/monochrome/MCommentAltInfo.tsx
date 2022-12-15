import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCommentAltInfo: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M19,22a.99576.99576,0,0,1-.67822-.26562L15.35889,19H7a3.00328,3.00328,0,0,1-3-3V9A3.00328,3.00328,0,0,1,7,6H17a3.00328,3.00328,0,0,1,3,3V21a1.00032,1.00032,0,0,1-1,1Z"
      ></path>
      <path
        className="uim-primary"
        d="M5 11a.99974.99974 0 0 1-1-1V6A1 1 0 0 1 6 6v4A.99974.99974 0 0 1 5 11zM5 4a.99183.99183 0 0 1-.71-.29 1.16213 1.16213 0 0 1-.21045-.33008A.99906.99906 0 0 1 4 3a.96017.96017 0 0 1 .61963-.91992A1.002 1.002 0 0 1 5.71 2.29 1.0321 1.0321 0 0 1 6 3a.83792.83792 0 0 1-.08008.37988A1.17124 1.17124 0 0 1 5.71 3.71a1.15384 1.15384 0 0 1-.33008.21A.9994.9994 0 0 1 5 4z"
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

export default MCommentAltInfo;
