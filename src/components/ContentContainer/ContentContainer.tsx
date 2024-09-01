const ContentContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="justify-self-center w-full max-w-3xl px-3 lg:px-6">
      {children}
    </div>
  );
};

export default ContentContainer;
