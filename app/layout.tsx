import Head from "./head";
import Header from "./Header";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head />
      <body
        style={{
          margin: "0",
          padding: "0",
        }}>
        <main
          style={{
            height: "100vh",
            display: "flex",
          }}
          className="bg-[#f9e2b8]">
          <div
            style={{
              fontFamily: "Alaska, sans-serif",
              color: "#f9e2b8",
              width: "30%",
              height: "100%",
              backgroundColor: "#c29adc",
              display: "flex",
              overflow: "hidden",
              top: "0",
              left: "0",
              bottom: "0",
            }}>
            <h1
              style={{
                writingMode: "vertical-rl",
                fontWeight: "900",
                // mixBlendMode: "difference",
                color: "#ffffff",
                fontSize: "calc(3rem + 3vw)",
                margin: "3rem auto",
                justifyContent: "center",
              }}>
              Software Engineer
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              width: "70%",
              overflow: "scroll",
            }}
            className="scrollbar scrollbar-thumb-[#c29adc]">
            <Header />
            <div
              style={{
                marginTop: "3rem",
              }}>
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
