'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const useDark = saved !== 'light';
    setDark(useDark);
    document.documentElement.classList.toggle('light', !useDark);
  }, []);
  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('light', !next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }
  return <button onClick={toggle} className="icon-button" aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`} title="Toggle theme">{dark ? <Sun size={17} /> : <Moon size={17} />}</button>;
}
