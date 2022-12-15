import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MAdjustHalf: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M12,3v18c4.97058,0,9-4.02942,9-9S16.97058,3,12,3z"
      ></path>
      <path
        className="uim-primary"
        d="M12,21c-4.97056,0-9-4.02944-9-9s4.02944-9,9-9 M12,22C6.47715,22,2,17.52285,2,12S6.47715,2,12,2s10,4.47715,10,10C21.99352,17.52016,17.52016,21.99352,12,22z M12,4c-4.41828,0-8,3.58172-8,8s3.58172,8,8,8s8-3.58172,8-8C19.99495,7.58382,16.41618,4.00505,12,4z"
      ></path>
      <path
        className="uim-primary"
        d="M17.36035,3.56342c-0.47835-0.27615-1.09-0.11224-1.36615,0.36611c-0.00002,0.00003-0.00004,0.00007-0.00006,0.0001l-1.419,2.45825l-0.00091,0.001l-4.86031,8.4199c-0.27614,0.4784-0.11218,1.09007,0.36622,1.36622c0.4784,0.27614,1.09007,0.11218,1.36621-0.36622l0,0l1.41857-2.45752l0.00129-0.00171l4.86035-8.41992c0.2762-0.47818,0.11246-1.08973-0.36573-1.36593C17.36067,3.56361,17.36051,3.56351,17.36035,3.56342z M12.249,21.99023c-0.55223-0.00034-0.99962-0.44829-0.99928-1.00052c0.00011-0.17537,0.04634-0.34762,0.13405-0.49948L19.02539,7.252c0.25513-0.4892,0.85853-0.67895,1.34773-0.42383c0.32881,0.17148,0.53557,0.51099,0.53704,0.88183c0.00014,0.17862-0.04595,0.35424-0.13379,0.50977l-7.66016,13.2705C12.93719,21.79986,12.60662,21.99043,12.249,21.99023z"
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

export default MAdjustHalf;
