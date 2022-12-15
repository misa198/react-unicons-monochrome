import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MVerticalAlignCenter: React.FC<Props> = ({
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
        className="uim-tertiary"
        d="M13,22H7c-0.55197,0.00031-0.99969-0.44689-1-0.99886C6,21.00076,6,21.00038,6,21V3C5.99969,2.44803,6.44689,2.00031,6.99886,2C6.99924,2,6.99962,2,7,2h6c0.55197-0.00031,0.99969,0.44689,1,0.99886C14,2.99924,14,2.99962,14,3v18c0.00031,0.55197-0.44689,0.99969-0.99886,1C13.00076,22,13.00038,22,13,22z"
      ></path>
      <path
        className="uim-quaternary"
        d="M17,5h-3v14h3c0.00037,0,0.00073,0,0.00116,0C17.5531,18.99969,18.00031,18.55194,18,18V6c0-0.00037,0-0.00073,0-0.00116C17.99969,5.4469,17.55194,4.99969,17,5z"
      ></path>
      <path
        className="uim-primary"
        d="M6 11H3c-.55231 0-1 .44769-1 1s.44769 1 1 1h3V11zM21 11h-3v2h3c.55231 0 1-.44769 1-1S21.55231 11 21 11z"
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

export default MVerticalAlignCenter;
