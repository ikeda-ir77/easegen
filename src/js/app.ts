/*
 * Easing Functions - inspired from http://gizma.com/easing/
 * only considering the t value for the range [0, 1] => [0, 1]
 */

interface IEasing {
  linear: (t: number) => void;
  easeInQuad: (t: number) => void;
  easeOutQuad: (t: number) => void;
  easeInOutQuad: (t: number) => void;
  easeInCubic: (t: number) => void;
  easeOutCubic: (t: number) => void;
  easeInOutCubic: (t: number) => void;
  easeInQuart: (t: number) => void;
  easeOutQuart: (t: number) => void;
  easeInOutQuart: (t: number) => void;
  easeInQuint: (t: number) => void;
  easeOutQuint: (t: number) => void;
  easeInOutQuint: (t: number) => void;

}

const Easing: IEasing = {
  linear: (t) => { return t },
  easeInQuad: (t) => { return t*t },
  easeOutQuad: (t) => { return t*(2-t) },
  easeInOutQuad: (t) => { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
  easeInCubic: (t) => { return t*t*t },
  easeOutCubic: (t) => { return (--t)*t*t+1 },
  easeInOutCubic: (t) => { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
  easeInQuart: (t) => { return t*t*t*t },
  easeOutQuart: (t) => { return 1-(--t)*t*t*t },
  easeInOutQuart: (t) => { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
  easeInQuint: (t) => { return t*t*t*t*t },
  easeOutQuint: (t) => { return 1+(--t)*t*t*t*t },
  easeInOutQuint: (t) => { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
}

let startTime: number | null = null;

type EasingKeys = keyof IEasing;
const returnValue = (obj: any, key: any) => {
  const res: any = obj[key];
  return res;
}


const generateEase = (min: number, max: number, duration: number, processed: number, ease: string) => {
  if (startTime === null) {
    startTime = new Date().getTime();
  }

  const
    amount = max - min,
    per = processed / duration;

  const value = returnValue(Easing, ease)(per) * amount + min;
  return value;
}