import Link from "next/link";
import Layout from "@/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Link href="/users/1" className="grid-content text-center text-5xl">
        Show Users
      </Link>
    </Layout>
  );
}
