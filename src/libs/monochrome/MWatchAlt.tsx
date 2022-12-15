import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MWatchAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M12,18c-3.31371,0-6-2.68629-6-6s2.68629-6,6-6s6,2.68629,6,6C17.99638,15.31221,15.31221,17.99638,12,18z"
      ></path>
      <path
        className="uim-tertiary"
        d="M12 6c2.05511 0 3.86725 1.03442 4.94861 2.60968l-.96228-5.77374C15.90631 2.35352 15.48901 1.99982 15 2H9C8.51099 1.99982 8.09369 2.35352 8.01367 2.83594L7.05139 8.60968C8.13275 7.03442 9.94489 6 12 6zM12 18c-2.05511 0-3.86725-1.03442-4.94861-2.60968l.96228 5.77374C8.09369 21.64648 8.51099 22.00018 9 22h6c.48901.00018.90631-.35352.98633-.83594l.9632-5.77924C15.86835 16.96167 14.05585 17.99774 12 18z"
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

export default MWatchAlt;
