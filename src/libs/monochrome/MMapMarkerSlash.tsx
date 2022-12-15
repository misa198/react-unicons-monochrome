import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMapMarkerSlash: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M12,15.28074c-2.20914,0-4-1.79086-4-4s1.79086-4,4-4s4,1.79086,4,4C15.99733,13.48877,14.20803,15.27807,12,15.28074z"
      ></path>
      <path
        className="uim-tertiary"
        d="M17.67615,5.59692C14.54132,2.4621,9.4588,2.46204,6.32397,5.59686c-3.13483,3.13477-3.13489,8.21729-0.00012,11.35211l5.00848,5.00757c0.17688,0.17737,0.41718,0.27698,0.66766,0.27667c0.25049,0.00031,0.49078-0.0993,0.66766-0.27667l5.00848-5.00757C20.81085,13.81421,20.81085,8.73175,17.67615,5.59692z M12,15.28076c-2.20917,0-4-1.79089-4-4c0-2.20917,1.79083-4,4-4s4,1.79083,4,4C15.99731,13.48877,14.20801,15.27808,12,15.28076z"
      ></path>
      <path
        className="uim-primary"
        d="M21,21.76465c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-18-18C1.90554,3.07817,1.91042,2.44509,2.3039,2.05764C2.69309,1.6744,3.3178,1.67439,3.707,2.05762l18,18c0.39046,0.39058,0.39037,1.02375-0.00021,1.41421c-0.18748,0.18742-0.4417,0.29273-0.70679,0.29279V21.76465z"
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

export default MMapMarkerSlash;
