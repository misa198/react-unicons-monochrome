import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MPagelines: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M15.09924,14.0062a10.74309,10.74309,0,0,1-.89443,2.27471,3.53764,3.53764,0,0,1,1.36011-.45561c1.95673-.20979,3.74981,1.543,3.74981,1.543s-1.38028,2.09178-3.34034,2.29822a4.95387,4.95387,0,0,1-3.33612-1.19315A10.786,10.786,0,0,1,4.67049,22a.6721.6721,0,0,1,0-1.3442,9.41858,9.41858,0,0,0,5.84407-2.03222,3.74482,3.74482,0,0,1-1.73431-.24249c-1.81577-.7602-2.53651-3.16246-2.53651-3.16246s2.21512-1.16713,4.02836-.40358a4.39386,4.39386,0,0,1,2.01209,1.98021,9.43224,9.43224,0,0,0,1.45828-2.90065,4.72021,4.72021,0,0,1-3.25807-.07551c-1.773-.85249-2.37627-3.28414-2.37627-3.28414s2.27474-1.05554,4.04849-.203a4.39566,4.39566,0,0,1,1.9005,2.05823,9.3233,9.3233,0,0,0,.07551-1.0094,6.81851,6.81851,0,0,1-2.5172-4.03171C11.26805,4.58263,13.70974,2,13.70974,2S16.71192,3.90132,17.056,6.66437A6.99255,6.99255,0,0,1,15.47345,11.39a8.957,8.957,0,0,1-.05956.99009,4.20594,4.20594,0,0,1,1.69829-1.82242c1.75029-.90454,4.05437.08555,4.05437.08555s-.53113,2.4484-2.28142,3.34958a5.15363,5.15363,0,0,1-3.78589.01342Zm0,0"
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

export default MPagelines;
