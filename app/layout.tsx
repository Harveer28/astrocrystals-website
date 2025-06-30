import { ReactNode } from 'react';
import { CartProvider } from '@/context/CartContext';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
