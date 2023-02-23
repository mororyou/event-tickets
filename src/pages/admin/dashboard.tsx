import { ScrollArea, Table } from '@mantine/core'
import { IconListDetails, IconMessageCircle } from '@tabler/icons'
import { FC } from 'react'
import BoothCard from '../../components/admin/BoothCard'
import PopularCard from '../../components/admin/PopularCard'
import Title from '../../components/admin/Title'
import useQueryStayApplies from '../../hooks/apply/useQueryStayApplies'
import AdminLayout from '../../layout/admin'
import { Apply } from '../../types/types'

const DashBoard = () => {
  const { data: applies } = useQueryStayApplies()
  return (
    <AdminLayout title="Dashboard" active={'dashboard'}>
      <div className="flex flex-col gap-y-4">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
          <PopularCard
            message="現在待機者数"
            count={3}
            icon={<IconMessageCircle size="24" className="text-blue-400" />}
            iconColor="border-blue-100 bg-blue-50"
          />

          <PopularCard
            message="本日申込者数"
            count={10}
            icon={<IconMessageCircle size="24" className="text-orange-400" />}
            iconColor="border-orange-100 bg-orange-50"
          />

          <PopularCard
            message="全体申込者数"
            count={10}
            icon={<IconMessageCircle size="24" className="text-red-400" />}
            iconColor="borbder-red-100 bg-red-50"
          />

          <PopularCard
            message="キャンセル者数"
            count={20}
            icon={<IconMessageCircle size="24" className="text-indigo-400" />}
            iconColor="border-indigo-100 bg-indigo-50"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <BoothCard />
          <BoothCard />
        </div>

        <Title
          title="待機者一覧"
          btn={null}
          icon={<IconListDetails size={24} className="mr-2 text-gray-700" />}
        />
        <ScrollArea className="mb-8">
          <Table sx={{ minWidth: 800 }} verticalSpacing="xs">
            <Thead />
            <tbody>
              {applies &&
                applies.map((apply) => {
                  return <TableRow key={apply.id} apply={apply} />
                })}
            </tbody>
          </Table>
        </ScrollArea>
      </div>
    </AdminLayout>
  )
}

export default DashBoard

const Thead = () => (
  <thead>
    <tr>
      <th>申込時間</th>
      <th>名前</th>
      <th>プロフィール</th>
      <th>相談したいこと</th>
      <th></th>
    </tr>
  </thead>
)

type RowProps = {
  apply: Apply
}

const TableRow: FC<RowProps> = ({ apply }) => {
  const categories = Object.values(apply.contents)
  return (
    <tr>
      <td>{apply.time}</td>
      <td>{apply.name}</td>
      <td>{apply.url}</td>
      <td>
        {categories.map((category, index) => (
          <span key={index}>category</span>
        ))}
      </td>
      <td></td>
    </tr>
  )
}
