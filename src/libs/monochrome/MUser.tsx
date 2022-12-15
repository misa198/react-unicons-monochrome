import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MUser: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M12,14c-3.31371,0-6-2.68629-6-6s2.68629-6,6-6s6,2.68629,6,6C17.99638,11.31221,15.31221,13.99638,12,14z"
      ></path>
      <path
        className="uim-primary"
        d="M15.70056,12.71338C14.68073,13.5155,13.39789,13.99847,12,14c-1.39984,0-2.68463-0.48334-3.70532-1.28693c-3.31274,1.32574-5.80756,4.38422-6.22925,8.17853c-0.05969,0.54901,0.33679,1.04248,0.88574,1.10254L20.93945,22c0.03656,0,0.07306-0.00201,0.10938-0.00586c0.54895-0.06006,0.94543-0.55353,0.88574-1.10254C21.51917,17.15436,19.06299,14.05371,15.70056,12.71338z"
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

export default MUser;
