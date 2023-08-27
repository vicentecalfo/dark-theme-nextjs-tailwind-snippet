import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { ThemeProvider } from "./theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dark mode com Next.js e TailwindCSS",
  description:
    "Demonstração simples de como implementar um seletor de temas (modo escuro e modo claro) com Next.js e Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-50 dark:bg-[#0d1117] flex w-screen h-screen items-center justify-center`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="text-center">
            <ThemeSwitcher />
            <main className="mt-4">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
