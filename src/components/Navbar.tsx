import { Link } from "wouter";

export const Navbar = ({
  brand,
  links,
}: {
  brand: string;
  links: { title: string; to: string }[];
}) => (
  <nav className="flex items-center h-16 relative shadow-sm">
    <Link href="/">
      <h1 className="font-bold text-3xl mr-8 pl-4">{brand}</h1>
    </Link>

    <div className="md:flex hidden justify-start">
      {links.map((l) => (
        <Link key={l.title} className="mr-6 text-xl" href={l.to}>
          {l.title}
        </Link>
      ))}
    </div>
  </nav>
);
