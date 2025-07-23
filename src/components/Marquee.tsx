export const Marquee: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="!w-full overflow-hidden  z-10">
      <div className="relative flex max-w-[95vw] md:max-w-[98vw] overflow-hidden py-14 m-auto">
        <div className="flex max-w-[95vw] w-max animate-marquee [--duration:40s] ">
          {children}
          {children}
          {children}
        </div>
      </div>
    </div>
  );
};
