import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MEnvelopeShield: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M21.7,7.96774l-7.58,7.58008c-1.16755,1.17084-3.06319,1.17351-4.23404,0.00596C9.88397,15.5518,9.88199,15.54981,9.88,15.54782L2.3,7.96774C2.79464,6.9245,3.84544,6.259,5,6.25774h14C20.15456,6.259,21.20536,6.9245,21.7,7.96774z"
      ></path>
      <path
        className="uim-quaternary"
        d="M21.70001,7.96771L14.12,15.54779c-1.16754,1.1709-3.06317,1.17352-4.23401,0.00598C9.88397,15.55182,9.88196,15.5498,9.88,15.54779L2.29999,7.96771C2.10345,8.36945,2.00085,8.81055,2,9.25775v10c0.00488,1.65485,1.34515,2.99512,3,3h14c1.65485-0.00488,2.99512-1.34515,3-3v-10C21.99915,8.81055,21.89655,8.36945,21.70001,7.96771z"
      ></path>
      <path
        className="uim-primary"
        d="M18,14.26562c-0.21417,0.00008-0.42268-0.06874-0.59473-0.19628l-1.56445-1.1587c-1.16226-0.873-1.84454-2.24317-1.84082-3.69677V5.8999c0.00004-0.55243,0.4479-1.00023,1.00033-1.00019c0.07113,0,0.14206,0.0076,0.21158,0.02265c0.76672,0.16627,1.56794-0.00364,2.20118-0.46679c0.3504-0.25293,0.82342-0.25293,1.17382,0c0.6329,0.4639,1.43446,0.63388,2.20118,0.46679c0.53992-0.11689,1.07237,0.22604,1.18926,0.76596C21.9924,5.75784,21.99999,5.82877,22,5.8999v3.314c0.00375,1.45325-0.67812,2.82316-1.83984,3.69629l-1.56543,1.15918C18.42268,14.1969,18.21416,14.2657,18,14.26562z"
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

export default MEnvelopeShield;
