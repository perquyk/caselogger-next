import './globals.css'
import Header from '@/components/header/Header'

export const metadata = {
  title: "Caselogger - Next",
  description: "Caselogs alsof ze voor mezelf zouden zijn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary">
      <Header/>
        {children}
      </body>
    </html>
  );
}
