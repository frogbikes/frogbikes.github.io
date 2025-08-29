import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Titillium_Web } from 'next/font/google';
import type { ReactNode } from 'react';

const titilliumWeb = Titillium_Web({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '900'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={titilliumWeb.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          theme={{
            attribute: 'class',
            defaultTheme: 'system',
            enableSystem: true,
            themes: ['light', 'dark'],
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
