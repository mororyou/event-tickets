import { SupabaseRealtimePayload } from '@supabase/supabase-js'
import { useEffect } from 'react'
import { useQueryClient } from 'react-query'
import { supabase } from '../../libs/supabase'
import { Booth } from '../../types/types'

export const useSubscribeBooths = () => {
  const queryClient = useQueryClient()

  useEffect(() => {
    const subsc = supabase
      .from('tbl_booths')
      .on('INSERT', (payload: SupabaseRealtimePayload<Booth>) => {
        let previousBooths = queryClient.getQueryData<Booth[]>(['booths'])
        if (!previousBooths) {
          previousBooths = []
        }
        queryClient.setQueryData(
          ['booths'],
          [
            ...previousBooths,
            {
              id: payload.new.id,
              name: payload.new.name,
              location: payload.new.location,
              questionary: payload.new.questionary,
              status: payload.new.status,
              created_at: payload.new.created_at,
              updated_at: payload.new.updated_at,
            },
          ]
        )
      })
      .on('UPDATE', (payload: SupabaseRealtimePayload<Booth>) => {
        let previousBooths = queryClient.getQueryData<Booth[]>(['booths'])
        if (!previousBooths) {
          previousBooths = []
        }
        queryClient.setQueryData(
          ['booths'],
          previousBooths.map((booth) => {
            booth.id === payload.new.id
              ? {
                  id: payload.new.id,
                  name: payload.new.name,
                  location: payload.new.location,
                  questionary: payload.new.questionary,
                  status: payload.new.status,
                  updated_at: payload.new.updated_at,
                }
              : booth
          })
        )
      })
      .on('DELETE', (payload: SupabaseRealtimePayload<Booth>) => {
        let previousBooths = queryClient.getQueryData<Booth[]>(['booths'])
        if (!previousBooths) {
          previousBooths = []
        }
        queryClient.setQueryData(
          ['booths'],
          previousBooths.filter((booth) => booth.id !== payload.old.id)
        )
      })
      .subscribe()

    const removeSubscription = async () => {
      await supabase.removeSubscription(subsc)
    }

    return () => {
      removeSubscription()
    }
  }, [queryClient])
}
