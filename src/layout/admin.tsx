import { AppShell, useMantineTheme } from '@mantine/core'

import Head from 'next/head'
import { FC, useState } from 'react'
import HeaderComponent from '../components/admin/Header'
import NaviComponent from '../components/admin/Nav'

type Props = {
  title: string
  active: string | null
  children: React.ReactNode
}

const AdminLayout: FC<Props> = ({ title, active, children }) => {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <AppShell
        navbar={NaviComponent(opened)}
        header={HeaderComponent(opened, setOpened, theme)}
        styles={{
          main: {
            background:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
      >
        {children}
      </AppShell>
    </>
  )
}

export default AdminLayout
