import { useMutateApply } from '../../hooks/apply/useMutateApply'
import ClientLayout from '../../layout/client'
import useStore from '../../store'

const Apply = () => {
  const editedApply = useStore((state) => state.editedApply)
  const update = useStore((state) => state.updatedApply)
  const reset = useStore((state) => state.resetEditedApply)
  const { createApplyMutation, updatedApplyMutation } = useMutateApply()

  return (
    <ClientLayout title="申し込みフォーム">
      <header className="apply-header flex h-14 items-center justify-start px-4 shadow-sm">
        <h1 className="text-lg font-bold">予約フォーム</h1>
      </header>
    </ClientLayout>
  )
}

export default Apply
