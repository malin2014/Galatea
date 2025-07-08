/* eslint-disable @next/next/no-img-element */
export const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 bg-white/20 backdrop-blur-md shadow-md">
        <div className="flex items-center space-x-2">
          <img
            src="/logoT1.png"
            alt="Logo"
            className="h-8 w-8 object-contain bg-transparent"
            style={{ background: "transparent" }}
          />
          <h1 className="text-2xl font-serif font-semibold text-white select-none">
            Galatea
          </h1>
        </div>
        <div className="flex-1 max-w-md ml-6"></div>
      </header>
      <div className="mt-16"></div>
    </>
  );
};
