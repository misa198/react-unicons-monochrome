import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MUtensils: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M16,22c-0.55214,0.00014-0.99986-0.44734-1-0.99948c0-0.00017,0-0.00035,0-0.00052V3c0-0.55228,0.44771-1,1-1c0.55228,0,1,0.44772,1,1v18c0.00014,0.55214-0.44734,0.99986-0.99948,1C16.00035,22,16.00017,22,16,22z"
      ></path>
      <path
        className="uim-tertiary"
        d="M9,14H5c-0.55214,0.00014-0.99986-0.44734-1-0.99948C4,13.00035,4,13.00017,4,13V7.00488C4.00406,4.24492,6.23858,2.00756,8.99854,2H9c0.55196-0.00032,0.99968,0.44688,1,0.99884C10,2.99923,10,2.99961,10,3v10c0.00014,0.55214-0.44734,0.99986-0.99948,1C9.00035,14,9.00017,14,9,14z"
      ></path>
      <path
        className="uim-primary"
        d="M9.00055 14C9.00037 14 9.00018 14 9 14H8v7c0 .00018 0 .00037 0 .00055C8.00012 21.55267 8.44788 22.00012 9 22c.00018 0 .00037 0 .00055 0C9.55267 21.99988 10.00012 21.55212 10 21v-8C10.00012 13.55212 9.55267 13.99988 9.00055 14zM19 2c-.55231 0-1 .44769-1 1v5.46484l-2 1.33301-2-1.33301V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v6c.00006.33435.16718.64648.44531.83197l3 2C15.6095 11.94171 15.80255 12.00018 16 12c.19745.00018.3905-.05829.55469-.16803l3-2C19.83282 9.64648 19.99994 9.33435 20 9V3C20 2.44769 19.55231 2 19 2z"
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

export default MUtensils;
