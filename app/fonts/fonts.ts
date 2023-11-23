import localFont from 'next/font/local'

export const metropolis = localFont({
  variable: '--font-metropolis',
  src: [
    {
      path: './Metropolis-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Metropolis-Medium.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './Metropolis-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
})