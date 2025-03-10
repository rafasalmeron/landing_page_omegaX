'use client';

import { useTheme } from '@/hooks/ThemeProvider';
import Nav from '@/components/nav/Nav';
import { useEffect, useState } from 'react';
import MaterialUISwitch from '@/components/header/MaterialUISwitch';

const Header = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const { theme, toggleTheme } = useTheme();
  const [isNavFixed, setIsNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.getElementById('header')?.offsetHeight || 0;
      setIsNavFixed(window.scrollY >= headerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div id="header" className="w-full shadow-md z-50">
        <div className="flex justify-between p-3">
          <div>
            <h1 className="text-3xl font-orbitron">EmpresaX</h1>
            <span className="text-sm font-poppins">
              Conecte, gerencie, cresça.
            </span>
          </div>
          <MaterialUISwitch
            checked={theme === 'dark'}
            onChange={toggleTheme}
            inputProps={{ 'aria-label': 'toggle theme' }}
          />
        </div>
      </div>
      <Nav isFixed={isNavFixed} />
    </>
  );
};

export default Header;
