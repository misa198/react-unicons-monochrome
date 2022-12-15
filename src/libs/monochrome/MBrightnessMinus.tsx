import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MBrightnessMinus: React.FC<Props> = ({
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
        d="M12,22a.99676.99676,0,0,1-.707-.293L8.9502,19.36426H5.63574a.99943.99943,0,0,1-1-1V15.0498L2.293,12.707a.99962.99962,0,0,1,0-1.41406L4.63574,8.9502V5.63574a.99943.99943,0,0,1,1-1H8.9502L11.293,2.293a.99962.99962,0,0,1,1.41406,0L15.0498,4.63574h3.31446a.99943.99943,0,0,1,1,1V8.9502L21.707,11.293a.99962.99962,0,0,1,0,1.41406L19.36426,15.0498v3.31446a.99943.99943,0,0,1-1,1H15.0498L12.707,21.707A.99676.99676,0,0,1,12,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M14,13H10a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z"
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

export default MBrightnessMinus;
