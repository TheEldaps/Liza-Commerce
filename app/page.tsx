import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Homepage/Nav";
import CategoryList from "./components/Homepage/CategoryList";

export default function Home() {
  return (
    <div>
      <Nav />
      <CategoryList />
      {/* <Link href="/Login">Home page</Link> */}
    </div>
  );
}
