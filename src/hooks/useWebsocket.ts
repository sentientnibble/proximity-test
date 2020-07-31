import { useRef, useEffect, useState } from "react";
import unionby from "lodash.unionby";
import {
  UpdatedStockTuple,
  StockStatus,
  StockTuple,
} from "../interface/socket-data.interface";

const useWebsocket = (url: string, isPaused: boolean) => {
  const [data, setData] = useState<UpdatedStockTuple[]>([]);
  const ws = useRef<WebSocket | null>(null);
  const stockMap = useRef<{ [key: string]: number }>({});
  console.log(stockMap);

  useEffect(() => {
    ws.current = new WebSocket(url);
    ws.current.onopen = () => console.log("ws opened");
    ws.current.onclose = () => console.log("ws closed");

    return () => {
      ws.current!.close();
    };
  }, [url]);

  useEffect(() => {
    if (!ws.current) return;
    ws.current.onmessage = (e: MessageEvent) => {
      if (isPaused) return;
      const message = JSON.parse(e.data) as StockTuple[];
      const updatedMessages = message.map((tuple: StockTuple) => {
        const [stockName, stockPrice] = tuple;
        const previousPrice = stockMap.current[stockName];

        stockMap.current[stockName] = stockPrice;
        const updatedStock: UpdatedStockTuple = [
          stockName,
          stockPrice,
          new Date(),
          StockStatus.NEUTRAL,
        ];
        if (previousPrice) {
          updatedStock[3] =
            previousPrice >= stockPrice ? StockStatus.DOWN : StockStatus.UP;
        }

        return updatedStock;
      });

      setData((data): UpdatedStockTuple[] => {
        return unionby(updatedMessages, data, (tuple) => tuple[0]);
      });
    };
  }, [isPaused]);

  return data;
};

export default useWebsocket;
