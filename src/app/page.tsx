import Link from 'next/link';
import Mockup from './_components/mockup';

export default function Home() {
  return (
    <div className="body-container grid grid-cols-2 min-h-[800px] grid-rows-2 max-h-[100vh] lg:grid-cols-4 lg:grid-rows-1">
      <div className="flex-center flex-col">
        <h1 className="logo">PHOTOBOOTH</h1>
        <div className="text-3xl">4CUTS IN WEB</div>
      </div>
      <Link href="/code" className="menu group">
        <div className="text-3xl font-thin">CODE</div>
        <div className="text-9xl font-thin opacity-80 h-full flex-center group-hover:text-amber-50">
          ****
        </div>
      </Link>
      <Link href="/booth" className="menu group border-t lg:border-t-0">
        <div className="text-3xl font-thin">BASIC</div>
        <div className="self-center rotate-12 translate-y-10 lg:translate-y-0 ">
          <Mockup type={'basic'} />
        </div>
      </Link>
      <Link href="/booth" className="menu group border-t lg:border-t-0">
        <div className="text-3xl font-thin">WIDE</div>
        <div className="translate-y-10 lg:translate-y-0 ">
          <Mockup type={'wide'} />
        </div>
      </Link>
    </div>
  );
}
