import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MBabyCarriage: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M21.98,8H5.38l0.51,1.37012c0.01,0.00976,0.01,0.02,0.02,0.02978L6.42,10.77l0.03,0.08984C7.40863,13.3644,9.81828,15.01338,12.5,15h3c3.58261,0.00724,6.49276-2.89118,6.5-6.47379C22.00002,8.51747,22.00002,8.50874,22,8.5C22,8.33008,21.99,8.15991,21.98,8z"
      ></path>
      <path
        className="uim-primary"
        d="M7.5177 8L6.26709 4.65039C6.12128 4.25916 5.74762 3.99982 5.33008 4H3C2.44769 4 2 4.44769 2 5s.44769 1 1 1h1.63623l.74664 2H7.5177zM21.97473 8C21.71857 4.64459 18.92102 2 15.5 2H15c-.00018 0-.00037 0-.00055 0C14.44733 2.00012 13.99988 2.44788 14 3v5H21.97473zM19 21.5c-1.38071 0-2.5-1.11929-2.5-2.5s1.11929-2.5 2.5-2.5 2.5 1.11929 2.5 2.5C21.4985 20.38009 20.38009 21.4985 19 21.5zM9 21.5c-1.38071 0-2.5-1.11929-2.5-2.5s1.11929-2.5 2.5-2.5 2.5 1.11929 2.5 2.5C11.4985 20.38009 10.38009 21.4985 9 21.5z"
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

export default MBabyCarriage;
