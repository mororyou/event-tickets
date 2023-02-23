import { useEffect } from 'react'
import { useQueryClient } from 'react-query'

export const useSubscribeApplies = () => {
  const queryClient = useQueryClient()

  useEffect(() => {
    return () => {}
  }, [queryClient])
}
