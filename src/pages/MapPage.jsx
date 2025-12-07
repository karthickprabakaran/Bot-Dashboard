import { useState, useRef, useEffect } from "react";
import { useBots } from "../context/BotContext";

const MapPage = () => {
  const { bots, movementActive, setMovementActive } = useBots();
  const [uploadedSvg, setUploadedSvg] = useState(null);
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setContainerSize({ w: rect.width, h: rect.height });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [uploadedSvg]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedSvg(url);
      setMovementActive(true); 
    }
  };

  const mapToContainer = (x, y) => ({
    left: (x / 1000) * containerSize.w,
    top: (y / 1000) * containerSize.h,
  });

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start bg-gray-100 p-4">
      <div className="flex flex-col items-center gap-3 mb-4">
        <label className="text-lg font-semibold">Upload Warehouse Layout (SVG)</label>
        <input
          type="file"
          accept=".svg"
          onChange={handleUpload}
          className="cursor-pointer border border-gray-300 rounded p-2"
        />
      </div>

      <div
        ref={containerRef}
        className="relative w-full h-full bg-gray-200 rounded-lg overflow-hidden shadow-lg"
      >
        {uploadedSvg && (
          <img
            src={uploadedSvg}
            alt="Warehouse Map"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {movementActive &&
          bots.map((bot) => {
            const pos = mapToContainer(bot.x, bot.y);
            return (
              <div
                key={bot.id}
                className={`absolute w-5 h-5 rounded-full border-2 shadow-xl ${
                  bot.status === "error"
                    ? "bg-red-600 border-red-800"
                    : bot.status === "charging"
                    ? "bg-green-500 border-green-700"
                    : bot.status === "busy"
                    ? "bg-yellow-500 border-yellow-700"
                    : "bg-blue-400 border-blue-600"
                }`}
                style={{
                  left: pos.left,
                  top: pos.top,
                  transform: "translate(-50%, -50%)",
                  transition: "0.5s",
                }}
                title={`${bot.name} — ${bot.status} — ${bot.battery}%`}
              />
            );
          })}
      </div>

      <p className="text-xs text-gray-500 mt-2">
        Note: Bot movement is simulated and random. Map fills the full screen.
      </p>
    </div>
  );
};

export default MapPage;