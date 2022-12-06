import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MWhatsapp: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-primary"
          d="M21.99017,6.54663a10.58917,10.58917,0,0,0-.10351-1.2821,4.31224,4.31224,0,0,0-.36231-1.08875,3.85315,3.85315,0,0,0-1.69482-1.69665A4.29892,4.29892,0,0,0,18.74707,2.117a10.52349,10.52349,0,0,0-1.292-.10546c-.18347-.00666-.4209-.00995-.53046-.00995L7.0769,2c-.10913,0-.34661.0033-.53027.00983a10.565,10.565,0,0,0-1.2821.10351,4.31223,4.31223,0,0,0-1.08875.36225A3.8543,3.8543,0,0,0,2.47906,4.17047a4.30328,4.30328,0,0,0-.36212,1.08246,10.54549,10.54549,0,0,0-.10547,1.292c-.00653.18347-.00988.4209-.00988.5304L2,16.9231c0,.10907.0033.34655.00983.53027a10.565,10.565,0,0,0,.10351,1.2821,4.313,4.313,0,0,0,.36225,1.08875,3.854,3.854,0,0,0,1.69482,1.69665,4.30453,4.30453,0,0,0,1.08252.36213,10.51972,10.51972,0,0,0,1.292.10546c.18341.0066.4209.00995.5304.00995L16.9231,22c.10907,0,.34661-.0033.53021-.00983a10.578,10.578,0,0,0,1.28216-.10351,4.31578,4.31578,0,0,0,1.08869-.36225,3.85422,3.85422,0,0,0,1.69671-1.69488,4.30144,4.30144,0,0,0,.36213-1.08246,10.53342,10.53342,0,0,0,.10553-1.292c.00659-.18347.00988-.4209.00988-.5304L22,7.0769C22,6.96783,21.9967,6.73029,21.99017,6.54663ZM12.21674,18.95648h-.00293a7.12618,7.12618,0,0,1-3.40693-.86743l-3.77929.991L6.039,15.3869a7.12969,7.12969,0,1,1,6.17774,3.56958Z"
        ></path>
        <path
          className="uim-primary"
          d="M12.21906,5.90112a5.92655,5.92655,0,0,0-5.022,9.07575L7.338,15.201l-.59863,2.18585L8.982,16.79871l.21637.12841a5.91785,5.91785,0,0,0,3.01593.82569h.00238a5.92585,5.92585,0,0,0,.00239-11.85169Zm3.48541,8.47a1.83436,1.83436,0,0,1-1.20239.84675,2.44255,2.44255,0,0,1-1.122-.0705,10.27562,10.27562,0,0,1-1.01551-.37518,7.94,7.94,0,0,1-3.043-2.68891,3.46344,3.46344,0,0,1-.72735-1.84216,1.99712,1.99712,0,0,1,.62347-1.4856.65467.65467,0,0,1,.475-.22284c.11871,0,.23761.0011.34137.00629.10937.00543.25622-.04156.40082.30573.14843.3565.5047,1.233.54919,1.32214a.328.328,0,0,1,.01489.312,1.21566,1.21566,0,0,1-.17816.29712c-.08905.104-.18707.23218-.26715.312-.08923.08881-.18207.18518-.07819.3634a5.36573,5.36573,0,0,0,.991,1.23365,4.86312,4.86312,0,0,0,1.4325.88391c.1781.08917.282.07428.38592-.04456s.44531-.52.564-.69824.23749-.14856.40075-.08911,1.03913.49023,1.21729.57935.29687.13372.34137.208a1.48784,1.48784,0,0,1-.10382.84684Z"
        ></path>
      </svg>
    </Wrapper>
  );
};