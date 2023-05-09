import { useState, useEffect } from "react";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import formatCurrency from "function/price_format";

export default function WebSocketBinance() {
  const [lastprice, setLastprice] = useState("0");

  useEffect(() => {
    const websocket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

    websocket.onopen = () => {
      console.log("WebSocket connection openen");
      //   websocket.send("Hello server!");
    };

    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Received data:", data.p);
      setLastprice(data.p);
    };

    websocket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    websocket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    // return () => {
    //   console.log("Component unmounted, closing WebSocket connection");
    //   websocket.close();
    // };
  }, []);

  return (
    <ComplexStatisticsCard
      color="primary"
      icon="primary"
      title="Bitcoin"
      count={formatCurrency(lastprice)}
      percentage={{
        color: "success",
        amount: "",
        label: "Just updated",
      }}
    />
  );
}
