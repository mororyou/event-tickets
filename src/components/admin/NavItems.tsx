import {
  IconCalendarEvent,
  IconDashboard,
  IconFlag,
  IconListNumbers,
  IconSignature,
  IconUser,
} from '@tabler/icons'
import { NaviItem } from '../../types/types'

export const NavItems: NaviItem[] = [
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
    pageId: 'apply',
    title: 'フォーム設定',
    color: 'blue',
    icon: <IconSignature size={16} />,
  },
  {
    pageId: 'booths',
    title: 'ブース設定',
    color: 'blue',
    icon: <IconFlag size={16} />,
  },
]
