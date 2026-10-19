"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, RotateCcw } from 'lucide-react';
import Button from '../Button';

const presetMemories = [
    { src: "/images/1766949044395.jpg", title: "With You Always 💕" },
    { src: "/images/IMG_20251228_183641_608.webp", title: "Unforgettable Moments ✨" },
    { src: "/images/Snapchat-93328477.jpg", title: "My Favorite Person 🌸" },
    { src: "/images/Snapchat-448008985.jpg", title: "Hand in Hand 🤝" },
    { src: "/images/20260509_113635.jpg", title: "In My Heart Forever 💖" },
    { src: "/images/20260513_185815.jpg", title: "Endless Smiles with Bubu 🌙" },
];

export default function MemoriesScreen({ onNext }) {
    const [cards, setCards] = useState(presetMemories);

    const swipeCard = () => {
        if (cards.length > 1) {
            setCards(prev => prev.slice(1));
        }
    };

    const resetCards = () => {
        setCards(presetMemories);
    };

    const isLastCard = cards.length === 1;
    const currentIndex = presetMemories.length - cards.length + 1;

    return (
        <div className="flex flex-col justify-center items-center w-full h-full relative">
            <motion.div
                className="text-center z-10 mt-4 md:mt-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-1">
                    Our Memories
                </h2>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={isLastCard ? 'last' : 'more'}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="text-xl md:text-2xl font-hand text-purple-400"
                    >
                        {isLastCard ? "Our favorite moments together 💕" : `Tap photo to reveal next (${currentIndex} of ${presetMemories.length})`}
                    </motion.p>
                </AnimatePresence>
            </motion.div>

            {/* Stacked Polaroids Layout */}
            <div className="relative w-full max-w-100 h-102.5 md:h-112.5 my-3 flex items-center justify-center">
                <AnimatePresence>
                    {cards.map((item, index) => {
                        if (index > 2) return null;

                        const isTop = index === 0;

                        return (
                            <motion.div
                                key={`${item.src}-${index}`}
                                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                animate={{
                                    opacity: 1 - (index * 0.15),
                                    scale: 1 - (index * 0.05),
                                    y: index * 15,
                                    rotate: isTop ? 0 : (index % 2 === 0 ? 3 : -3),
                                    zIndex: cards.length - index
                                }}
                                exit={{ opacity: 0, x: -120, transition: { duration: 0.4, ease: "easeOut" } }}
                                transition={{ type: "spring", damping: 18 }}
                                className={`absolute left-1/2 -translate-x-1/2 inset-0 top-6 w-67.5 h-84 md:w-75 md:h-92 bg-[#fafafa] p-4 pb-4 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-pink-50 flex flex-col ${isTop && !isLastCard ? 'cursor-pointer' : ''}`}
                                onClick={isTop && !isLastCard ? swipeCard : undefined}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Photo Container */}
                                <div className="w-full flex-1 rounded-sm overflow-hidden shadow-inner border border-slate-100 bg-slate-100 relative">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover pointer-events-none"
                                        draggable="false"
                                    />
                                </div>

                                {/* Polaroid Bottom Caption Area */}
                                <div className="pt-3 pb-1 text-center">
                                    <span className="font-hand text-slate-600 font-semibold text-lg md:text-xl">
                                        {item.title}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3 shrink-0 z-10 mb-4">
                {cards.length < presetMemories.length && (
                    <button
                        type="button"
                        onClick={resetCards}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-100 text-xs font-semibold cursor-pointer transition-colors shadow-xs"
                    >
                        <RotateCcw size={14} />
                        <span>View Again</span>
                    </button>
                )}

                <Button onClick={onNext} text="A Letter For You" animateIcon={false} icon={<Mail size={18} />} />
            </div>
        </div>
    );
}