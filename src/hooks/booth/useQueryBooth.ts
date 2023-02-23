import { useQuery } from 'react-query'
import { supabase } from '../../libs/supabase'
import { Booth } from '../../types/types'

export default function useQueryBooth(boothId: string) {
  const getBooth = async () => {
    const { data, error } = await supabase
      .from('tbl_booths')
      .select('*')
      .eq('id', boothId)
      .single()

    if (error) throw Error(error.message)

    return data
  }

  return useQuery<Booth, Error>({
    queryKey: ['booth'],
    queryFn: getBooth,
    staleTime: Infinity,
  })
}
