import { createContext, useContext, useState, useEffect } from "react";

const BotContext = createContext();

export const BotProvider = ({ children }) => {
  const [bots, setBots] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      battery: Math.floor(Math.random() * 100),
      status: ["idle", "busy", "charging", "error"][Math.floor(Math.random() * 4)],
      currentTask: "Task " + (i + 1),
      speed: Math.floor(Math.random() * 10) + 1,
      lastUpdated: new Date().toLocaleTimeString(),
    }))
  );

  // for the updating every 10 sec 
  // TODO: use Throttling from the loadash later after doing the Home dash borasd page
  useEffect(() => {
    const interval = setInterval(() => {
      setBots((prevBots) =>
        prevBots.map((bot) => ({
          ...bot,
          battery: Math.max(bot.battery - Math.floor(Math.random() * 5), 0),
          status: ["idle", "busy", "charging", "error"][Math.floor(Math.random() * 4)],
          lastUpdated: new Date().toLocaleTimeString(),
        }))
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <BotContext.Provider value={{ bots, setBots }}>
      {children}
    </BotContext.Provider>
  );
};

export const useBots = () => useContext(BotContext);