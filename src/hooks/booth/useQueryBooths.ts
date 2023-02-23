import { useQuery } from 'react-query'
import { supabase } from '../../libs/supabase'
import { Booth } from '../../types/types'

export default function useQueryBooths() {
  const getBooths = async () => {
    const { data, error } = await supabase
      .from('tbl_booths')
      .select('*')
      .order('location', { ascending: true })

    if (error) throw Error(error.message)

    return data
  }

  return useQuery<Booth[], Error>({
    queryKey: ['booths'],
    queryFn: getBooths,
    staleTime: Infinity,
  })
}
