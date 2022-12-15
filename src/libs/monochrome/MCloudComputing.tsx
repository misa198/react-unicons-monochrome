import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCloudComputing: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M17,16H6c-2.20938-0.00023-4.00024-1.79147-4.00001-4.00085c0.00019-1.8453,1.26257-3.45105,3.05567-3.88685c0.48993-3.83448,3.99556-6.54578,7.83004-6.05585c2.44974,0.313,4.55322,1.89382,5.5352,4.15985c2.64518,0.7815,4.15599,3.55937,3.3745,6.20455C21.1677,14.54545,19.21538,16.00261,17,16z"
      ></path>
      <path
        className="uim-primary"
        d="M7 16v3c-.00055.55206-.44794.99945-1 1H3c-.55231 0-1 .44769-1 1s.44769 1 1 1h3c1.65613-.00183 2.99817-1.34387 3-3v-3H7zM11 16v5c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-5H11zM21 20h-3c-.55206-.00055-.99945-.44794-1-1v-3h-2v3c.00183 1.65613 1.34387 2.99817 3 3h3c.55231 0 1-.44769 1-1S21.55231 20 21 20z"
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

export default MCloudComputing;
