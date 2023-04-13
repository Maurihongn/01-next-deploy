import { Inter } from "next/font/google";

import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";
import { DarkLayout } from "@/components/layouts/DarkLayout";
import { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>
    </>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
