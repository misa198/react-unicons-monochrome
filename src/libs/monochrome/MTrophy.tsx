import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MTrophy: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M16,22H8c-0.55228,0-1-0.44772-1-1v-1c0-1.10457,0.89543-2,2-2h6c1.10457,0,2,0.89543,2,2v1C17,21.55228,16.55228,22,16,22z M12,14c-3.31221-0.00362-5.99638-2.68779-6-6V3c0-0.55228,0.44772-1,1-1h10c0.55228,0,1,0.44772,1,1v5C17.99638,11.31221,15.31221,13.99638,12,14z"
      ></path>
      <path
        className="uim-primary"
        d="M12 14c-.34149-.00037-.67413-.03589-1-.091V18h2v-4.091C12.67413 13.96411 12.34149 13.99963 12 14zM21 4h-3v2h2v2c-.0011 1.10413-.89587 1.9989-2 2h-.35071c-.26477.74609-.67151 1.42273-1.18976 2H18c2.20807-.0025 3.9975-1.79193 4-4V5C22 4.44769 21.55231 4 21 4zM6.35071 10H6C4.89587 9.9989 4.0011 9.10413 4 8V6h2V4H3C2.44769 4 2 4.44769 2 5v3c.0025 2.20807 1.79193 3.9975 4 4h1.54047C7.02222 11.42273 6.61548 10.74609 6.35071 10z"
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

export default MTrophy;
