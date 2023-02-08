import { FC, ReactNode } from 'react'

type Props = {
  message: string
  iconColor: string
  icon: ReactNode
  count: number
}
const PopularCard: FC<Props> = ({ message, icon, iconColor, count }) => (
  <div className="flex items-start rounded-xl bg-white px-4 py-6 shadow-lg">
    <div
      className={`flex h-12 w-12 items-center justify-center rounded ${iconColor}`}
    >
      {icon}
    </div>

    <div className="ml-4">
      <h2 className="flex flex-col">
        <p className="text-sm">{message}</p>
        <p className="text-lg font-semibold">{count} 件</p>
      </h2>
    </div>
  </div>
)

export default PopularCard
