'use client';

import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';

export default function Camera() {
  const [imgSrcs, setImgSrcs] = useState<string[]>([]);
  const webcamRef = useRef<any>(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrcs((prev) => [...prev, imageSrc]);
  }, [webcamRef, setImgSrcs]);

  return (
    <div>
      <Webcam ref={webcamRef} />
      <button onClick={capture}>TAKE</button>
      {imgSrcs.map((imgSrc: string, i: number) => {
        return <Image key={i} src={imgSrc} alt={`take${i}`} width={500} height={500}/>;
      })}
    </div>
  );
}
