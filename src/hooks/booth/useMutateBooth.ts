import { useMutation } from 'react-query'
import { supabase } from '../../libs/supabase'
import useStore from '../../store'
import { Booth, EditBooth } from '../../types/types'

export const useMutateBooth = () => {
  const reset = useStore((state) => state.resetEditedBooth)

  // Insert
  const createBoothMutation = useMutation(
    async (booth: Omit<Booth, 'id' | 'created_at' | 'updated_at'>) => {
      const { data, error } = await supabase.from('tbl_booths').insert(booth)
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
  const updatedBoothMutation = useMutation(
    async (booth: EditBooth) => {
      // Query
      console.log(booth)
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

  return { createBoothMutation, updatedBoothMutation }
}
