import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MWordpress: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M12,2.6A9.4,9.4,0,1,0,21.4,12,9.4,9.4,0,0,0,12,2.6Z"
      ></path>
      <path
        className="uim-primary"
        d="M12.14648 12.72858L9.64575 19.99377a8.33685 8.33685 0 0 0 5.12171-.13293.74428.74428 0 0 1-.0597-.11487zM3.66675 11.99963a8.33374 8.33374 0 0 0 4.69678 7.4997L4.38818 8.60834A8.30011 8.30011 0 0 0 3.66675 11.99963z"
      ></path>
      <path
        className="uim-primary"
        d="M17.62573,11.57941a4.38889,4.38889,0,0,0-.687-2.29816,3.90279,3.90279,0,0,1-.8186-1.95453,1.4429,1.4429,0,0,1,1.39941-1.47894c.037,0,.072.00445.10791.00671A8.3314,8.3314,0,0,0,5.03735,7.42255c.19556.00622.37989.01013.53626.01013.87146,0,2.22107-.106,2.22107-.106a.34448.34448,0,0,1,.05322.68677s-.45166.05286-.95361.07916l3.03442,9.02649,1.824-5.4693L10.45435,8.09265c-.449-.0263-.874-.07916-.874-.07916a.34447.34447,0,0,1,.053-.68677s1.37586.106,2.19458.106c.87146,0,2.22131-.106,2.22131-.106a.34447.34447,0,0,1,.0531.68677s-.452.05286-.95361.07916l3.01148,8.95777.85962-2.72407A9.60383,9.60383,0,0,0,17.62573,11.57941Z"
      ></path>
      <path
        className="uim-primary"
        d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm7.79492,15.25519a9.4271,9.4271,0,0,1-4.13623,3.40631A9.38753,9.38753,0,0,1,6.74475,19.795a9.432,9.432,0,0,1-3.40637-4.13629,9.38577,9.38577,0,0,1,.8667-8.91394A9.4271,9.4271,0,0,1,8.34131,3.33844a9.38753,9.38753,0,0,1,8.91394.86652,9.432,9.432,0,0,1,3.40637,4.13629,9.38577,9.38577,0,0,1-.8667,8.91394Z"
      ></path>
      <path
        className="uim-primary"
        d="M19.36877,8.85876a7.86528,7.86528,0,0,1-.63391,2.98475L16.1897,19.20239A8.33428,8.33428,0,0,0,19.31274,8.002,6.38147,6.38147,0,0,1,19.36877,8.85876Z"
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

export default MWordpress;
