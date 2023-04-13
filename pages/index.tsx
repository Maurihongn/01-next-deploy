import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";
import { DarkLayout } from "@/components/layouts/DarkLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout>
      <DarkLayout>
        <h1 className={"title"}>
          Ir a <Link href="/about">About</Link>
          Ir a <Link href="/contacto">Contacto</Link>
        </h1>
      </DarkLayout>
    </MainLayout>
  );
}
