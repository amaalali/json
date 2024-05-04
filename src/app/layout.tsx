import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import "#app/globals.css";
import JsonToolsSVG from "#public/JsonTools.svg";
import { cn } from "#lib/utils.ts";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JSON Tools by isthatllamacoding",
  description: "Tools for working with JSON. Tools to validate and format JSON.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body className={cn(inter.className, "h-full")}>
        <div className="flex flex-col h-full">
          <header
            className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4"
          >
            <div className="container flex max-w-full px-0 ml-16">
              <Link className="mr-6 flex space-x-2" href="/">
                <Image
                  priority
                  src={JsonToolsSVG}
                  alt="Json Tools"
                  width={35}
                  height={35}
                />
                <span className="hidden font-bold my-auto sm:inline-block">JSON Tools</span>
              </Link>

              <nav className="flex items-center gap-4 text-sm lg:gap-6">
                <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/validate" >
                  Validate
                </Link>
              </nav>
            </div>
          </header>

          <div className="flex-auto h-full">
            {children}
          </div>

        </div>
      </body>
    </html>
  );
}
