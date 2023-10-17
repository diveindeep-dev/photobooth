export default function Mockup({ type }: { type: string }) {
  return (
    <div
      className={`mockup-${type} grid border border-sky-950 group-hover:bg-amber-50`}
    >
      <div className="border border-sky-950 group-hover:bg-sky-950" />
      <div className="border border-sky-950 group-hover:bg-sky-950" />
      <div className="border border-sky-950 group-hover:bg-sky-950" />
      <div className="border border-sky-950 group-hover:bg-sky-950" />
    </div>
  );
}
