import React, { useRef, useState } from "react";

const QRScanner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [result, setResult] = useState<string>("");

  // Activer la caméra
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Erreur caméra :", err);
    }
  };

  // Prendre une photo et envoyer au backend
  const captureAndSend = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (!context) return;

    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL("image/png");

    try {
      const res = await fetch("http://localhost:5000/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: imageData }),
      });

      const data = await res.json();
      setResult(JSON.stringify(data));
    } catch (err) {
      console.error("Erreur API :", err);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Scanner un Ticket</h2>
      <video ref={videoRef} autoPlay width={300} height={200}></video>
      <br />
      <button onClick={startCamera}>Activer Caméra</button>
      <button onClick={captureAndSend}> Capturer & Envoyer</button>
      <canvas
        ref={canvasRef}
        width={300}
        height={200}
        style={{ display: "none" }}
      ></canvas>

      {result && <p>Résultat : {result}</p>}
    </div>
  );
};

export default QRScanner;
