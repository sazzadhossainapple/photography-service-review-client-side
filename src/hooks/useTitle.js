import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Flash Photography Point`;
  }, [title]);
};

export default useTitle;
