import { BREAKPOINTS } from './breakpoints'
import { BUTTONS, ANCHORS } from './buttons'
import { TYPOGRAPHY } from './typography'
import { COLORS } from './colors'

// This follows Grommet's theme structure.
// For more info on which attributes are available
// visit https://v2.grommet.io/themecontext
export const DEFAULT_THEME = {
  global: {
    breakpoints: BREAKPOINTS,
    colors: COLORS,
  },
  anchor: ANCHORS,
  button: BUTTONS,
  heading: TYPOGRAPHY.heading,
}
