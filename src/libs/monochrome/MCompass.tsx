import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCompass: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M13,19v2.95C12.67,21.98,12.34,22,12,22s-0.67-0.02-1-0.05V19c0-0.55228,0.44771-1,1-1S13,18.44772,13,19z M13,2.05005V5c0,0.55228-0.44771,1-1,1s-1-0.44772-1-1V2.05005C11.33,2.02,11.66,2,12,2S12.67,2.02,13,2.05005z M6,12c-0.0016,0.55162-0.44838,0.9984-1,1H2.05C2.02,12.66992,2,12.34,2,12s0.02-0.67,0.05-1H5C5.55162,11.0016,5.9984,11.44838,6,12z M22,12c0,0.34-0.02,0.66992-0.05,1H19c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h2.95C21.98,11.33,22,11.65991,22,12z"
      ></path>
      <path
        className="uim-quaternary"
        d="M18,12c0-0.55231,0.44769-1,1-1h2.95001C21.46326,6.27332,17.72668,2.53674,13,2.05005V5c0,0.55231-0.44769,1-1,1s-1-0.44769-1-1V2.05005C6.27332,2.53674,2.53674,6.27332,2.04999,11H5c0.55164,0.00159,0.99841,0.44836,1,1c-0.00159,0.55164-0.44836,0.99841-1,1H2.04999C2.53668,17.72668,6.27332,21.46332,11,21.95001V19c0-0.55231,0.44769-1,1-1s1,0.44769,1,1v2.95001c4.72668-0.48669,8.46332-4.22333,8.95001-8.95001H19C18.44769,13,18,12.55231,18,12z"
      ></path>
      <path
        className="uim-primary"
        d="M8.46484,16.53516c-0.55218-0.00004-0.99978-0.4477-0.99974-0.99988c0.00001-0.13534,0.0275-0.26927,0.0808-0.39368l2.1211-4.94922c0.10068-0.23642,0.28897-0.42471,0.52539-0.52539L15.1416,7.5459c0.50738-0.21749,1.09501,0.0175,1.3125,0.52488c0.1078,0.25147,0.1078,0.53614,0,0.78762l-2.1211,4.94922c-0.10068,0.23642-0.28897,0.42471-0.52539,0.52539L8.8584,16.4541C8.73411,16.50765,8.60018,16.53524,8.46484,16.53516z"
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

export default MCompass;
