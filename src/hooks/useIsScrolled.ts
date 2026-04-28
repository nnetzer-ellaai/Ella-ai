import { useEffect, useState } from "react";

export function useIsScrolled() {
  const [isScrolled, setIsScrolled] = useState(false);
  function handleScroll() {
    setIsScrolled(true);
  }
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return isScrolled;
}
