'use client';

import { useSearchParams } from 'next/navigation';
import Camera from '../_components/camera';
import { useCallback, useEffect, useRef, useState } from 'react';
import Previews from '../_components/previews';
import Mockup from '../_components/mockup';
import Palette from '../_components/palette';
import Frame from '../_components/frame';
import { frameOrders } from '@/config/frame';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import today from '@/utils';

export default function Booth() {
  const searchParams = useSearchParams();
  const frameType = searchParams.get('frame') || 'basic';
  const [imgSrcs, setImgSrcs] = useState<string[]>([]);
  const [isNext, setIsNext] = useState<boolean>(false);
  const [pickedColor, setPickedColor] = useState<string>('slate-950');
  const [error, setError] = useState<string>('');
  const [currentOrder, setCurrentOrder] = useState<Orders | ''>('first');
  const [selected, setSelected] = useState<Cuts>({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });
  const savedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imgSrcs.length === 8) {
      setIsNext(true);
    } else if (imgSrcs.length === 4) {
      setError('');
    }
  }, [imgSrcs]);

  const retake = () => {
    setImgSrcs([]);
    setIsNext(false);
  };

  const goNext = () => {
    if (imgSrcs.length >= 4) {
      setIsNext(true);
    } else {
      setError('You need at least 4 cuts for the next step.');
    }
  };

  const selectPhoto = (imgSrc: string) => {
    const current = currentOrder !== '' ? frameOrders.indexOf(currentOrder) : 0;
    setSelected({ ...selected, [currentOrder]: imgSrc });
    setCurrentOrder(frameOrders[(current + 1) % 4]);
  };

  const reset = () => {
    setCurrentOrder('first');
    setPickedColor('slate-950');
    setSelected({
      first: '',
      second: '',
      third: '',
      fourth: '',
    });
  };

  const save = () => {
    setCurrentOrder('');
    const savedImg = savedRef.current;
    if (savedImg) {
      const option = {
        width: savedImg.clientWidth * 2,
        height: savedImg.clientHeight * 2,
        style: {
          transform: 'scale(2)',
          'transform-origin': '0% 0%',
        },
      };
      (async () => {
        const generate = await domtoimage.toBlob(savedImg, option);
        saveAs(generate, `${today('file')}-4cuts.png`);
      })();
    }
  };

  const capture = useCallback(
    (ref: React.MutableRefObject<any>) => {
      if (ref === null) return;
      if (imgSrcs.length >= 8) return;

      const imageSrc = ref.current.getScreenshot();
      setImgSrcs((prev) => [...prev, imageSrc]);
    },
    [imgSrcs],
  );

  return (
    <div className="body-container booth">
      <div className="flex flex-col justify-between items-center lg:max-w-[200px]">
        <div className="text-3xl font-thin p-5">{frameType?.toUpperCase()}</div>
        <div className="hidden lg:block scale-95 rotate-12 z-[-1]">
          <Mockup type={frameType} />
        </div>
      </div>
      {!isNext ? (
        <div>
          <div className={`booth-${frameType}`}>
            <Camera frameType={frameType} handleCapture={capture} />
            <Previews frameType={frameType} srcs={imgSrcs} />
          </div>
          <div className="flex-center text-lgn text-rose-500 h-[30px]">
            {error}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="my-auto" ref={savedRef}>
            <Frame
              color={pickedColor}
              type={frameType}
              handlePosition={setCurrentOrder}
              selected={selected}
              currentOrder={currentOrder}
            />
          </div>
          <div>
            <Palette handleColor={setPickedColor} />
            <Previews
              frameType={`set-${frameType}`}
              srcs={imgSrcs}
              handleClick={selectPhoto}
            />
          </div>
        </div>
      )}
      <div className="flex lg:flex-col">
        <div
          onClick={!isNext ? retake : reset}
          className="flex-center text-xl font-thin w-1/2 h-[100px] lg:w-full lg:h-1/2 bg-orange-50 hover:cursor-pointer hover:brightness-95"
        >
          {!isNext ? 'RETAKE' : 'RESET'}
        </div>
        <div
          onClick={!isNext ? goNext : save}
          className="flex-center flex-col text-xl font-thin w-1/2 h-[100px] lg:w-full lg:h-1/2 bg-orange-50 hover:cursor-pointer hover:brightness-95"
        >
          {!isNext ? 'NEXT' : 'SAVE'}
        </div>
      </div>
    </div>
  );
}
