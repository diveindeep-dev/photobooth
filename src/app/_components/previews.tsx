import Image from 'next/image';

interface PreviewsProps {
  frameType: string;
  srcs: string[];
}

export default function Previews({ frameType, srcs }: PreviewsProps) {
  const blanks = [1, 2, 3, 4, 5, 6, 7, 8].slice(srcs.length);

  const preview = srcs.map((src: string, i: number) => {
    return (
      <div key={i} className={`relative aspect-${frameType}`}>
        <Image key={i} src={src} alt={`preview${i + 1}`} fill />
      </div>
    );
  });

  const blankBox = blanks.map((num: number, i: number) => {
    return (
      <div
        key={i}
        className={`flex-center text-xl font-thin border border-blue-950 aspect-${frameType}`}
      >{`TAKE ${num}`}</div>
    );
  });

  return (
    <div className="flex flex-col p-[10px]">
      <div className={`previews previews-${frameType}`}>
        {preview}
        {blankBox}
      </div>
      <div className="flex-center text-center text-xl font-thin">
        You can take up to 8 pictures. <br />
        In the next step, you will select 4 pictures.
      </div>
    </div>
  );
}
