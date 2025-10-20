import Link from "next/link";

export default function BestDealCategory() {
  return (
    <section>
      <div>
        <p>
          Grab the best deal on <span>Smartphones</span>
        </p>{" "}
        <Link href="/Smartphones">View All &lts;</Link>
      </div>
      <div></div>
    </section>
  );
}
