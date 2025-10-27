"use client";

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, triggerOnce = true, rootMargin = "0px 0px -100px 0px" } = options;
  const ref = useRef(null);
  const isInView = useInView(ref, {
		amount: threshold,
		once: triggerOnce,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		margin: rootMargin as any,
  });

  return { ref, isInView };
};

export const useScrollAnimationWithDelay = (delay: number = 0, options: UseScrollAnimationOptions = {}) => {
  const { ref, isInView } = useScrollAnimation(options);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView && !shouldAnimate) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, shouldAnimate, delay]);

  return { ref, isInView: shouldAnimate };
};