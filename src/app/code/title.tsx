export default function Title({
  title,
}: {
  title: string;
}) {
  return (
    <div className="flex flex-col items-center lg:max-w-[200px] overflow-hidden">
      <div className="text-3xl font-thin p-5">{title}</div>
      <div className="hidden lg:block opacity-20 text-8xl z-[-1] translate-x-3 rotate-12">
        <div>****</div>
      </div>
    </div>
  );
}
