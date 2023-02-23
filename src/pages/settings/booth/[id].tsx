import { GetServerSideProps } from 'next'
import { FC } from 'react'
import { getBooth } from '../../../hooks/fetch/booth'
import SettingLayout from '../../../layout/setting'
import { Booth } from '../../../types/types'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await getBooth(ctx.params?.id as string)
  return {
    props: {
      id: ctx.params?.id,
      booth: res,
    },
  }
}

type Props = {
  id: string
  booth: Booth
}

const Booth: FC<Props> = ({ id, booth }) => {
  return (
    <SettingLayout title="Booth設定" active={null}>
      <>
        <p>{booth.id}</p>
        <p>{booth.name}</p>
        <p>{booth.location}</p>
        <p>{booth.questionary}</p>
        <p>{booth.status}</p>
        <p>{booth.created_at}</p>
        <p>{booth.updated_at}</p>
      </>
    </SettingLayout>
  )
}

export default Booth
