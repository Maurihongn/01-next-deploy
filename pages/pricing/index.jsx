import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function pricing() {
  return (
    <MainLayout>
      <h1 className={"title"}>Estas en pricing</h1>
      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>
    </MainLayout>
  );
}
