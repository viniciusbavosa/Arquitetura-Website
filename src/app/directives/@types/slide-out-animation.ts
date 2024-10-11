type slideOutKeyframe = [
  { transform: string, opacity?: number },
  { transform: string, opacity?: number }
];

interface slideOutTiming {
  duration: number;
  iterations?: typeof Infinity;
  delay?: number;
  fill?: string;
  easing?: string
};

interface intersectionObserverOptions {
  root: HTMLElement | null;
  rootMargin: string;
  threshold: number;
}

export {
  slideOutKeyframe,
  slideOutTiming,
  intersectionObserverOptions
}