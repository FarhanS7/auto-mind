import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import "./globals.css";
// import { Toaster } from "sonner";

// const inter = Inter({ subsets: ["latin"] });

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
          {/* <body className={`${inter.className}`}> */}
          <Header />
          <main className="min-h-screen">{children}</main>
          {/* <Toaster richColors /> */}
          <Toaster richColors />

          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with Farhan</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
