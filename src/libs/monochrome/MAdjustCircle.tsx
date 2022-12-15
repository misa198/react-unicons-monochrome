import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MAdjustCircle: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M6.5,14.25c0.00169,0.93682,0.17442,1.86546,0.5097,2.74023c3.98748,1.52463,8.45593-0.47191,9.98056-4.45939c0.67967-1.7776,0.67969-3.74346,0.00004-5.52107c-3.98743-1.52467-8.45586,0.47179-9.98053,4.45922C6.67031,12.35677,6.4975,13.29954,6.5,14.25z"
      ></path>
      <path
        className="uim-quaternary"
        d="M16.99164,7.00836C15.8833,4.08325,13.06348,2,9.75,2C5.46979,2,2,5.46979,2,9.75c0,3.31348,2.08325,6.1333,5.00836,7.24164C8.1167,19.91675,10.93652,22,14.25,22c4.2782-0.00476,7.74524-3.4718,7.75-7.75C22,10.93652,19.91675,8.1167,16.99164,7.00836z M16.99023,12.53082c-1.5246,3.98749-5.99304,5.98401-9.98053,4.45941C6.67444,16.11548,6.50171,15.18683,6.5,14.25c-0.0025-0.95044,0.17029-1.89325,0.50977-2.78101c1.52466-3.98743,5.9931-5.98389,9.98053-4.45923C17.66992,8.78735,17.66992,10.75323,16.99023,12.53082z"
      ></path>
      <path
        className="uim-primary"
        d="M7.07837,11.32251l5.59912,5.59912c0.64065-0.26406,1.24294-0.61296,1.79071-1.03735L8.11578,9.53174C7.69141,10.07956,7.34249,10.68186,7.07837,11.32251z M9.5318,8.11572l6.35242,6.35254c0.42437-0.54782,0.77329-1.15012,1.03741-1.79077l-5.59912-5.59912C10.68186,7.34243,10.07957,7.69133,9.5318,8.11572z"
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

export default MAdjustCircle;
