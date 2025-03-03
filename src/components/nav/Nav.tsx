'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/hooks/ThemeProvider';

const items = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Funcionalidades', id: 'funcionalidades' },
  { label: 'Contato', id: 'contato' },
];

interface NavProps {
  isFixed: boolean;
}

const Nav = ({ isFixed }: NavProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const { theme } = useTheme();
  const navRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (navRef.current) {
      const activeItem = navRef.current.children[activeIndex] as HTMLElement;
      if (activeItem) {
        setUnderlineStyle({
          left: activeItem.offsetLeft,
          width: activeItem.offsetWidth,
        });
      }
    }
  }, [activeIndex]);

  const handleScrollTo = (index: number, id: string) => {
    setActiveIndex(index);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -130;
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let newIndex = 0;

      items.forEach((item, index) => {
        const section = document.getElementById(item.id);
        if (section) {
          const offsetTop = section.offsetTop - 100;
          if (scrollPosition >= offsetTop) {
            newIndex = index;
          }
        }
      });

      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full z-50 backdrop-blur-md border-b border-gray-400 dark:border-gray-500 transition-all duration-300 ${
        isFixed ? 'fixed top-0 left-0 ' : 'relative'
      }`}
    >
      <ul ref={navRef} className="flex justify-center text-center p-1 gap-5">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleScrollTo(index, item.id)}
            className={`relative font-poppins font-bold cursor-pointer p-2 text-sm rounded-b-none overflow-hidden group ${
              activeIndex === index
                ? theme === 'dark'
                  ? 'text-white'
                  : 'text-black'
                : theme === 'dark'
                  ? 'text-gray-400'
                  : 'text-gray-700'
            }`}
          >
            <span className="relative p-2 rounded rounded-b-none group-hover:bg-gray-700/30 dark:group-hover:bg-gray-300/30 group-hover:text-black dark:group-hover:text-white z-10">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
      <div
        className="absolute bottom-0 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-out"
        style={{ left: underlineStyle.left, width: underlineStyle.width }}
      />
    </nav>
  );
};

export default Nav;
