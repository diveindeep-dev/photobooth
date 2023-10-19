'use client';

import { useCallback, useRef, useState } from 'react';
import { saveAs } from 'file-saver';
import Camera from '../_components/camera';
import Previews from '../_components/previews';
import Title from './title';
import { frameOrders } from '@/config/frame';
import Frame from '../_components/frame';
import today from '@/utils';
import html2canvas from 'html2canvas';

export default function Custom({ custom }: { custom: Custom }) {
  const [imgSrcs, setImgSrcs] = useState<string[]>([]);
  const [currentOrder, setCurrentOrder] = useState<Orders | ''>('first');
  const [selected, setSelected] = useState<Cuts>({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });
  const savedRef = useRef<HTMLDivElement>(null);

  const capture = useCallback(
    (ref: React.MutableRefObject<any>) => {
      if (ref === null) return;
      if (imgSrcs.length >= 8) return;

      const imageSrc = ref.current.getScreenshot();
      setImgSrcs((prev) => [...prev, imageSrc]);
    },
    [imgSrcs],
  );

  const selectPhoto = (imgSrc: string) => {
    const current = currentOrder !== '' ? frameOrders.indexOf(currentOrder) : 0;
    setSelected({ ...selected, [currentOrder]: imgSrc });
    setCurrentOrder(frameOrders[(current + 1) % 4]);
  };

  const save = () => {
    setCurrentOrder('');
    if (!savedRef.current) return;

    const savedImg = savedRef.current;
    (async () => {
      await html2canvas(savedImg);
      const generate = await html2canvas(savedImg);
      generate.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, `${today('file')}-${custom.title}.png`);
        }
      });
    })();
  };

  const retake = () => {
    setImgSrcs([]);
    setSelected({
      first: '',
      second: '',
      third: '',
      fourth: '',
    });
  };

  return (
    <div className="custom">
      <div className="area-title">
        <Title title={custom.title} />
      </div>
      <div className="area-camera">
        <Camera
          frameType="custom"
          handleCapture={capture}
          count={imgSrcs.length}
          folder={custom.folder}
        />
      </div>
      <div className="area-previews">
        <Previews frameType="custom" srcs={imgSrcs} handleClick={selectPhoto} />
      </div>

      <div className="grid grid-cols-2 gap-2 place-content-end m-[20px] area-buttons">
        <div
          className="flex-center p-[20px] border border-blue-950 w-full max-h-[100px] text-xl font-thin bg-orange-50 hover:cursor-pointer hover:brightness-95"
          onClick={retake}
        >
          RETAKE
        </div>
        <div
          className="flex-center p-[20px] border border-blue-950 w-full max-h-[100px] text-xl font-thin bg-orange-50 hover:cursor-pointer hover:brightness-95"
          onClick={save}
        >
          SAVE
        </div>
      </div>
      <div className="area-frame">
        <div className="my-auto" ref={savedRef}>
          <Frame
            color="slate"
            type="basic"
            handlePosition={setCurrentOrder}
            selected={selected}
            currentOrder={currentOrder}
            custom={custom}
          />
        </div>
      </div>
    </div>
  );
}
