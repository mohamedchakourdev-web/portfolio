'use client';

import { useCallback, useEffect, useRef, type RefCallback } from 'react';

export function useSurfaceTilt(max = 5): RefCallback<HTMLElement> {
  const cleanupRef = useRef<(() => void) | null>(null);

  const ref = useCallback((node: HTMLElement | null) => {
    cleanupRef.current?.();
    cleanupRef.current = null;
    if (!node) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const narrow = window.matchMedia('(max-width: 860px)');
    let frame = 0;
    let bound = false;

    const onMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
      const y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        node.style.setProperty('--rx', `${((0.5 - y) * max * 2).toFixed(2)}deg`);
        node.style.setProperty('--ry', `${((x - 0.5) * max * 2).toFixed(2)}deg`);
        node.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
        node.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
        node.classList.add('is-active');
      });
    };

    const reset = () => {
      cancelAnimationFrame(frame);
      node.style.setProperty('--rx', '0deg');
      node.style.setProperty('--ry', '0deg');
      node.classList.remove('is-active');
    };

    const sync = () => {
      const allow = !reduce.matches && fine.matches && !narrow.matches;
      if (allow && !bound) {
        node.addEventListener('mousemove', onMove, { passive: true });
        node.addEventListener('mouseleave', reset);
        bound = true;
        return;
      }
      if (!allow && bound) {
        reset();
        node.removeEventListener('mousemove', onMove);
        node.removeEventListener('mouseleave', reset);
        bound = false;
      }
    };

    sync();
    reduce.addEventListener('change', sync);
    fine.addEventListener('change', sync);
    narrow.addEventListener('change', sync);

    cleanupRef.current = () => {
      cancelAnimationFrame(frame);
      if (bound) {
        reset();
        node.removeEventListener('mousemove', onMove);
        node.removeEventListener('mouseleave', reset);
      }
      reduce.removeEventListener('change', sync);
      fine.removeEventListener('change', sync);
      narrow.removeEventListener('change', sync);
    };
  }, [max]);

  useEffect(() => () => cleanupRef.current?.(), []);

  return ref;
}
