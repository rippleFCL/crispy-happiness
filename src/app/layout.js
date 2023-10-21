import './globals.css'

export const metadata = {
  title: 'Ripple',
  description: 'My name is Ripple',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
