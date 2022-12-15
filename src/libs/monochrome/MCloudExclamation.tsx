import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCloudExclamation: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M17,17.5H6a4.00036,4.00036,0,0,1-.94385-7.8877A6.99757,6.99757,0,0,1,18.418,7.71484,4.99453,4.99453,0,0,1,17,17.5Z"
      ></path>
      <path
        className="uim-primary"
        d="M12 17.5a.99974.99974 0 0 1-1-1v-3a1 1 0 0 1 2 0v3A.99974.99974 0 0 1 12 17.5zM12 20.5a.99993.99993 0 0 1-.38037-.08008 1.1515 1.1515 0 0 1-.32959-.21A.98946.98946 0 0 1 11 19.5a1.05 1.05 0 0 1 .29-.71 1.01572 1.01572 0 0 1 1.08984-.21 1.15384 1.15384 0 0 1 .33008.21 1.03724 1.03724 0 0 1 .21.33008A.99013.99013 0 0 1 12 20.5z"
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

export default MCloudExclamation;
