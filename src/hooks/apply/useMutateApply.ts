import { useMutation } from 'react-query'
import { supabase } from '../../libs/supabase'
import useStore from '../../store'
import { Apply, EditApply } from '../../types/types'

export const useMutateApply = () => {
  const reset = useStore((state) => state.resetEditedApply)
  // Insert
  const createApplyMutation = useMutation(
    async (
      apply: Omit<Apply, 'id' | 'uuid' | 'created_at' | 'updated_at' | 'status'>
    ) => {
      const { data, error } = await supabase.from('tbl_applies').insert(apply)
      if (error) throw Error(error.message)
      return data
    },
    {
      onSuccess: () => {
        console.log('onSuccess')
        reset()
      },
      onError: (err: any) => {
        console.log(err.message)
        reset()
      },
    }
  )

  // Update
  const updatedApplyMutation = useMutation(
    async (apply: EditApply) => {
      // Query
      console.log(apply)
    },
    {
      onSuccess: () => {
        console.log('onSuccess')
        reset()
      },
      onError: (err: any) => {
        console.log('onError')
        console.log(err.message)
        reset()
      },
    }
  )

  return { createApplyMutation, updatedApplyMutation }
}
