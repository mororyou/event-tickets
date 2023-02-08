import Head from 'next/head'
import { FC } from 'react'

type Props = {
  title: string
  children: React.ReactNode
}

const ClientLayout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex flex-col">{children}</main>
    </>
  )
}

export default ClientLayout
