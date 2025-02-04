import { fetcher } from '@/utils/helpers'
import { Invitation } from 'db'
import useSWR from 'swr'
import { env } from 'utils'

export const useInvitations = ({
  typebotId,
  onError,
}: {
  typebotId?: string
  onError: (error: Error) => void
}) => {
  const { data, error, mutate } = useSWR<{ invitations: Invitation[] }, Error>(
    typebotId ? `/api/typebots/${typebotId}/invitations` : null,
    fetcher,
    {
      dedupingInterval: env('E2E_TEST') === 'true' ? 0 : undefined,
    }
  )
  if (error) onError(error)
  return {
    invitations: data?.invitations,
    isLoading: !error && !data,
    mutate,
  }
}
