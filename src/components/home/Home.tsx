import Link from "next/link";
import Header from "./Header";
import Hero from "./Hero";

function HomeComponent() {
  return (
    <div className="min-h-screen">
      <Header />

      <Hero />
      <footer className="bg-[#1BC464] text-white">
        <Link
          href={`https://www.linkedin.com/in/ahmed-hamada-a83309239/`}
          target="_blank"
          className="container mx-auto px-4 text-center"
        >
          <p>@snow6692</p>
        </Link>
      </footer>
    </div>
  );
}

export default HomeComponent;
