import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCommentAltEdit: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M20.5,21.49959a.99573.99573,0,0,1-.67822-.26563l-2.96289-2.73437H8.5a3.00328,3.00328,0,0,1-3-3v-7a3.00328,3.00328,0,0,1,3-3h10a3.00328,3.00328,0,0,1,3,3v12a1.00035,1.00035,0,0,1-1,1Z"
      ></path>
      <path
        className="uim-primary"
        d="M11.5,12.5H9.07568a1.00014,1.00014,0,0,1-.707-.293L2.793,6.62988a.99962.99962,0,0,1,0-1.41406L5.21582,2.793a.99962.99962,0,0,1,1.41406,0L12.207,8.36914a.99928.99928,0,0,1,.293.707V11.5A.99974.99974,0,0,1,11.5,12.5Z"
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

export default MCommentAltEdit;
