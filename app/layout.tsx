import './globals.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Car Hub',
  description: 'Откройте для себя лучший автомобиль в мире',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="relative">
			<Navbar />
			{children}
			<Footer />
		</body>
    </html>
  )
}
