export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto min-h-[100vh] max-w-container p-10 -sm:p-2">
      {children}
    </main>
  );
}
