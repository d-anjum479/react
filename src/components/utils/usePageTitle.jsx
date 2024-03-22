import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | MERN Project`;
  }, [title]);
};

export default usePageTitle;
