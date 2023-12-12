type TagProps = {
  children: React.ReactNode;
};

const Tag: React.FC<TagProps> = ({ children }) => {
  return (
    <>
      <div className="inline-block rounded-lg bg-customYellow px-3 py-1 shadow-2xl">
        {children}
      </div>
    </>
  );
};

export default Tag;
