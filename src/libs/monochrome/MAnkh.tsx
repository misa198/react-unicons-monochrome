import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MAnkh: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M18,14H6c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h12c0.55228,0,1,0.44771,1,1S18.55228,14,18,14z"
      ></path>
      <path
        className="uim-primary"
        d="M11 14v7c0 .00037 0 .00073 0 .00116C11.00031 21.5531 11.44806 22.00031 12 22c.00037 0 .00073 0 .00116 0C12.5531 21.99969 13.00031 21.55194 13 21v-7H11zM14.90692 12C15.98096 10.86072 17 9.20453 17 7c0-2.76141-2.23859-5-5-5S7 4.23859 7 7c0 2.20453 1.01904 3.86072 2.09308 5H14.90692zM12 4c1.65613.00183 2.99817 1.34387 3 3 0 2.58008-2.06641 4.22559-3 4.83691C11.06543 11.22461 9 9.5791 9 7 9.00183 5.34387 10.34387 4.00183 12 4z"
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

export default MAnkh;
