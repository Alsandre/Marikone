import React, {useState} from "react";

import Image from "next/image";

type TImageLoaderProps = {
    title: string;
    imagePathList: string[];
    imagePerLoad: number
}

export const ImageLoader = ({title, imagePathList, imagePerLoad}: TImageLoaderProps) => {
    const [loadCount, setLoadCount] = useState(1);
    const [buttonState, setButtonState] = useState(true);

    const loadHandler = () => {
        setLoadCount(loadCount + 1);
        setButtonState(!!imagePathList[(loadCount+1)*imagePerLoad])
    }
    const rengerImagePathList = imagePathList.slice(0, loadCount*imagePerLoad);
  return (
    <div className="min-h-screen mx-5 flex justify-start pt-4 pb-24 flex-col items-center md:pb-32">
      <div className="">
        <h1 className="text-dark-200 text-2xl italic font-extralight">
          {title}
        </h1>
      </div>

      <div className="md:mt-8 mt-6 flex flex-col">
        {rengerImagePathList.map(imagePath => <div key={`${imagePerLoad}_${imagePath}`} className=" mb-3">
            <Image
              src={imagePath}
              width={390}
              height={507}
              alt="1"
              quality={30}
            />
          </div>)}
          {buttonState && <button className="self-center mt-8 py-3 px-8 rounded bg-accent-200 w-fit" onClick={loadHandler}>Load More</button>}
      </div>
    </div>
  );
};
