import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// Importing custom CSS instead of globals.css
import "./styles.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marcio Cahino - Cursos de Estética Profissional",
  description:
    "Transforme sua paixão em profissão com nossos cursos de estética. Mais de 5.000 alunos formados.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
