import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMapPinAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <ellipse
        cx="11.999"
        cy="18"
        className="uim-quaternary"
        rx="7.999"
        ry="3"
      ></ellipse>
      <path
        className="uim-tertiary"
        d="M12,12c-2.76142,0-5-2.23858-5-5s2.23858-5,5-5s5,2.23858,5,5C16.99676,9.76008,14.76008,11.99676,12,12z"
      ></path>
      <path
        className="uim-primary"
        d="M12,12c-0.34253,0-0.67682-0.03516-1-0.10077v5.10175c0,0.00018,0,0.00037,0,0.00055c0.00012,0.55212,0.44788,0.99963,1,0.99945c0.00018,0,0.00037,0,0.00055,0c0.55212-0.00012,0.99957-0.44781,0.99945-1v-5.10278C12.67682,11.96411,12.34259,11.99957,12,12z"
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

export default MMapPinAlt;
