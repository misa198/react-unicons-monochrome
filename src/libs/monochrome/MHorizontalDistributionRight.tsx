import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MHorizontalDistributionRight: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M9,22c-0.55197,0.00031-0.99969-0.44689-1-0.99886C8,21.00076,8,21.00038,8,21V3c0-0.55228,0.44771-1,1-1s1,0.44772,1,1v18c0.00031,0.55197-0.44689,0.99969-0.99886,1C9.00076,22,9.00038,22,9,22z M19,22c-0.55197,0.00031-0.99969-0.44689-1-0.99886c0-0.00038,0-0.00076,0-0.00114V3c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v18c0.00031,0.55197-0.44689,0.99969-0.99886,1C19.00076,22,19.00038,22,19,22z"
      ></path>
      <path
        className="uim-tertiary"
        d="M18,4h-5c-0.00037,0-0.00073,0-0.00116,0C12.4469,4.00031,11.99969,4.44806,12,5v14c0,0.00037,0,0.00073,0,0.00116C12.00031,19.5531,12.44806,20.00031,13,20h5V4z"
      ></path>
      <path
        className="uim-quaternary"
        d="M8,5H5C4.99963,5,4.99927,5,4.99884,5C4.4469,5.00031,3.99969,5.44806,4,6v12c0,0.00037,0,0.00073,0,0.00116C4.00031,18.5531,4.44806,19.00031,5,19h3V5z"
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

export default MHorizontalDistributionRight;
