import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MSitemap: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M8,23H2c-0.55197,0.00031-0.99969-0.44689-1-0.99886C1,22.00076,1,22.00038,1,22v-6c-0.00031-0.55197,0.44689-0.99969,0.99886-1C1.99924,15,1.99962,15,2,15h6c0.55197-0.00031,0.99969,0.44689,1,0.99886C9,15.99924,9,15.99962,9,16v6c0.00031,0.55197-0.44689,0.99969-0.99886,1C8.00076,23,8.00038,23,8,23z M15,9H9C8.44803,9.00031,8.00031,8.55311,8,8.00114C8,8.00076,8,8.00038,8,8V2C7.99969,1.44803,8.44689,1.00031,8.99886,1C8.99924,1,8.99962,1,9,1h6c0.55197-0.00031,0.99969,0.44689,1,0.99886C16,1.99924,16,1.99962,16,2v6c0.00031,0.55197-0.44689,0.99969-0.99886,1C15.00076,9,15.00038,9,15,9z M22,23h-6c-0.55197,0.00031-0.99969-0.44689-1-0.99886c0-0.00038,0-0.00076,0-0.00114v-6c-0.00031-0.55197,0.44689-0.99969,0.99886-1c0.00038,0,0.00076,0,0.00114,0h6c0.55197-0.00031,0.99969,0.44689,1,0.99886c0,0.00038,0,0.00076,0,0.00114v6c0.00031,0.55197-0.44689,0.99969-0.99886,1C22.00076,23,22.00038,23,22,23z"
      ></path>
      <path
        className="uim-primary"
        d="M19,11h-6V9h-2v2H5c-0.00037,0-0.00073,0-0.00116,0C4.4469,11.00031,3.99969,11.44806,4,12v3h2v-2h6c0.00037,0,0.00073,0,0.00116,0H18v2h2v-3c0-0.00037,0-0.00073,0-0.00116C19.99969,11.4469,19.55194,10.99969,19,11z"
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

export default MSitemap;
