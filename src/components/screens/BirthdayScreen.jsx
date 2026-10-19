"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Cake, PartyPopper, Heart, RotateCcw, Flame } from 'lucide-react';
import Button from '../Button';

export default function BirthdayScreen({ onRestart }) {
    const [candlesBlown, setCandlesBlown] = useState(false);
    const [wishMade, setWishMade] = useState(false);

    const handleBlowCandles = () => {
        setCandlesBlown(true);
        setTimeout(() => {
            setWishMade(true);
        }, 600);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-full relative py-6 px-4 text-center">

            {/* Background glowing blobs */}
            <div className="bg-blob w-72 h-72 bg-pink-200 top-10 left-10 pointer-events-none"></div>
            <div className="bg-blob w-80 h-80 bg-amber-100 bottom-10 right-10 pointer-events-none" style={{ animationDelay: '2s' }}></div>

            {/* Header Badge */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/80 border border-rose-200 text-rose-500 text-xs md:text-sm font-semibold tracking-wider uppercase mb-4 z-10"
            >
                <Sparkles size={16} className="text-amber-400 fill-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
                <span>Advance Birthday Wish</span>
                <PartyPopper size={16} className="text-rose-500" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-4xl md:text-6xl font-bold text-slate-700 mb-2 z-10"
            >
                Happy Birthday in Advance, <br />
                <span className="text-rose-500 font-hand text-5xl md:text-7xl">Bubu! 🎂✨</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-xl md:text-2xl text-slate-500 font-hand max-w-md mx-auto mb-6 z-10"
            >
                A special celebration made just for my favorite human.
            </motion.p>

            {/* Interactive Birthday Cake Card */}
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.6, type: "spring", damping: 18 }}
                className="relative z-10 w-full max-w-lg bg-white/85 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-[0_15px_40px_rgba(251,113,133,0.18)] border-2 border-pink-100 flex flex-col items-center my-2 mb-8"
            >
                {/* Cake Illustration / Interactive Candle */}
                <div className="relative mb-5 flex flex-col items-center">
                    <div className="relative flex items-center justify-center w-24 h-24 md:w-28 md:h-28 bg-rose-50 rounded-full border-4 border-pink-100 shadow-inner">
                        <Cake size={56} className="text-rose-500" strokeWidth={1.75} />

                        {/* Candle Flame on top of cake */}
                        {!candlesBlown ? (
                            <motion.div
                                animate={{
                                    scale: [1, 1.25, 0.95, 1.15, 1],
                                    rotate: [-3, 3, -2, 2, 0],
                                    y: [-1, 1, -1]
                                }}
                                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                                className="absolute -top-3 text-amber-500 filter drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]"
                            >
                                <Flame size={24} className="fill-amber-400" />
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: [0, 1, 0], y: [-5, -20] }}
                                transition={{ duration: 1.5 }}
                                className="absolute -top-4 text-slate-400 font-hand text-xs font-semibold"
                            >
                                ✨ poof! ✨
                            </motion.div>
                        )}
                    </div>

                    {/* Interactive Blow Candle Button */}
                    <motion.button
                        onClick={handleBlowCandles}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={candlesBlown}
                        className={`mt-4 px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                            candlesBlown
                                ? "bg-emerald-100 text-emerald-700 border border-emerald-200 cursor-default"
                                : "bg-linear-to-r from-pink-400 to-rose-400 text-white shadow-md hover:shadow-lg"
                        }`}
                    >
                        {candlesBlown ? "✨ Wish Granted! ✨" : "Blow The Candle & Make a Wish 🕯️"}
                    </motion.button>
                </div>

                {/* Heartfelt Note to Bubu */}
                <div className="text-slate-600 font-hand text-xl md:text-2xl leading-relaxed text-balance space-y-3">
                    <p>
                        My Dearest Bubu, I couldn&apos;t wait until the exact day to start celebrating you!
                    </p>
                    <p>
                        You bring so much sunshine, laughter, and sweet warmth into my life. Every single moment with you is a gift, and I am so grateful to walk beside you.
                    </p>
                    <p className="text-rose-500 font-semibold">
                        May your upcoming birthday and this entire year ahead be filled with everything you wish for, endless smiles, and all our future adventures together! 💖
                    </p>
                </div>

                {/* Celebration Pop-up */}
                <AnimatePresence>
                    {wishMade && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="mt-5 p-4 rounded-2xl bg-rose-50/90 border border-rose-200 text-rose-600 font-hand text-lg md:text-xl font-bold flex items-center justify-center gap-2"
                        >
                            <PartyPopper size={20} className="text-amber-500" />
                            <span>Your birthday wish has been locked into the universe! Happy Birthday, Bubu! 🎈🎂</span>
                            <Heart size={20} className="text-rose-500 fill-rose-400" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Restart journey button */}
            {onRestart && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="z-10"
                >
                    <Button
                        onClick={onRestart}
                        text="Replay From Beginning"
                        icon={<RotateCcw size={18} />}
                        animateIcon={false}
                    />
                </motion.div>
            )}
        </div>
    );
}
