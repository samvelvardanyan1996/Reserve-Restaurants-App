import { useEffect, useRef } from "react";

/**
 * This hook is used to call a callback once, but given that the condition is true
 * The callback will ( should :) ) be called only once
 * 
 * @param {Function} cb 
 * @param {boolean} condition 
 */
export const useCallOnceOnCondition = (cb, condition) => {
  const isAlreadyCalled = useRef(false);

  useEffect(() => {
    let unsubscribe = false;

    if (condition && !isAlreadyCalled.current) {
      isAlreadyCalled.current = true;
      unsubscribe = cb();
    }

    if (unsubscribe instanceof Function) return () => unsubscribe();
  }, [condition, cb]);
};
