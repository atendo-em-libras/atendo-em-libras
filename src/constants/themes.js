import { BREAKPOINTS } from './breakpoints'
import { BUTTONS, ANCHORS } from './buttons'
import { TYPOGRAPHY } from './typography'

// This follows Grommet's theme structure.
// For more info on which attributes are available
// visit https://v2.grommet.io/themecontext
export const DEFAULT_THEME = {
  global: { breakpoints: BREAKPOINTS },
  button: BUTTONS,
  anchor: ANCHORS,
  heading: TYPOGRAPHY.heading,
}
