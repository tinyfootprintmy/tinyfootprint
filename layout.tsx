
export const metadata = {
  title: "Tiny Footprint",
  description: "Tiny Footprint Store"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
