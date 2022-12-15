import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MVolleyball: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="9" className="uim-tertiary"></circle>
      <path
        className="uim-primary"
        d="M12,22A10,10,0,1,1,22,12,10.01177,10.01177,0,0,1,12,22ZM12,4a8,8,0,1,0,8,8A8.00917,8.00917,0,0,0,12,4Z"
      ></path>
      <path
        className="uim-primary"
        d="M7.3291 20.69043a.98918.98918 0 0 1-.46289-.11426 1.05028 1.05028 0 0 1-.55664-.90625A1.01271 1.01271 0 1 1 7.3291 20.69043zm.98047-1.02051h0zM9.4707 8.91016A1 1 0 0 1 8.85059 7.125a9.96875 9.96875 0 0 1 11.33984-.66895l-.002.00293a1.043 1.043 0 0 1 .38769.40723 1.00033 1.00033 0 0 1-1.501 1.25293 8.13555 8.13555 0 0 0-8.98633.57617A.99375.99375 0 0 1 9.4707 8.91016zM12.12109 22a1.00005 1.00005 0 0 1-.458-1.88965A7.96256 7.96256 0 0 0 16 13a7.79119 7.79119 0 0 0-.46-2.66016.99995.99995 0 1 1 1.88086-.67968A9.78326 9.78326 0 0 1 18 13a9.95592 9.95592 0 0 1-5.42285 8.88965A.99633.99633 0 0 1 12.12109 22zM7.88965 5H7.87988a1 1 0 1 1 .00977 0zM11.6709 16.7002a.99472.99472 0 0 1-.25977-.03418A10.02151 10.02151 0 0 1 4 7c0-.26172.01172-.52246.03418-.77246a1.00041 1.00041 0 1 1 1.99219.18555C6.00781 6.60254 6 6.80078 6 7a8.01846 8.01846 0 0 0 5.92871 7.73438 1 1 0 0 1-.25781 1.96582z"
      ></path>
      <path
        className="uim-primary"
        d="M7,20.48047A.99991.99991,0,0,1,6.669,18.53711,8.00886,8.00886,0,0,0,12,11.05176a.99966.99966,0,0,1,1-.99219h.00781A1.00009,1.00009,0,0,1,14,11.06738a10.01322,10.01322,0,0,1-6.66895,9.35645A.9836.9836,0,0,1,7,20.48047Z"
      ></path>
      <path
        className="uim-primary"
        d="M12.999,12.05957a.98778.98778,0,0,1-.44336-.10449,9.93971,9.93971,0,0,1-5.501-7.9336A1.00063,1.00063,0,0,1,7.94824,2.9248a1.015,1.015,0,0,1,1.09668.89356,7.95086,7.95086,0,0,0,4.39942,6.3457.9999.9999,0,0,1-.44532,1.89551Z"
      ></path>
      <path
        className="uim-primary"
        d="M20.959,12.19043a.99354.99354,0,0,1-.498-.13379,8.03918,8.03918,0,0,0-7.37891-.28516.99939.99939,0,1,1-.86328-1.80273,10.05569,10.05569,0,0,1,9.24023.35547.99991.99991,0,0,1-.5,1.86621Z"
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

export default MVolleyball;
