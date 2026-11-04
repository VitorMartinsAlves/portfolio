import { ImageResponse } from "next/og";

export const alt = "Vitor Martins — Desenvolvedor Full Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "76px",
          background: "#f3f1eb",
          color: "#20211f",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#6c6d67" }}>
          <span>PORTFÓLIO PROFISSIONAL</span>
          <span>VM.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 82, fontWeight: 700, letterSpacing: -5 }}>Vitor Martins</div>
          <div style={{ marginTop: 18, color: "#b64d32", fontSize: 40 }}>Desenvolvedor Full Stack</div>
          <div style={{ marginTop: 20, fontSize: 24, color: "#6c6d67" }}>
            Aplicações web · APIs · Integrações
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, color: "#6c6d67" }}>
          <span>React · Node.js · MySQL</span>
          <span>github.com/VitorMartinsAlves</span>
        </div>
      </div>
    ),
    size,
  );
}
