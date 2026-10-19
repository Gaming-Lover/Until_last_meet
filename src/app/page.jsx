"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroScreen from '@/components/screens/IntroScreen';
import LastMetScreen from '@/components/screens/LastMetScreen';
import ThingsToDoScreen from '@/components/screens/ThingsToDoScreen';
import MemoriesScreen from '@/components/screens/MemoriesScreen';
import LetterScreen from '@/components/screens/LetterScreen';
import FinalScreen from '@/components/screens/FinalScreen';
import BirthdayScreen from '@/components/screens/BirthdayScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    <IntroScreen key="intro" onNext={() => setCurrentScreen(1)} />,
    <LastMetScreen key="lastmet" onNext={() => setCurrentScreen(2)} />,
    <ThingsToDoScreen key="todo" onNext={() => setCurrentScreen(3)} />,
    <MemoriesScreen key="memories" onNext={() => setCurrentScreen(4)} />,
    <LetterScreen key="letter" onNext={() => setCurrentScreen(5)} />,
    <FinalScreen key="final" onNext={() => setCurrentScreen(6)} />,
    <BirthdayScreen key="birthday" onRestart={() => setCurrentScreen(0)} />
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center relative overflow-x-hidden">

      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 1.02 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="will-change-transform px-5 py-8"
        >
          {screens[currentScreen]}
        </motion.div>
      </AnimatePresence>

    </div>
  );
}