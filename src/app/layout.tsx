import "./globals.css";

export const metadata = {
  title: "Kantacky SSO",
  description: "Kantacky SSO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
