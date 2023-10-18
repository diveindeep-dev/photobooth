'use client';

import { useSearchParams } from 'next/navigation';
import Camera from '../_components/camera';
import { MutableRefObject, useCallback, useState } from 'react';
import Previews from '../_components/previews';

export default function Booth() {
  const searchParams = useSearchParams();
  const frameType = searchParams.get('frame') || 'basic';
  const [imgSrcs, setImgSrcs] = useState<string[]>([]);

  const capture = useCallback(
    (ref: MutableRefObject<any>) => {
      if (imgSrcs.length >= 8) return;

      const imageSrc = ref.current.getScreenshot();
      setImgSrcs((prev) => [...prev, imageSrc]);
    },
    [imgSrcs],
  );

  return (
    <div className="body-container booth">
      <div>{frameType?.toUpperCase()}</div>
      <div className={`booth-${frameType}`}>
        <Camera frameType={frameType} handleCapture={capture} />
        <Previews frameType={frameType} srcs={imgSrcs} />
      </div>
      <div className="flex lg:flex-col">
        <div>RESET</div>
        <div>NEXT</div>
      </div>
    </div>
  );
}
