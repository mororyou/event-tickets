import { Button, ScrollArea, Table } from '@mantine/core'
import { IconEdit, IconPennant } from '@tabler/icons'
import dayjs from 'dayjs'
import Link from 'next/link'
import { FC } from 'react'
import Title from '../../../components/admin/Title'
import { BOOTH_STATUS } from '../../../constant/const'
import useQueryBooths from '../../../hooks/booth/useQueryBooths'
import SettingLayout from '../../../layout/setting'
import { Booth } from '../../../types/types'
const Booths = () => {
  const { data: booths } = useQueryBooths()

  return (
    <SettingLayout title="Booth 一覧" active={null}>
      <Title
        icon={<IconPennant size={24} className="mr-2 text-gray-700" />}
        title="ブース一覧"
        btn={null}
      />
      <ScrollArea>
        <Table sx={{ minWidth: 800 }} verticalSpacing="xs">
          <TableHead />
          <tbody>
            {booths &&
              booths.map((booth) => <TableRow key={booth.id} booth={booth} />)}
          </tbody>
        </Table>
      </ScrollArea>
    </SettingLayout>
  )
}

export default Booths

const TableHead = () => (
  <thead>
    <tr>
      <th>ブース名</th>
      <th className="!text-center">ブース番号</th>
      <th className="!text-center">ステータス</th>
      <th className="!text-center">申し込み方法</th>
      <th>登録日</th>
      <th></th>
    </tr>
  </thead>
)

type RowProps = {
  booth: Booth
}
const TableRow: FC<RowProps> = ({ booth }) => {
  const date = dayjs(booth.created_at)
  return (
    <tr>
      <td>{booth.name}</td>
      <td className="text-center">{booth.location}</td>
      <td className="text-center">{BOOTH_STATUS[booth.status]}</td>
      <td className="text-center">{booth.questionary ? 'フォーム' : ''}</td>
      <td>{date.format('YYYY/MM/DD HH:mm')}</td>
      <td>
        <Link href={`/settings/booth/${booth.id}`}>
          <Button
            radius={'xs'}
            size="sm"
            leftIcon={<IconEdit size={18} className="mr-1" />}
          >
            編集
          </Button>
        </Link>
      </td>
    </tr>
  )
}
