import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MRaindropsAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M5.75 11A3.25377 3.25377 0 0 1 2.5 7.75c0-2.71777 2.57812-4.50195 2.68749-4.57715A1.00294 1.00294 0 0 1 6.30566 3.168C6.415 3.24219 9 4.999 9 7.75A3.25377 3.25377 0 0 1 5.75 11zM11.25 22A4.7554 4.7554 0 0 1 6.5 17.25c0-4.18066 4.0166-6.96094 4.18749-7.07715a1.00117 1.00117 0 0 1 1.11817-.00488C11.97656 10.28223 16 13.01758 16 17.25A4.7554 4.7554 0 0 1 11.25 22zM17.5 12a4.004 4.004 0 0 1-4-4c0-3.44922 3.29688-5.73145 3.43749-5.82715A1.00473 1.00473 0 0 1 18.05566 2.168C18.19629 2.2627 21.5 4.50879 21.5 8A4.004 4.004 0 0 1 17.5 12z"
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

export default MRaindropsAlt;
