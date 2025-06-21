import Footer from "@/components/footer";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import "./globals.css";
// import { Toaster } from "sonner";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AutoMind",
  description: "Find your dream car",
  // icon: "/favicon.png",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-white.png" sizes="any" />
        </head>
        <body>
          {/* <body className={`${inter.className}`}> */}
          <Header />
          <main className="min-h-screen">{children}</main>
          {/* <Toaster richColors /> */}
          <Toaster richColors />

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
