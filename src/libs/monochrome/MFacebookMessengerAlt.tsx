import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFacebookMessengerAlt: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g data-name="Brand Logos">
        <path
          className="uim-tertiary"
          d="M12,2A9.651,9.651,0,0,0,1.99988,11.70033a9.4898,9.4898,0,0,0,3.14087,7.17511.80592.80592,0,0,1,.26965.56946l.05432,1.77868a.80138.80138,0,0,0,1.12274.70826l1.984-.87525a.79794.79794,0,0,1,.5332-.04028A10.876,10.876,0,0,0,12,21.40065,9.70481,9.70481,0,1,0,12,2Z"
        ></path>
        <path
          className="uim-primary"
          d="M6.499,14.77246a1.00006,1.00006,0,0,1-.76464-1.64258L8.78613,9.49414a.996.996,0,0,1,1.28907-.21l3.34668,2.05566L15.73438,8.585a.99954.99954,0,1,1,1.53124,1.28516l-2.86621,3.416a1.00068,1.00068,0,0,1-1.28906.21L9.76367,11.44043,7.26562,14.415A.99422.99422,0,0,1,6.499,14.77246Z"
        ></path>
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

export default MFacebookMessengerAlt;
