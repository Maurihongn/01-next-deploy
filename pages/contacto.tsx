import { Inter } from "next/font/google";

import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Contacto() {
  return (
    <MainLayout>
      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>
    </MainLayout>
  );
}
