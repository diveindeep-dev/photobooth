import { frameColors } from '@/config/frame';
import { Dispatch, SetStateAction } from 'react';

export default function Palette({
  handleColor,
}: {
  handleColor: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="flex flex-col p-1">
      <div className="flex-center text-2xl font-thin p-2">Pick Frame Color</div>
      <div className="flex-center">
        {frameColors.map((color: string, i: number) => {
          return (
            <div
              key={i}
              onClick={() => handleColor(color)}
              className={`bg-[#${color}] w-[50px] h-[50px] m-1 rounded hover:cursor-pointer`}
            />
          );
        })}
      </div>
    </div>
  );
}
