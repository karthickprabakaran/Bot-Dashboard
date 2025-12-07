import { createContext, useContext, useState, useEffect, useCallback } from "react";

const BotContext = createContext();

export const BotProvider = ({ children }) => {
  const [bots, setBots] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      x: Math.random() * 1000,
      y: Math.random() * 1000,
      name: `Bot-${i + 1}`,
      status: ["idle", "busy", "charging", "error"][Math.floor(Math.random() * 4)],
      battery: Math.floor(Math.random() * 100),
    }))
  );

  const [movementActive, setMovementActive] = useState(false);

  const nudgeBots = useCallback(() => {
    setBots((prevBots) =>
      prevBots.map((bot) => ({
        ...bot,
        x: Math.max(0, Math.min(1000, bot.x + (Math.random() * 20 - 10))),
        y: Math.max(0, Math.min(1000, bot.y + (Math.random() * 20 - 10))),
      }))
    );
  }, []);

  useEffect(() => {
    if (!movementActive) return;

    const interval = setInterval(() => {
      nudgeBots();
    }, 1000);

    return () => clearInterval(interval);
  }, [movementActive, nudgeBots]);

  return (
    <BotContext.Provider value={{ bots, movementActive, setMovementActive }}>
      {children}
    </BotContext.Provider>
  );
};

export const useBots = () => useContext(BotContext);