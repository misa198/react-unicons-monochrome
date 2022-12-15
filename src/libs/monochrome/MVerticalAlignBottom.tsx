import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MVerticalAlignBottom: React.FC<Props> = ({
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
        d="M17,8h-3v13c0.00031,0.55194-0.4469,0.99969-0.99884,1H17c0.00037,0,0.00073,0,0.00116,0C17.5531,21.99969,18.00031,21.55194,18,21V9c0-0.00037,0-0.00073,0-0.00116C17.99969,8.4469,17.55194,7.99969,17,8z"
      ></path>
      <path
        className="uim-primary"
        d="M21,22H3c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h18c0.55228,0,1,0.44772,1,1S21.55228,22,21,22z"
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

export default MVerticalAlignBottom;
