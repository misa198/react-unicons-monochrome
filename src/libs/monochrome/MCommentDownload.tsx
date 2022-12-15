import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCommentDownload: React.FC<Props> = ({
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
        d="M10.99978,22h-8a.99991.99991,0,0,1-.707-1.707l1.67481-1.67481A9.00076,9.00076,0,1,1,10.99978,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M21.707,7.293a.99962.99962,0,0,0-1.41406,0L19,8.58594V3a1,1,0,0,0-2,0V8.58594L15.707,7.293A.99989.99989,0,0,0,14.293,8.707l3,3a.99963.99963,0,0,0,1.41406,0l3-3A.99962.99962,0,0,0,21.707,7.293Z"
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

export default MCommentDownload;
