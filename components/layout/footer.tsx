import Link from "next/link";

export function Footer() {
  const links = [
    { label: "About", href: "#" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#" },
    { label: "Privacy", href: "#" },
  ];

  return (
    <footer className="border-t border-black/10 bg-black/[0.01] py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <nav className="flex flex-wrap justify-center gap-8">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-normal text-black/60 transition-all hover:text-black"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-black/40">
            © 2026 Brand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
