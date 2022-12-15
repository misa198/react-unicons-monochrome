import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MEnvelopeReceive: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M16,10H8c-1.10765,0.00547-2.12393,0.61524-2.65,1.59l4.53,4.52c0.55932,0.56808,1.32279,0.8886,2.12,0.89c0.79506-0.0023,1.55702-0.31858,2.12-0.88l4.53-4.53C18.12393,10.61524,17.10765,10.00547,16,10z"
      ></path>
      <path
        className="uim-quaternary"
        d="M18.638,11.60205L14.12,16.12C13.55701,16.6814,12.79504,16.99768,12,17c-0.79724-0.0014-1.56067-0.3219-2.12-0.89001L5.362,11.60205C5.13898,12.02124,5.00055,12.49219,5,13v5c0.00183,1.65613,1.34387,2.99817,3,3h8c1.65613-0.00183,2.99817-1.34387,3-3v-5C18.99945,12.49219,18.86102,12.02124,18.638,11.60205z"
      ></path>
      <path
        className="uim-primary"
        d="M15,6H9C8.44771,6,8,5.55228,8,5s0.44771-1,1-1h6c0.55229,0,1,0.44772,1,1S15.55229,6,15,6z"
      ></path>
      <path
        className="uim-primary"
        d="M11,8c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-2-2C7.90252,5.31673,7.90235,4.68381,8.29262,4.29332C8.29274,4.2932,8.29287,4.29307,8.293,4.29294l2-2c0.38802-0.39293,1.0211-0.3969,1.41403-0.00888s0.3969,1.0211,0.00888,1.41403C11.71296,3.70108,11.70999,3.70405,11.707,3.707L10.41406,5l1.293,1.293c0.39046,0.39058,0.39037,1.02375-0.00021,1.41421C11.51936,7.89465,11.26511,7.99996,11,8z"
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

export default MEnvelopeReceive;
