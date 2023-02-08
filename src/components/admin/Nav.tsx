import { Group, Navbar, Text, ThemeIcon, UnstyledButton } from '@mantine/core'
import {
  IconCalendarEvent,
  IconDashboard,
  IconFlag,
  IconListNumbers,
  IconUser,
} from '@tabler/icons'
import Link from 'next/link'
import { NaviItem } from '../../types/types'

const NaviComponent = (opened: boolean) => {
  const items: NaviItem[] = [
    {
      pageId: 'dashboard',
      title: 'ダッシュボード',
      color: 'blue',
      icon: <IconDashboard size={16} />,
    },
    {
      pageId: 'receptions',
      title: '受付一覧',
      color: 'blue',
      icon: <IconListNumbers size={16} />,
    },
    {
      pageId: 'schedules',
      title: 'スケジュール',
      color: 'blue',
      icon: <IconCalendarEvent size={16} />,
    },
    {
      pageId: 'users',
      title: 'ユーザー設定',
      color: 'blue',
      icon: <IconUser size={16} />,
    },
    {
      pageId: 'booths',
      title: 'ブース設定',
      color: 'blue',
      icon: <IconFlag size={16} />,
    },
  ]
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 250, lg: 300 }}
    >
      {items &&
        items.map((item: NaviItem) => {
          return (
            <Link href={`/admin/${item.pageId}`} key={item.pageId}>
              <UnstyledButton
                sx={(theme) => ({
                  display: 'block',
                  width: '100%',
                  padding: theme.spacing.xs,
                  borderRadius: theme.radius.sm,
                  color:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[0]
                      : theme.black,

                  '&:hover': {
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[6]
                        : theme.colors.gray[0],
                  },
                })}
              >
                <Group>
                  <ThemeIcon color={item.color} variant="light">
                    {item.icon}
                  </ThemeIcon>
                  <Text size={'sm'}>{item.title}</Text>
                </Group>
              </UnstyledButton>
            </Link>
          )
        })}
    </Navbar>
  )
}

export default NaviComponent
