const ContentContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="justify-self-center w-full max-w-[1024px] px-3 md:px-3 lg:px-6">
      {children}
    </div>
  );
};

export default ContentContainer;
