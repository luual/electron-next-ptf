export const SearchBar = () => {
  return (
    <input
      className="mx-4 bg-blackA5
       shadow-blackA9 
       inline-flex h-[35px]
       min-w-[75px] 
       max-w-[200px] 
       appearance-none 
       items-center justify-center 
       rounded-[4px] px-[10px] text-[15px] 
       leading-none text-white shadow-[0_0_0_1px] 
       outline-none focus:shadow-[0_0_0_2px_black] 
       selection:color-white selection:bg-blackA9"
      type="text"
      defaultValue="Search..."
    />
  );
};
