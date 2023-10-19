'use client';

import { aspectRatio } from '@/config/frame';
import Image from 'next/image';
import { MutableRefObject, useRef } from 'react';
import Webcam from 'react-webcam';

interface CameraProps {
  frameType: string;
  handleCapture: (ref: MutableRefObject<any>) => void;
  count?: number;
  folder?: string;
}

export default function Camera({
  frameType,
  handleCapture,
  count,
  folder,
}: CameraProps) {
  const webcamRef = useRef<Webcam | null>(null);
  const frameName = frameType === 'custom' ? 'basic' : frameType;

  const videoConstraints = {
    aspectRatio: aspectRatio[frameName],
  };

  const framePic = () => {
    if (count !== undefined) {
      const frameIndex = count % 4;
      return (
        <Image
          src={`/assets/frame/${folder}/${frameIndex}.png`}
          alt="frame"
          fill
          className="absolute z-[100]"
        />
      );
    }
  };

  return (
    <div
      className={`flex-center camera-${frameName} bg-[#000000] p-[10px] w-full md:p-[20px]`}
    >
      <div className="flex-center w-full h-full relative">
        {frameType === 'custom' && framePic()}
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
