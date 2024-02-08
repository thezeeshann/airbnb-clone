import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import ToastProvider from "./provider/ToastProvider";
import getCurrentUser from "@/app/actions/getCurrentUser"
import "./globals.css";

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider/>
        <RegisterModal/>
        <LoginModal/>
        <Navbar currentUser={currentUser} />
        {children}
        </body>
    </html>
  );
}
