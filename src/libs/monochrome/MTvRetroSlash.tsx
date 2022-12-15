import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MTvRetroSlash: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M18,19.99957H6c-1.65611-0.00181-2.99819-1.34389-3-3v-8c0.00181-1.65611,1.34389-2.99819,3-3h12c1.65611,0.00181,2.99819,1.34389,3,3v8C20.99819,18.65568,19.65611,19.99776,18,19.99957z"
      ></path>
      <path
        className="uim-primary"
        d="M9.99884 5.99957h2.30908l-1.44171-2.5c-.27618-.47797-.88733-.64178-1.36554-.36603C9.02216 3.40942 8.85791 4.02106 9.13379 4.49957L9.99884 5.99957zM16 20.99957c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-1h-2V20.99957zM6 19.99957v1c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-1H6z"
      ></path>
      <path
        className="uim-primary"
        d="M14.41406 5.99957l2.29297-2.29297c.00366-.00366.00732-.00732.01099-.01099.38745-.39355.38251-1.02661-.01099-1.41406-.39349-.38739-1.02661-.38251-1.414.01099L11.586 5.99957H14.41406zM21 22c-.26527.0003-.51971-.10515-.707-.293l-18-18C1.90605 3.31302 1.91175 2.67995 2.30573 2.293c.38897-.38203 1.0123-.38203 1.40127 0l18 18c.39046.39058.39037 1.02375-.00021 1.41421C21.51931 21.89463 21.26509 21.99994 21 22z"
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

export default MTvRetroSlash;
