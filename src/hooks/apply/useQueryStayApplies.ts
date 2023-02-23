import { useQuery } from 'react-query'
import { supabase } from '../../libs/supabase'
import { Apply } from '../../types/types'

export default function useQueryStayApplies() {
  const getStayApplies = async () => {
    const { data, error } = await supabase
      .from('tbl_applies')
      .select('*')
      .eq('status', 0)
      .order('date', { ascending: true })
      .order('time', { ascending: true })

    if (error) throw Error(error.message)

    return data
  }

  return useQuery<Apply[], Error>({
    queryKey: ['stayApplies'],
    queryFn: getStayApplies,
    staleTime: Infinity,
  })
}
