import { useState, useEffect } from "react";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

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
      const price = parseFloat(data.p)
        .toFixed(2)
        .toLocaleString("en-US", { style: "currency", currency: "USD" });
      setLastprice(price);
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
      count={lastprice}
      percentage={{
        color: "success",
        amount: "",
        label: "Just updated",
      }}
    />
  );
}
