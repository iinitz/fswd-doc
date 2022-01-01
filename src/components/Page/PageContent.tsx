import { Scrollspy } from '@makotot/ghostui'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { Fragment, useMemo } from 'react'

import { usePage } from '../../contexts/PageContext'
import { Link } from '../@mui/Link'

export declare interface IPageContentProps {
  children?: React.ReactNode
}
export const PageContent: React.FC<IPageContentProps> = ({ children }: IPageContentProps) => {
  const { sections } = usePage()
  const sectionRefs = useMemo(
    () => sections.map(({ ref }) => ref),
    [sections],
  )
  return (
    <Fragment>
      <Box id="content" display="flex" flexGrow={1} sx={{ overflowY: 'auto' }}>
        <Container
          maxWidth="md"
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          {children}
        </Container>
      </Box>
      {sections.length > 0 ? (
        <Scrollspy sectionRefs={sectionRefs} rootSelector="#content">
          {({ currentElementIndexInViewport }) => (
            <Box sx={{ overflowY: 'auto' }}>
              <Box
                display={{ xs: 'none', sm: 'flex' }}
                flexDirection="column"
                sx={{ width: '200px', m: 4 }}
              >
                <Typography variant="body1" color="textSecondary">Contents</Typography>
                <Divider sx={{ my: 1 }} />
                {sections.map(({ id, title }, index) => (
                  <Link key={id} href={`#${id}`} color={currentElementIndexInViewport === index ? 'primary' : 'inherit'} underline="none" replace>{title}</Link>
                ))}
              </Box>
            </Box>
          )}
        </Scrollspy>
      ) : null}
    </Fragment>
  )
}