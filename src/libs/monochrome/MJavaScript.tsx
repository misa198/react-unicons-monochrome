import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MJavaScript: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M11.18114,2.21337a1.67718,1.67718,0,0,1,1.6373,0q3.73908,2.11278,7.47852,4.2242a1.53948,1.53948,0,0,1,.77755,1.32588v8.47418a1.5562,1.5562,0,0,1-.83561,1.35473q-3.72679,2.10114-7.45187,4.204a1.62966,1.62966,0,0,1-1.6554-.046q-1.11729-.6477-2.23593-1.29283a1.3164,1.3164,0,0,1-.4313-.31057c.095-.12807.2649-.144.403-.19994a5.21912,5.21912,0,0,0,.88212-.41157.20588.20588,0,0,1,.22965.01374c.63694.3652,1.26826.741,1.90734,1.10272.13634.07872.27438-.02578.39092-.09074q3.65712-2.06694,7.31681-4.1291a.242.242,0,0,0,.13292-.23827q.00257-4.19317.00085-8.38685a.26207.26207,0,0,0-.15613-.26141Q15.858,5.454,12.14581,3.36a.258.258,0,0,0-.29162-.00043Q8.141,5.45224,4.429,7.5467a.259.259,0,0,0-.157.26021q.00065,4.19316,0,8.38727a.23712.23712,0,0,0,.13463.23527q.99089.56192,1.98306,1.11989a1.53232,1.53232,0,0,0,1.23991.166.94055.94055,0,0,0,.609-.88376c.00341-2.77914-.00171-5.5587.00256-8.33741a.20929.20929,0,0,1,.22794-.21369c.3174-.00214.63523-.00428.95264.00085a.2198.2198,0,0,1,.20728.25415c-.00128,2.79674.00342,5.59354-.00214,8.39027a2.12737,2.12737,0,0,1-.99481,1.92109,3.06373,3.06373,0,0,1-2.73825-.07522c-.72641-.36256-1.41962-.79045-2.13314-1.17887a1.55257,1.55257,0,0,1-.83518-1.355V7.76345a1.54232,1.54232,0,0,1,.80419-1.34269Q7.45584,4.31791,11.18114,2.21337Z"
      ></path>
      <path
        className="uim-primary"
        d="M13.34826,8.08349a5.87915,5.87915,0,0,1,3.2182.49242,2.43371,2.43371,0,0,1,1.18663,2.106.22792.22792,0,0,1-.24731.16775c-.31434-.00043-.62875.00427-.94309-.00214a.243.243,0,0,1-.22759-.2357,1.43568,1.43568,0,0,0-.6868-.99217,4.0712,4.0712,0,0,0-1.88413-.26961,2.55759,2.55759,0,0,0-1.34875.33585.85461.85461,0,0,0-.28421.95478c.101.24.378.3174.60468.38877,1.30566.34148,2.68924.30751,3.97.7569a1.86908,1.86908,0,0,1,1.23044,1.09453,2.33831,2.33831,0,0,1-.396,2.23081,3.126,3.126,0,0,1-1.6782.90441,8.06257,8.06257,0,0,1-2.53311.10756,3.99184,3.99184,0,0,1-2.22823-.83824,2.33838,2.33838,0,0,1-.75306-1.84452.21126.21126,0,0,1,.23136-.18627c.31655-.00256.6331-.00342.94965.00043a.22185.22185,0,0,1,.22666.21939,1.43883,1.43883,0,0,0,.53544,1.01019,4.06055,4.06055,0,0,0,2.18728.39825,2.97051,2.97051,0,0,0,1.79344-.43864.99057.99057,0,0,0,.26961-.94615c-.07693-.27958-.3694-.40987-.62056-.49506-1.28892-.40772-2.688-.25978-3.96442-.72085a1.92948,1.92948,0,0,1-1.2184-1.06177,2.17473,2.17473,0,0,1,.43437-2.26264,3.50565,3.50565,0,0,1,2.17617-.87436Z"
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

export default MJavaScript;
