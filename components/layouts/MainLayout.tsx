import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/components/layouts/MainLayout.module.css";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { FC } from "react";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  );
};
