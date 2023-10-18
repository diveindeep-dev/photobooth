'use client';

import { aspectRatio } from '@/config/frame';
import { MutableRefObject, useRef } from 'react';
import Webcam from 'react-webcam';

interface CameraProps {
  frameType: string;
  handleCapture: (ref: MutableRefObject<any>) => void;
}

export default function Camera({ frameType, handleCapture }: CameraProps) {
  const webcamRef = useRef<Webcam | null>(null);

  const videoConstraints = {
    aspectRatio: aspectRatio[frameType],
  };

  return (
    <div className={`flex-center camera-${frameType} bg-[#000000] p-[10px] w-full md:p-[20px]`}>
      <div className="flex-center w-full h-full">
        <Webcam
          ref={webcamRef}
          screenshotFormat="image/png"
          audio={false}
          mirrored={true}
          videoConstraints={videoConstraints}
          className="w-full"
        />
      </div>
      <div className="w-[100px] h-[100px] flex-center">
        <button
          onClick={() => handleCapture(webcamRef)}
          className="shutter bg-amber-50"
        />
      </div>
    </div>
  );
}
