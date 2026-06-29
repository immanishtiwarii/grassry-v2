import './globals.css';

export const metadata = {
  title: 'Grassry | Premium Landscape Design India',
  description: 'Transform your outdoor space with Grassry — premium landscape design, garden development and outdoor execution across India.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background:'#FAF7F2', color:'#1C1C18' }} className="antialiased">
        {children}
      </body>
    </html>
  );
}
