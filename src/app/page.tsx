import TailwindNavbar from "@/components/TailwindNavbar";

export default function Home() {
  return (
    <div>
      <TailwindNavbar />
      <main className="main-content">This is the <strong className="gradient-text">Tailwind</strong> Navbar version.</main>
    </div>
  );
}