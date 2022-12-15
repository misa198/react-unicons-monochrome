import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MGrin: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M12,2C6.47717,2,2,6.47717,2,12s4.47717,10,10,10s10-4.47717,10-10S17.52283,2,12,2z M16,14c-0.0022,2.20825-1.79175,3.9978-4,4c-2.20825-0.0022-3.9978-1.79175-4-4c-0.00031-0.55194,0.4469-0.99969,0.99884-1C8.99927,13,8.99963,13,9,13h6c0.55194-0.00031,0.99969,0.4469,1,0.99884C16,13.99927,16,13.99963,16,14z"
      ></path>
      <circle cx="15" cy="10" r="1" className="uim-primary"></circle>
      <circle cx="9" cy="10" r="1" className="uim-primary"></circle>
      <path
        className="uim-secondary"
        d="M12,18c-2.20823-0.0022-3.9978-1.79177-4-4c-0.00031-0.55197,0.44689-0.99969,0.99886-1C8.99924,13,8.99962,13,9,13h6c0.55197-0.00031,0.99969,0.44689,1,0.99886c0,0.00038,0,0.00076,0,0.00114C15.9978,16.20823,14.20823,17.9978,12,18z"
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

export default MGrin;
