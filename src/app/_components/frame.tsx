import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { frameOrders } from '@/config/frame';
import today from '@/utils';

interface FrameProps {
  type: string;
  color: Colors;
  handlePosition: Dispatch<SetStateAction<Orders | ''>>;
  currentOrder: string;
  selected: Cuts;
  custom?: Custom | undefined;
}

export default function Frame(props: FrameProps) {
  const { type, color, handlePosition, currentOrder, selected, custom } = props;
  const frameBg = {
    rose: 'bg-rose-300',
    indigo: 'bg-indigo-300',
    blue: 'bg-blue-400',
    emerald: 'bg-emerald-600',
    gray: 'bg-gray-600',
    slate: 'bg-slate-950',
  };

  const photos = frameOrders.map((order: Orders, i: number) => {
    const orderIndex = frameOrders.indexOf(order);
    const isSelectedImg = selected[order];
    const isCurrent =
      order === currentOrder
        ? 'border-orange-50'
        : currentOrder === ''
        ? 'border-transparent'
        : 'border-slate-400';

    return (
      <div
        key={i}
        className={`frame-aspect relative border-2 ${isCurrent}`}
        onClick={() => handlePosition(order)}
      >
        {custom && (
          <Image
            src={`/assets/frame/${custom.folder}/${orderIndex}.png`}
            alt="frame"
            fill
            className="absolute z-[100]"
          />
        )}
        {isSelectedImg && (
          <Image src={isSelectedImg} alt={`${order}`} fill className="z-[99]" />
        )}
      </div>
    );
  });

  return (
    <div
      className={`relative flex flex-col ${frameBg[color]} px-[15px] pt-[15px] frame-${type} overflow-hidden`}
    >
      <div className={`grid gap-[15px] frame-grid`}>{photos}</div>
      <div className="flex-center flex-col h-full text-orange-50">
        <div className="logo">{custom ? custom.title : 'PHOTOBOOTH'}</div>
        <div>{today()}</div>
      </div>
    </div>
  );
}
