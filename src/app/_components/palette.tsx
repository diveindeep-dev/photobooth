import { frameColors } from '@/config/frame';
import { Dispatch, SetStateAction } from 'react';

export default function Palette({
  handleColor,
}: {
  handleColor: Dispatch<SetStateAction<Colors>>;
}) {
  const frameBg = {
    rose: 'bg-rose-300',
    indigo: 'bg-indigo-300',
    blue: 'bg-blue-400',
    emerald: 'bg-emerald-600',
    gray: 'bg-gray-600',
    slate: 'bg-slate-950',
  };

  const colorChips = frameColors.map((color: Colors, i: number) => {
    return (
      <div
        key={i}
        onClick={() => handleColor(color)}
        className={`${frameBg[color]} w-[50px] h-[50px] m-1 rounded hover:cursor-pointer`}
      />
    );
  });

  return (
    <div className="flex flex-col p-1">
      <div className="flex-center text-2xl font-thin p-2">Pick Frame Color</div>
      <div className="flex-center">{colorChips}</div>
    </div>
  );
}
