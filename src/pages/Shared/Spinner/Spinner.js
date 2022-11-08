import React from "react";

const Spinner = () => {
  return (
    <div className="min-h-screen flex justify-center items-center py-12 lg:px-20 md:px-12 sm:px-8 px-6">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    </div>
  );
};

export default Spinner;
