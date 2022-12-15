import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MDumbbell: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M10.07129 20.58594c-.26527.0003-.51971-.10515-.707-.293L3.707 14.63574c-.39048-.39048-.39048-1.02358 0-1.41406s1.02358-.39048 1.41406 0l5.65723 5.65723c.39047.39058.39037 1.02375-.00021 1.41421-.18748.18742-.4417.29273-.70679.29279V20.58594zM19.58594 11.07129c-.26527.0003-.51971-.10515-.707-.293l-5.65726-5.6572c-.39049-.39048-.3905-1.02359-.00001-1.41408.39048-.39049 1.02358-.3905 1.41407-.00001L20.293 9.36426c.39046.39058.39037 1.02375-.00021 1.41421-.18748.18742-.4417.29273-.70679.29279L19.58594 11.07129z"
      ></path>
      <rect
        width="11.456"
        height="2"
        x="6.272"
        y="11"
        className="uim-primary"
        transform="rotate(-45 12 12)"
      ></rect>
      <path
        className="uim-quaternary"
        d="M19.58579,8.24234c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-2.82865-2.8281c-0.39048-0.39048-0.39048-1.02358,0-1.41406c0.39048-0.39048,1.02358-0.39048,1.41406,0l0,0l2.82862,2.82813c0.39046,0.39058,0.39037,1.02375-0.00021,1.41421c-0.18748,0.18742-0.4417,0.29273-0.70679,0.29279L19.58579,8.24234z"
      ></path>
      <path
        className="uim-primary"
        d="M19.58575,5.82831l0.70947-0.70947c0.3905-0.3905,0.3905-1.02356,0-1.41406s-1.02356-0.3905-1.41406,0l-0.70959,0.70966L19.58575,5.82831z"
      ></path>
      <path
        className="uim-quaternary"
        d="M7.24283,20.58579c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-2.82865-2.8281c-0.39048-0.39048-0.39048-1.02358,0-1.41406s1.02358-0.39048,1.41406,0l2.82862,2.82813c0.39047,0.39058,0.39037,1.02375-0.00021,1.41421c-0.18748,0.18742-0.4417,0.29273-0.70679,0.29279L7.24283,20.58579z"
      ></path>
      <path
        className="uim-primary"
        d="M4.41431,18.17169l-0.70947,0.70947c-0.18744,0.1875-0.29272,0.44171-0.29279,0.70679C3.41193,20.14026,3.8595,20.58807,4.4118,20.5882c0.26526,0.00031,0.51971-0.1051,0.70703-0.29297l0.70966-0.70966L4.41431,18.17169z"
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

export default MDumbbell;
