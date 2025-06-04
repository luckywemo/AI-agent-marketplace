'use client';

import { Inter } from 'next/font/google';
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { Navigation } from '@/components/Navigation/Navigation';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const { chains, publicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  connectors: [
    new MetaMaskConnector({ chains })
  ]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiConfig config={config}>
          <Navigation />
          <main>{children}</main>
        </WagmiConfig>
      </body>
    </html>
  );
}
