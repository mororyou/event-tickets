import { supabase } from '../../libs/supabase'

export const getBooth = async (id: string) => {
  const { data, error } = await supabase
    .from('tbl_booths')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw Error(error.message)

  return data
}
