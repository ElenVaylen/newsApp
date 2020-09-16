import { useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'

export const spacingRow = () => {
  const theme = useTheme()
  const lg = useMediaQuery(theme.breakpoints.up('lg'))
  const md = useMediaQuery(theme.breakpoints.up('md'))
  if (lg) {
    return 5
  } if (md) {
    return 3
  }
  return 2
}
