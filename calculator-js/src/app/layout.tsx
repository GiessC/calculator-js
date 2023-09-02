import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <html lang='en'>
            <head>
                <meta charSet='UTF-8' />
                <meta
                    name='title'
                    content='CalculatorJS'
                />
                <meta
                    name='description'
                    content='Calculator created using NextJS and TypeScript'
                />
                <meta
                    name='author'
                    content='Collin Giess'
                />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
};

export default RootLayout;

