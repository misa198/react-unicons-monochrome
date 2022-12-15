import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MTumblrSquare: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M13.57117,17.84937c-1.86527,0.19411-3.53473-1.16063-3.72884-3.0259C9.83176,14.72195,9.82578,14.62,9.8244,14.51794v-4.07556H8.56189v-1.6112c1.41093-0.5367,2.37301-1.85451,2.45435-3.36188c0.00252-0.04917,0.04095-0.08893,0.09-0.09314H12.933v3.17755h2.49634v1.88879h-2.505v3.88318c-0.07815,0.59912,0.34417,1.14817,0.9433,1.22632c0.08533,0.01113,0.17169,0.01216,0.25726,0.00305c0.34548-0.01192,0.68614-0.08476,1.00629-0.21515l0.59991,1.77869C15.11991,17.60942,14.35482,17.86827,13.57117,17.84937z"
      ></path>
      <path
        className="uim-primary"
        d="M2.01898,2v20h19.96301V2H2.01898z M13.57117,17.84937c-1.8653,0.19409-3.53473-1.16064-3.72882-3.02588C9.83179,14.72192,9.82581,14.62,9.8244,14.51794v-4.07556H8.56189V8.83118c1.41095-0.53668,2.37299-1.85449,2.45435-3.36188c0.0025-0.04919,0.04095-0.08893,0.09003-0.09314h1.82672v3.17755h2.49634v1.88879h-2.505v3.88318c-0.07812,0.59912,0.34418,1.14813,0.9433,1.22632c0.08539,0.01111,0.17169,0.01215,0.25726,0.00305c0.34552-0.0119,0.68616-0.08478,1.00629-0.21515l0.59991,1.77869C15.11993,17.60944,14.3548,17.86829,13.57117,17.84937z"
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

export default MTumblrSquare;
