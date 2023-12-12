import { Inter } from "next/font/google";
import Header from "./header";
import Footer from "./footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Tuna Kirkoc",
    template: "%s · Tuna Kirkoc",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="bg-white text-black dark:bg-neutral-900 dark:text-white flex flex-col min-h-screen">
        <Header />
        <main className="mx-auto px-2 mb-auto max-w-4xl">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
