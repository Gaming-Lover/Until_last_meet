"use client";

import { motion } from 'framer-motion';
import { Heart, Gift } from 'lucide-react';
import Button from '../Button';

export default function FinalScreen({ onNext }) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full relative py-6">

            <div className="relative z-10 flex items-center justify-center h-44 w-44 md:h-52 md:w-52 mb-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className="absolute flex items-center justify-center"
                >
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
                        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                        className="bg-rose-300 blur-[50px] w-40 h-40 rounded-full"
                    ></motion.div>
                </motion.div>

                <motion.div
                    animate={{ y: [-6, 6, -6] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="relative flex items-center justify-center"
                >
                    <Heart
                        className="w-28 h-28 md:w-36 md:h-36 text-rose-500 fill-rose-400 drop-shadow-[0_15px_25px_rgba(244,114,182,0.4)]"
                        strokeWidth={1.5}
                    />
                </motion.div>
            </div>

            <div className="text-center z-10 max-w-md mx-auto">
                <motion.h1
                    className="text-5xl md:text-6xl font-semibold text-slate-700 mb-3"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    I Love You.
                </motion.h1>

                <motion.p
                    className="text-2xl md:text-3xl text-rose-500 font-hand mb-10"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    I can&apos;t wait to see you again.
                </motion.p>

                {onNext && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                    >
                        <Button
                            onClick={onNext}
                            text="One More Surprise For You"
                            icon={<Gift size={18} />}
                            animateIcon={false}
                        />
                    </motion.div>
                )}
            </div>
        </div>
    );
}