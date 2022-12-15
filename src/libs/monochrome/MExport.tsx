import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MExport: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M19,22H5c-1.65611-0.00181-2.99819-1.34389-3-3v-4c0-0.55229,0.44772-1,1-1s1,0.44771,1,1v4c0.00037,0.55213,0.44787,0.99963,1,1h14c0.55213-0.00037,0.99963-0.44787,1-1v-4c0-0.55229,0.44772-1,1-1s1,0.44771,1,1v4C21.99819,20.65611,20.65611,21.99819,19,22z"
      ></path>
      <path
        className="uim-tertiary"
        d="M16.707,6.293l-4-4c-0.39027-0.39048-1.02319-0.39065-1.41368-0.00038C11.2932,2.29274,11.29307,2.29287,11.29294,2.293l-4,4C6.90497,6.68598,6.90903,7.31906,7.30201,7.70703C7.69144,8.09149,8.31759,8.09148,8.707,7.707L11,5.41406V15c0,0.55229,0.44771,1,1,1s1-0.44771,1-1V5.41406l2.293,2.293c0.39294,0.38801,1.02602,0.38402,1.41403-0.00892C17.09159,7.30869,17.09158,6.68243,16.707,6.293z"
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

export default MExport;
