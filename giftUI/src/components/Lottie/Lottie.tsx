// Path: src/components/Lottie/Lottie.tsx
// It will be responsible for displaying all our lotties animations in the app.

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface ILottie {
    path?: string;
    autoplay?: boolean;
    loop?: boolean;
    style?: React.CSSProperties;
}

function Lottie ({path="../../assets/lotties/earn.json", autoplay=true, loop=false, style}: ILottie) {
    return (
        <DotLottieReact
            src={path}
            autoplay={autoplay}
            loop={loop}
            style={style ? style : { width: '26px', height: '26px' }}
        />
    );
}

export default Lottie;