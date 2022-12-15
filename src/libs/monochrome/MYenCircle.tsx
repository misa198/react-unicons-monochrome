import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MYenCircle: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <rect
        width="22"
        height="22"
        x="1"
        y="1"
        className="uim-tertiary"
        rx="11"
      ></rect>
      <path
        className="uim-primary"
        d="M16.22168,6.168a.99878.99878,0,0,0-1.38672.27734L12,10.69727l-2.835-4.252A1,1,0,0,0,7.501,7.55469l2.11218,3.168H9a1,1,0,0,0,0,2h1.94659L11,12.80273v.91993H9a1,1,0,0,0,0,2h2V18a1,1,0,0,0,2,0V15.72266h2a1,1,0,0,0,0-2H13v-.91993l.05341-.08007H15a1,1,0,0,0,0-2h-.61316l2.11218-3.168A.99947.99947,0,0,0,16.22168,6.168Z"
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

export default MYenCircle;
