"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';
import Button from '../Button';

const letterText = `My Dearest,

Every single day we spend apart only makes me realize how much you truly mean to me. The distance is hard sometimes, but it's just a test of how far our love can travel.

I count the days until I can finally hold you in my arms again. You are my home, my favorite person, and my safe place.

Even when we are miles apart, I carry you in my heart everywhere I go. I miss your smile, your laugh, and just simply being next to you.

Thank you for being the best part of my life. I promise the wait will be worth it when I finally get to see you again.

Forever Yours,
Me :)`;

export default function LetterScreen({ onNext }) {
  const [showScrollHint, setShowScrollHint] = useState(true);
  const scrollContainerRef = useRef(null);

  const handleScroll = (e) => {
    const el = e.currentTarget;
    // Check if scrolled near the bottom (within 40px)
    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 40;
    if (atBottom && showScrollHint) {
      setShowScrollHint(false);
    } else if (!atBottom && !showScrollHint) {
      setShowScrollHint(true);
    }
  };

  const scrollToNextChunk = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 140,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mt-2 md:mt-4 shrink-0"
      >
        <span className="text-rose-400 font-bold tracking-widest uppercase text-xs mb-1 block opacity-90">
          A Message For You
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-1">
          From My Heart
        </h2>
      </motion.div>

      <div className="relative w-full max-w-md my-8 flex items-center justify-center z-10 min-h-100 md:min-h-110">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 120 }}
          className="relative w-full h-100 md:h-110 bg-[#FFFBF5] rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.08)] flex flex-col overflow-hidden border border-amber-100/60"
        >

          {/* Letter Header Bar */}
          <div className="pt-5 pb-3 px-6 flex items-center justify-between border-b border-black/5 bg-[#FFFDF9]/60 backdrop-blur-sm z-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center gap-2">
              <Heart size={18} className="text-pink-400 fill-pink-300" />
              <span className="font-bold text-slate-600 text-sm md:text-base">For My Favorite Person</span>
            </motion.div>

            <span className="text-xs font-hand text-rose-400 font-semibold hidden sm:inline-block">
              scroll to read ↓
            </span>
          </div>

          {/* Scrollable Letter Body */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="overflow-y-auto h-80 md:h-90 p-6 md:p-8 pb-16 relative scroll-smooth"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="font-hand text-slate-700 text-xl md:text-2xl leading-relaxed whitespace-pre-wrap">
              {letterText}
            </motion.div>
          </div>

          {/* Scrolling Hint Pill & Bottom Gradient Mask */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-[#FFFBF5] via-[#FFFBF5]/80 to-transparent z-10 flex items-center justify-center pb-2">
            <AnimatePresence>
              {showScrollHint && (
                <motion.button
                  type="button"
                  onClick={scrollToNextChunk}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="pointer-events-auto inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/95 border border-pink-200 text-rose-500 shadow-md text-xs font-semibold tracking-wide cursor-pointer hover:bg-rose-50 transition-colors"
                >
                  <span>Scroll to read more</span>
                  <motion.span
                    animate={{ y: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                  >
                    <ChevronDown size={14} className="text-rose-500" />
                  </motion.span>
                </motion.button>
              )}
            </AnimatePresence>
          </div>

        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Button onClick={onNext} text="One Last Thing" icon={<Sparkles size={18} />} animateIcon={false} />
      </motion.div>
    </div>
  );
}