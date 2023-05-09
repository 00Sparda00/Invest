import WebSocket from "ws";
import { useEffect } from "react";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

export default function WebSocketBinance() {
  useEffect(() => {
    const websocket = new WebSocket("wss://ws-api.binance.com:443/ws-api/v3");

    websocket.onopen = () => {
      console.log("WebSocket connection opene");
      websocket.send("Hello server!");
    };

    websocket.onmessage = (event) => {
      console.log("Received data:", event.data);
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
      icon="person_add"
      title="Followers"
      count="+91"
      percentage={{
        color: "success",
        amount: "",
        label: "Just updated",
      }}
    />
  );
}
