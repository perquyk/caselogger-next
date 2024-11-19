export const metadata = {
  title: "Caselogger - Next",
  description: "Caselogs alsof ze voor mezelf zouden zijn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
