import ChatWidget from "./ChatWidget";
import Header from "./Header";
import Footer from "./Footer";

export default function PageShell({ children, className = "" }) {
  return (
    <main className={`home-page ${className}`}>
      <Header />
      {children}
      <ChatWidget />
      <Footer />
    </main>
  );
}
