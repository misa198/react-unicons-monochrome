import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MImageResizeSquare: React.FC<Props> = ({
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
        className="uim-primary"
        d="M17.12012,22.00781h-0.23926c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h0.23926c0.55228,0,1,0.44772,1,1S17.6724,22.00781,17.12012,22.00781z M22,22.00781c-0.56226,0.00409-1.02658-0.43821-1.0498-1c-0.01227-0.40952,0.23103-0.78362,0.61035-0.93847c0.135-0.07295,0.28601-0.11121,0.43945-0.11134c0.52867-0.02312,0.97599,0.38671,0.99911,0.91538c0.00051,0.0116,0.0008,0.0232,0.00089,0.03481C23.00737,21.48054,22.57048,21.96095,22,22.00781z M22,17.61914c-0.55196,0.00032-0.99968-0.44687-1-0.99884c0-0.00039,0-0.00077,0-0.00116V16.4043c0-0.55229,0.44772-1,1-1s1,0.44771,1,1v0.21484c0.00032,0.55196-0.44687,0.99968-0.99884,1C22.00077,17.61914,22.00039,17.61914,22,17.61914z M22,13.11523c-0.55196,0.00032-0.99968-0.44688-1-0.99884c0-0.00039,0-0.00077,0-0.00116v-0.21386c0-0.55229,0.44772-1,1-1s1,0.44771,1,1v0.21386c0.00032,0.55196-0.44688,0.99968-0.99884,1C22.00077,13.11523,22.00039,13.11523,22,13.11523z M22,8.6123c-0.55196,0.00032-0.99968-0.44688-1-0.99884c0-0.00039,0-0.00077,0-0.00116V7.39746c0-0.55228,0.44772-1,1-1s1,0.44772,1,1V7.6123c0.00032,0.55196-0.44687,0.99968-0.99884,1C22.00077,8.6123,22.00039,8.6123,22,8.6123z M22,4.1084c-0.42776,0.0002-0.80822-0.27189-0.94629-0.67676c-0.06793-0.13095-0.10343-0.2763-0.10351-0.42383c-0.02312-0.52867,0.38671-0.97599,0.91538-0.99911c0.0116-0.00051,0.0232-0.0008,0.03481-0.00089c0.57235-0.00735,1.05275,0.42953,1.09961,1V3.1084c0.00031,0.55197-0.44689,0.99969-0.99886,1C22.00076,4.1084,22.00038,4.1084,22,4.1084z M18.09277,4.00781h-0.19043c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h0.19043c0.55228,0,1,0.44772,1,1S18.64505,4.00781,18.09277,4.00781z M14.09477,4.00781H13.9043c-0.55229,0-1-0.44772-1-1s0.44771-1,1-1h0.19043c0.55229,0,1,0.44772,1,1s-0.44771,1-1,1H14.09477z M10.09672,4.00781H9.90625c-0.55229,0-1-0.44772-1-1s0.44771-1,1-1h0.19043c0.55229,0,1,0.44772,1,1s-0.44771,1-1,1H10.09672z M6.09872,4.00781H5.9082c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h0.19043c0.55228,0,1,0.44772,1,1s-0.44772,1-1,1H6.09872z M2,4.1084C1.44803,4.10871,1.00031,3.66151,1,3.10954C1,3.10916,1,3.10878,1,3.1084V3.00781c-0.00031-0.55197,0.44689-0.99969,0.99886-1c0.00038,0,0.00076,0,0.00114,0c0.56226-0.00408,1.02657,0.43821,1.0498,1c0.00191,0.21896-0.06467,0.43305-0.19042,0.61231C2.67904,3.92301,2.35251,4.10853,2,4.1084z M2,8.78223C1.44803,8.78255,1.00031,8.33534,1,7.78337c0-0.00038,0-0.00076,0-0.00114V7.55957c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v0.22266c0.00032,0.55197-0.44689,0.99969-0.99886,1C2.00076,8.78223,2.00038,8.78223,2,8.78223z"
      ></path>
      <path
        className="uim-tertiary"
        d="M13,11.01H2c-0.55162,0.0016-0.9984,0.44838-1,1v9c0.0016,0.55162,0.44838,0.9984,1,1h11c0.55162-0.0016,0.9984-0.44838,1-1v-9C13.9984,11.45838,13.55162,11.0116,13,11.01z"
      ></path>
      <path
        className="uim-primary"
        d="M13.71,19.09l-2.43-2.42c-0.93165-0.88988-2.39835-0.88988-3.33,0l-4.66,4.66C3.11217,21.51274,3.00878,21.75517,3,22.01h10c0.55162-0.0016,0.9984-0.44838,1-1V19.8C13.99803,19.53489,13.8942,19.28068,13.71,19.09z"
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

export default MImageResizeSquare;
