import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MPodium: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M16.43848,13.25h-8.877c-1.37722,0.0016-2.57811-0.93599-2.91064-2.27246L4.02979,8.49268c-0.13377-0.5361,0.19238-1.07914,0.72848-1.21292C4.83733,7.26004,4.91851,7.25004,5,7.25h14c0.55254,0.00027,1.00024,0.44841,0.99997,1.00095c-0.00004,0.08149-0.01003,0.16267-0.02976,0.24173l-0.62109,2.48486C19.01659,12.31401,17.8157,13.2516,16.43848,13.25z"
      ></path>
      <path
        className="uim-tertiary"
        d="M8 7.25v-.5c.0011-1.10413.89587-1.9989 2-2h1c.55231 0 1-.44769 1-1s-.44769-1-1-1h-1c-2.20807.0025-3.9975 1.79193-4 4v.5H8zM16.43848 13.25H7.56146c-.15643.00018-.30969-.01526-.46057-.03851l.90546 8.14886C8.06244 21.86682 8.49048 22.25006 9 22.25h6c.50952.00006.93756-.38318.99365-.88965l.90546-8.14886C16.74823 13.23474 16.59491 13.25018 16.43848 13.25z"
      ></path>
      <path
        className="uim-primary"
        d="M17,22.25H7c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h10c0.55228,0,1,0.44772,1,1S17.55228,22.25,17,22.25z M11.5,5.25h-1C9.67157,5.25,9,4.57843,9,3.75s0.67157-1.5,1.5-1.5h1c0.82843,0,1.5,0.67157,1.5,1.5S12.32843,5.25,11.5,5.25z"
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

export default MPodium;
