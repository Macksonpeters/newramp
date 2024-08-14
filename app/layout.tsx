import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/navigation";
import { Providers } from "../redux/provider";

const inter = Inter({ subsets: ["latin"] });

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Newspaut",
  description: "Excellence at it's peak",
};

export const viewport: Viewport = {
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Providers>
          <main className="max-w-[1920px] flex flex-col mx-auto items-center justify-center overflow-x-hidden">
            <div>
              <Navigation />
            </div>
            <div className="">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
