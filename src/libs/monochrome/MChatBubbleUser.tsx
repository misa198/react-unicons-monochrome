import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MChatBubbleUser: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M18,2H6C4.34387,2.00183,3.00183,3.34387,3,5v11c0.00183,1.65613,1.34387,2.99817,3,3h2.58594l2.70709,2.70697C11.48035,21.89478,11.73474,22.00024,12,22c0.23871,0.00018,0.46954-0.08539,0.65039-0.24121L15.87012,19H18c1.65613-0.00183,2.99817-1.34387,3-3V5C20.99817,3.34387,19.65613,2.00183,18,2z M12,12.28522c-1.65662-0.00024-2.99939-1.34338-2.99915-3s1.34344-2.99939,3-2.99915c1.65662,0.00024,2.99939,1.34338,2.99915,3C14.99774,10.94189,13.65576,12.28345,12,12.28522z"
      ></path>
      <path
        className="uim-quaternary"
        d="M12,12.2852c-1.65661-0.00024-2.99936-1.34339-2.99912-3c0.00024-1.65661,1.34339-2.99936,3-2.99912c1.65661,0.00024,2.99936,1.34339,2.99912,3c0,0,0,0.00001,0,0.00001C14.99776,10.94187,13.65578,12.28345,12,12.2852z"
      ></path>
      <path
        className="uim-primary"
        d="M16.59961,13.60742c-0.45282-1.06024-1.26819-1.90857-2.28107-2.44196c-0.55005,0.677-1.37848,1.11877-2.31854,1.11975c-0.94037-0.00012-1.76923-0.44183-2.31909-1.11914c-0.9826,0.51636-1.81061,1.341-2.28052,2.44135c-0.05286,0.12402-0.08014,0.25739-0.08014,0.39221C7.32013,14.55206,7.76788,14.99994,8.32031,15h7.35938c0.13483,0,0.26819-0.02728,0.39221-0.08014C16.58002,14.70312,16.81628,14.11554,16.59961,13.60742z"
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

export default MChatBubbleUser;
