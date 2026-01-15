import { useEffect, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const ScrollButton = ({ children, speed = 500 }) => {
  const scrollRef = useRef(null);
  const [hideLeft, setHideLeft] = useState(true);
  const [hideRight, setHideRight] = useState(false);

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: speed, behavior: 'smooth' });
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -speed, behavior: 'smooth' });
  };

  const checkButtons = () => {
    const slider = scrollRef.current;
    if (!slider) return;

    // hide left
    setHideLeft(slider.scrollLeft <= 0);

    // hide right
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    setHideRight(slider.scrollLeft >= maxScroll - 5); // tolerance kecil
  };

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    // cek langsung saat mount
    checkButtons();

    // cek saat scroll
    slider.addEventListener('scroll', checkButtons);

    // cek saat window resize (konten bisa berubah)
    window.addEventListener('resize', checkButtons);

    return () => {
      slider.removeEventListener('scroll', checkButtons);
      window.removeEventListener('resize', checkButtons);
    };
  }, [children]); // jika children berubah, cek ulang

  return (
    <div className="relative">
      {/* Left Button */}
      {!hideLeft && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 p-2 rounded-full shadow z-20"
        >
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Scroll Area */}
      <div
        ref={scrollRef}
        className="overflow-x-auto flex gap-4 no-scrollbar scroll-smooth"
      >
        {children}
      </div>

      {/* Right Button */}
      {!hideRight && (
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 p-2 rounded-full shadow z-20"
        >
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
