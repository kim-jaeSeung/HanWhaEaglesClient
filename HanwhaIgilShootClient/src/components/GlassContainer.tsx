interface GlassContainerProps {
  title: string;
  children: React.ReactNode;
}
function GlassContainer({ title, children }: GlassContainerProps) {
  return (
    <div className="flex-1 min-w-0">
      <h2 className="mb-4 text-white font-bold text-xl">{title}</h2>
      <div className="weather-glass rounded-3xl justify-between p-8 flex flex-col items-center min-w-0">
        {children}
      </div>
    </div>
  );
}

export default GlassContainer;
