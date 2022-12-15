import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MLocationArrow: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M14.3584,22a2.87675,2.87675,0,0,1-2.71192-1.86816L9.63721,14.88477a.90518.90518,0,0,0-.522-.52149l-.001-.001L3.86719,12.35254a2.907,2.907,0,0,1,.1206-5.47266L18.16943,2.15332a2.9071,2.9071,0,0,1,3.67823,3.67676L17.12012,20.01172a2.87813,2.87813,0,0,1-2.69434,1.9873C14.40332,22,14.38086,22,14.3584,22Z"
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

export default MLocationArrow;
