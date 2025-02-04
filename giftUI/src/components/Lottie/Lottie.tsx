// Path: src/components/Lottie/Lottie.tsx
// It will be responsible for displaying all our lotties animations in the app.

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { memo, useEffect, useState } from "react";

interface ILottie {
    path: string;
    autoplay?: boolean;
    loop?: boolean;
    isActive: boolean;
    style?: React.CSSProperties;
}

/**
 * I think the dotlottie-react team should revise their documentation
 * to clearly specify that relative paths to local files are not valid for the src attribute.
 * 
 * It took me many hours to understand this, and I lost a lot of time.
 * Here is how to construct a valid path when working locally with the package.
 * 
 * const path = new URL("Your local relative path", import.meta.url).href;
 * ==> http://localhost:5273/src/assets/lotties/test.json
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta
 * https://developer.mozilla.org/en-US/docs/Web/API/URL/URL
 */
   
function Lottie({ path, autoplay=false, loop=false, isActive, style }: ILottie) {
    const [dotLottie, setDotLottie] = useState<any>(null);

    const dotLottieRefCallback = (instance: any) => {
        setDotLottie(instance);
    };

    useEffect(() => {
        if (dotLottie) {
            if (isActive) {
                dotLottie.play();
            } else {
                dotLottie.stop();
            }
        }
    }, [isActive, dotLottie]);

    return (
        <DotLottieReact
            dotLottieRefCallback={dotLottieRefCallback}
            src={path}
            autoplay={autoplay}
            loop={loop}
            style={style || { width: "26px", height: "26px" }}
        />
    );
}

export default Lottie;