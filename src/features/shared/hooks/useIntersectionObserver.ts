import { useRef, useEffect } from 'react';
function useIntersectionObserver<E extends HTMLElement>(
  options: IntersectionObserverInit,
  func: Function,
) {
  const elementRef = useRef<E>(null);
  const observerOptions = useRef(options);
  //   const funcRef = useRef(func);
  useEffect(() => {
    function observerCallback(entries: IntersectionObserverEntry[]) {
      const observationEntry = entries[0];
      if (observationEntry.isIntersecting) {
        func();
      }
    }
    const element = elementRef.current;
    if (!element) {
      return;
    }
    const intersectionObserver = new IntersectionObserver(
      observerCallback,
      observerOptions.current,
    );
    intersectionObserver.observe(element);
    return () => {
      intersectionObserver.disconnect();
    };
  }, [func]);

  return elementRef;
}

export default useIntersectionObserver;
