import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMapMarkerQuestion: React.FC<Props> = ({
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
        d="M12,22.05957a.99676.99676,0,0,1-.707-.293L5.98926,16.46387h0a8.50043,8.50043,0,1,1,12.02148,0L12.707,21.7666A.99676.99676,0,0,1,12,22.05957Z"
      ></path>
      <path
        className="uim-primary"
        d="M11.88281 11.44629a1 1 0 0 1 0-2 .75.75 0 1 0-.65039-1.124A.99981.99981 0 0 1 9.502 7.32031a2.74995 2.74995 0 1 1 2.38086 4.126zM11.87988 14.9502A.99962.99962 0 0 1 11.5 14.87012a1.07047 1.07047 0 0 1-.54-.54.99962.99962 0 0 1-.08008-.37988 1.04993 1.04993 0 0 1 .08008-.39063.87169.87169 0 0 1 .21973-.31934 1.01741 1.01741 0 0 1 1.08984-.2207c.06055.03027.11035.06055.16992.08985a1.51409 1.51409 0 0 1 .15039.13085 1.00081 1.00081 0 0 1 0 1.40918.96734.96734 0 0 1-.32031.22071A1.09 1.09 0 0 1 11.87988 14.9502z"
      ></path>
      <path
        className="uim-primary"
        d="M11.87988,14.9502A.99962.99962,0,0,1,11.5,14.87012a1.07047,1.07047,0,0,1-.54-.54.99962.99962,0,0,1-.08008-.37988,1.04993,1.04993,0,0,1,.08008-.39063.87169.87169,0,0,1,.21973-.31934,1.01741,1.01741,0,0,1,1.08984-.2207c.06055.03027.11035.06055.16992.08985a1.51409,1.51409,0,0,1,.15039.13085,1.00081,1.00081,0,0,1,0,1.40918.96734.96734,0,0,1-.32031.22071A1.09,1.09,0,0,1,11.87988,14.9502Z"
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

export default MMapMarkerQuestion;
