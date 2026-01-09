import AIConciergeWrapper from "@/components/AIConciergeWrapper";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata = {
  title: "AutoMind",
  description: "Find your dream car",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-white.png" sizes="any" />
        </head>
        <body>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <Footer />
          <AIConciergeWrapper />
        </body>
      </html>
    </ClerkProvider>
  );
}
