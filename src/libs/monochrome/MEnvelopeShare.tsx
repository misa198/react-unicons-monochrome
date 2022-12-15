import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MEnvelopeShare: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M20.7,7.71l-7.58,7.58c-1.16755,1.17084-3.06319,1.17351-4.23404,0.00596C8.88397,15.29398,8.88198,15.29199,8.88,15.29L1.3,7.71C1.79464,6.66676,2.84544,6.00126,4,6h14C19.15456,6.00126,20.20536,6.66676,20.7,7.71z"
      ></path>
      <path
        className="uim-quaternary"
        d="M20.70001,7.71002L13.12,15.28998c-1.16754,1.17084-3.06317,1.17352-4.23401,0.00598C8.88397,15.29401,8.88196,15.29199,8.88,15.28998L1.29999,7.71002C1.10345,8.11169,1.00085,8.5528,1,9v10c0.00488,1.65485,1.34515,2.99512,3,3h14c1.65485-0.00488,2.99512-1.34515,3-3V9C20.99915,8.5528,20.89655,8.11169,20.70001,7.71002z"
      ></path>
      <path
        className="uim-primary"
        d="M14.68066,8.59082c-0.55239,0.00033-1.00046-0.4472-1.00079-0.99959c-0.00023-0.39066,0.227-0.7457,0.58185-0.9091l4.50683-2.07324c0.50231-0.22984,1.09584-0.00896,1.32569,0.49336c0.22919,0.5009,0.01024,1.09284-0.48975,1.32402l-4.50683,2.07324C14.96685,8.55959,14.82461,8.59074,14.68066,8.59082z"
      ></path>
      <path
        className="uim-primary"
        d="M19.18555,10.66406c-0.14395-0.00008-0.28619-0.03122-0.417-0.09131l-4.50683-2.07324c-0.50142-0.23178-0.72001-0.82616-0.48822-1.32758c0.23117-0.50009,0.82321-0.71908,1.32416-0.4898l4.50683,2.07324c0.50175,0.23104,0.7212,0.82509,0.49016,1.32684C19.93126,10.43706,19.57621,10.6643,19.18555,10.66406z"
      ></path>
      <circle cx="20" cy="5" r="2" className="uim-primary"></circle>
      <circle cx="15" cy="7.5" r="2" className="uim-primary"></circle>
      <circle cx="20" cy="10" r="2" className="uim-primary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MEnvelopeShare;
