/* eslint-disable react/no-array-index-key */
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import Zoom from '@mui/material/Zoom'
import { Theme } from '@mui/material/styles'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import darkTheme from 'prism-react-renderer/themes/vsDark'
import lightTheme from 'prism-react-renderer/themes/vsLight'
import {
  Fragment, useCallback, useMemo, useState,
} from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { useTheme } from '../../contexts/ThemeContext'
import { ThemeMode } from '../../types'

import {
  Line, LineContent, LineNo, Pre,
} from './Line'

type SupportedLanguages = Language | 'none'
export interface ICodeBlockProps {
  title?: string
  language: SupportedLanguages
  code: string
}
export const CodeBlock: React.FC<ICodeBlockProps> = ({ title, language, code }: ICodeBlockProps) => {
  const [copyLabel, setCopyLabel] = useState<string>('Copy code')
  const { currentTheme } = useTheme()
  const handleCopy = useCallback(
    () => {
      setCopyLabel('Copied !')
      setTimeout(
        () => {
          setCopyLabel('Copy code')
        },
        1000,
      )
    },
    [],
  )
  const highlightTheme = useMemo(
    () => (currentTheme === ThemeMode.Dark ? darkTheme : lightTheme),
    [currentTheme],
  )
  return (
    <Highlight {...defaultProps} theme={highlightTheme} language={language as Language} code={code.trim()}>
      {({
        className, style, tokens, getLineProps, getTokenProps,
      }) => (
        <Card variant="outlined" sx={{ my: 2 }}>
          {title ? (
            <Fragment>
              <CardHeader title={title} titleTypographyProps={{ variant: 'subtitle1' }} sx={{ py: 1 }} />
              <Divider />
            </Fragment>
          ) : null}
          <CardContent sx={{ p: 0 }}>
            <Pre className={className} style={style}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })}>
                  <LineNo>{i + 1}</LineNo>
                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </LineContent>
                </Line>
              ))}
            </Pre>
          </CardContent>
          <Divider />
          <CardActions sx={{ py: 0.25 }}>
            <Typography variant="subtitle1" color="textSecondary" sx={{ ml: 1 }}>Language: {language}</Typography>
            <Box flexGrow={1} />
            <CopyToClipboard text={code.trim()} onCopy={handleCopy}>
              <Tooltip
                TransitionComponent={Zoom}
                title={copyLabel}
                placement="left"
                arrow
              >
                <IconButton>
                  <ContentCopyIcon fontSize="small" sx={{ color: (theme: Theme) => theme.palette.text.secondary }} />
                </IconButton>
              </Tooltip>
            </CopyToClipboard>
          </CardActions>
        </Card>
      )}
    </Highlight>
  )
}
