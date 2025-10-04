import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-6">
        <p className="flex items-center gap-3 text-sm md:text-md text-gray-600 max-w-xl">
          Copyright 2023 ©Kifoxive
        </p>
      </footer>
    </div>
  );
}
