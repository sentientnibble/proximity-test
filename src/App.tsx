import React, { useState } from "react";

import useWebsocket from "./hooks/useWebsocket";
import HeroSection from "./components/HeroSection";
import StockTable from "./components/StockTable";

function App() {
  const [isPaused, setPaused] = useState(false);
  const data = useWebsocket("ws://stocks.mnet.website/", isPaused);
  return (
    <div className="relative bg-gray-50">
      <HeroSection setPaused={setPaused} isPaused={isPaused} />
      <StockTable data={data} />
    </div>
  );
}

export default App;
