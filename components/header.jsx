import { checkUser } from "@/lib/checkUser";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ArrowLeft, CarFront, Heart, Layout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = async ({ isAdminPage = false }) => {
  const user = await checkUser();
  const isAdmin = user?.role === "ADMIN";

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href={isAdminPage ? "/admin" : "/"}
          className="flex items-center group"
        >
          {/* <div className="relative">
            <h1 className="text-3xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-gray-600 transition-all duration-300 group-hover:from-gray-600 group-hover:via-gray-800 group-hover:to-black drop-shadow-sm">
              <span className="font-mono tracking-tighter">Auto</span>
              <span className="font-serif italic tracking-normal">Mind</span>
            </h1>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-black via-gray-700 to-gray-500 transition-all duration-500 group-hover:w-full shadow-lg"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-400/10 via-gray-500/10 to-gray-600/10 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-20 -z-10"></div>
          </div> */}
          <Image
            src="/logo-black.png"
            alt="Logo"
            width={150}
            height={70}
            className="mr-2"
          />
          {isAdminPage && (
            <span className="ml-3 px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-gray-800 to-black rounded-full shadow-md border border-gray-600 backdrop-blur-sm">
              admin
            </span>
          )}
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {isAdminPage ? (
            <>
              <Link href="/">
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft size={18} />
                  <span>Back to App</span>
                </Button>
              </Link>
            </>
          ) : (
            <SignedIn>
              {!isAdmin && (
                <Link
                  href="/reservations"
                  className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
                >
                  <Button variant="outline">
                    <CarFront size={18} />
                    <span className="hidden md:inline">My Reservations</span>
                  </Button>
                </Link>
              )}
              <a href="/saved-cars">
                <Button className="flex items-center gap-2">
                  <Heart size={18} />
                  <span className="hidden md:inline">Saved Cars</span>
                </Button>
              </a>
              {isAdmin && (
                <Link href="/admin">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Layout size={18} />
                    <span className="hidden md:inline">Admin Portal</span>
                  </Button>
                </Link>
              )}
            </SignedIn>
          )}

          <SignedOut>
            {!isAdminPage && (
              <SignInButton forceRedirectUrl="/">
                <Button variant="outline">Login</Button>
              </SignInButton>
            )}
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
