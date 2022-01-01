import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'

import { pages } from '../../contents'

export declare interface IPageActionsProps {
  index: number
}
export const PageActions: React.FC<IPageActionsProps> = ({ index }: IPageActionsProps) => {
  const router = useRouter()
  const back = useMemo(
    () => pages[index - 1],
    [index],
  )
  const next = useMemo(
    () => pages[index + 1],
    [index],
  )
  const handleRedirect = useCallback(
    (url: string) => async () => {
      await router.push(url)
    },
    [router],
  )
  return (
    <Box>
      <Divider sx={{ mb: 2 }} />
      <Box display="flex" sx={{ pb: 2 }}>
        {back ? (
          <Button
            variant="outlined"
            fullWidth
            onClick={handleRedirect(`/${back.group}${back.url}`)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textTransform: 'none',
              maxWidth: { xs: '45%', sm: '35%' },
            }}
          >
            <Typography variant="body1">{back.title}</Typography>
            <Typography variant="body2">&lt;&lt; Back</Typography>
          </Button>
        ) : null}
        <Box flexGrow={1} sx={{ minWidth: { sm: '30%' } }} />
        {next ? (
          <Button
            variant="outlined"
            fullWidth
            onClick={handleRedirect(`/${next.group}${next.url}`)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textTransform: 'none',
              maxWidth: { xs: '45%', sm: '35%' },
            }}
          >
            <Typography variant="body1">{next.title}</Typography>
            <Typography variant="body2">Next &gt;&gt;</Typography>
          </Button>
        ) : null}
      </Box>
    </Box>
  )
}