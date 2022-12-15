import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MTableTennis: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M20.01727,16.81281c-0.04645-0.0567-0.09564-0.11121-0.1474-0.16315l-1.41425-1.41425c-0.51764-0.51807-0.70795-1.27911-0.495-1.97986l0.24042-0.53741c0.66815-1.83002,0.216-3.88141-1.15967-5.26086L16.68787,7.1037l-1.591-1.591c-2.63605-2.63605-6.90991-2.63605-9.54596,0c-1.98383,1.98389-2.47339,4.89496-1.47119,7.33783c0.41833-0.2218,0.88782-0.35931,1.39343-0.35931c1.6543,0,3,1.3457,3,3c0,0.68475-0.23956,1.30902-0.62714,1.81451c1.36273,1.12823,3.22687,1.47174,4.91034,0.85712l0.53741-0.24042c0.70074-0.21295,1.46179-0.02271,1.97992,0.495l1.32227,1.32227c0.82251,0.85718,2.15625,0.96356,3.10419,0.2475C20.66431,19.19818,20.80627,17.77698,20.01727,16.81281z"
      ></path>
      <path
        className="uim-primary"
        d="M19.70013,19.98706c0.96411-0.78893,1.10612-2.21004,0.31719-3.17415c-0.04646-0.05678-0.09567-0.11127-0.14745-0.16325l-1.41424-1.41431c-0.51767-0.51807-0.70794-1.27913-0.495-1.97986l0.24042-0.53747c0.47908-1.32288,0.38326-2.78582-0.26428-4.03491l-9.21533,9.21533c1.24908,0.64755,2.71201,0.74342,4.03491,0.2644l0.53741-0.24048c0.70073-0.213,1.46182-0.02272,1.97986,0.495l1.32233,1.32239C17.41852,20.59686,18.75222,20.70312,19.70013,19.98706z"
      ></path>
      <path
        className="uim-quaternary"
        d="M5.47314,18.49121c-1.6543,0-3-1.3457-3-3s1.3457-3,3-3s3,1.3457,3,3S7.12744,18.49121,5.47314,18.49121z"
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

export default MTableTennis;
