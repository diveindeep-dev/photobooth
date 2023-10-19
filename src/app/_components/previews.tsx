import Image from 'next/image';

interface PreviewsProps {
  frameType: string;
  srcs: string[];
  handleClick?: (src: string) => void;
}

export default function Previews({
  frameType,
  srcs,
  handleClick,
}: PreviewsProps) {
  const blanks = [1, 2, 3, 4, 5, 6, 7, 8].slice(srcs.length);
  const canClick = handleClick !== undefined;

  const preview = srcs.map((src: string, i: number) => {
    return (
      <div
        key={i}
        className="relative pic-aspect"
        onClick={canClick ? () => handleClick(src) : undefined}
      >
        <Image key={i} src={src} alt={`preview${i + 1}`} fill />
      </div>
    );
  });

  const blankBox = blanks.map((num: number, i: number) => {
    return (
      <div
        key={i}
        className="flex-center text-xl font-thin border border-blue-950 pic-aspect"
      >{`TAKE ${num}`}</div>
    );
  });

  return (
    <div className="flex flex-col w-full">
      <div className={`previews previews-${frameType}`}>
        {preview}
        {blankBox}
      </div>
      {!handleClick && (
        <div className="flex-center text-center text-sm font-thin">
          You can take up to 8 pictures. <br />
          In the next step, you will select 4 pictures.
        </div>
      )}
    </div>
  );
}
