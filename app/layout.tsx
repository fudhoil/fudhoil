import Head from "./head";
import Header from "./Header";

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
            backgroundColor: "#f9e2b8",
            height: "100vh",
            display: "flex",
          }}>
          <div
            style={{
              fontFamily: "Alaska, sans-serif",
              color: "#f9e2b8",
              height: "100vh",
              width: "30%",
              backgroundColor: "#222222",
              display: "flex",
            }}>
            <h1
              style={{
                writingMode: "vertical-rl",
                margin: "auto",
                fontWeight: "900",
                fontSize: "10vw",
              }}>
              <span
                style={{
                  mixBlendMode: "difference",
                }}>
                Software Engineer
              </span>
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
              width: "70%",
            }}>
            <Header />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
