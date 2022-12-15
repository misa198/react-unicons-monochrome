import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MGitlabAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <g data-name="logo art">
        <path
          className="uim-primary"
          d="M11.99935,21.42092h0l3.68451-11.33344H8.32017l3.67918,11.33344Z"
        ></path>
        <path
          className="uim-quaternary"
          d="M3.1594,10.08748h0l-1.122,3.44324a.76313.76313,0,0,0,.27611.85267l9.68586,7.03747L3.1594,10.08748Z"
        ></path>
        <path
          className="uim-primary"
          d="M3.1594,10.08748H8.32017L6.09912,3.2619a.3831.3831,0,0,0-.72685,0L3.1594,10.08748Z"
        ></path>
        <path
          className="uim-quaternary"
          d="M20.84463,10.08748h0l1.118,3.44324a.76313.76313,0,0,1-.27611.85267l-9.68716,7.03753,8.84528-11.33344Z"
        ></path>
        <path
          className="uim-primary"
          d="M20.84463,10.08748H15.68386l2.217-6.82558a.3831.3831,0,0,1,.72685,0l2.217,6.82558Z"
        ></path>
        <polygon
          className="uim-tertiary"
          points="11.999 21.421 15.684 10.087 20.845 10.087 11.999 21.421"
        ></polygon>
        <polygon
          className="uim-tertiary"
          points="11.999 21.421 3.159 10.087 8.32 10.087 11.999 21.421"
        ></polygon>
      </g>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MGitlabAlt;
