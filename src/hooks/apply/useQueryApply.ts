import { useQuery } from 'react-query'
import { supabase } from '../../libs/supabase'
import { Apply } from '../../types/types'

export default function useQueryApply(applyId: string) {
  const getApply = async () => {
    const { data, error } = await supabase
      .from('tbl_applies')
      .select('*')
      .eq('id', applyId)
      .single()

    if (error) throw Error(error.message)

    return data
  }

  return useQuery<Apply, Error>({
    queryKey: ['apply'],
    queryFn: getApply,
    staleTime: Infinity,
  })
}
