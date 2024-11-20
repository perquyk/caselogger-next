import './globals.css'
import Header from '@/components/header/Header'

export const metadata = {
  title: "Caselogger - Next",
  description: "Caselogs alsof ze voor mezelf zouden zijn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <body>
          <Header />

          <div className="container max-w-screen-lg mx-auto mt-3 bg-indigo-500 rounded-lg">
            {children}
          </div>
      </body>
    </html>
  );
}
