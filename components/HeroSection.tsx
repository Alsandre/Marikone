import React, { useState, useEffect, useReducer } from "react";
import Image from "next/image";

const imageArray: string[][] = [
  ["hero3", "hero5", "hero7"],
  ["hero1", "hero4", "hero8"],
  ["hero2", "hero6", "hero9"],
];
// const loadReducer = (prevState: any, action:any) => {

//   return prevState
// };
const initialState = {
  renderState: imageArray[0],
  loadCount: 0,
  buttonState: { buttonStatus: false, buttonText: "Load More" },
};
export const HeroSection = () => {
  // const [state, dispatchAction] = useReducer(loadReducer, {renderState: imageArray[0], loadCount: 0} )
  const [state, setState] = useState(initialState);
  const [isMobile, setIsMobile] = useState(false);
  // const [loadCount, setLoadCount] = useState(0);
  useEffect(() => {
    setIsMobile(screen.width < 768);
  }, []);

  const loadHandler = () => {
    // setLoadCount((prevState) => {
    //   console.log(prevState);
    //   return prevState + 1;
    // });
    setState((prevState) => {
      const newLoadCount = prevState.loadCount + 1;
      if (imageArray[newLoadCount]) {
        const newRenderState = [
          ...prevState.renderState,
          ...imageArray[newLoadCount],
        ];

        return {
          renderState: newRenderState,
          loadCount: newLoadCount,
          buttonState: prevState.buttonState,
        };
      } else
        return {
          ...prevState,
          buttonState: { buttonStatus: true, buttonText: "Nothing to Load" },
        };
    });
  };

  return (
    <div className="min-h-screen flex justify-start pt-4 md:pb-32 pb-24 flex-col items-center">
      <div className="">
        <h1 className="text-dark-200 text-2xl italic font-extralight">
          Fashion Designer
        </h1>
      </div>

      <div className="md:mt-8 mt-6 flex flex-col md:flex-row">
        <div className="flex-col mx-1">
          {state.renderState.map((el) => (
            <div className="mb-3" key={el}>
              <Image
                src={`/assets/${el}.png`}
                width={390}
                height={507}
                alt="3"
                quality={30}
              />
            </div>
          ))}
        </div>
        <button
          onClick={loadHandler}
          disabled={state.buttonState.buttonStatus}
          className="w-32 h-12 bg-accent-200 rounded self-center my-3 mx-8"
        >
          {state.buttonState.buttonText}
        </button>
      </div>
    </div>
  );
};
