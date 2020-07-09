import styled from 'styled-components'

const BUTTON_SIZES = {
  small: `
    padding: 12px 22px;
  `,
  medium: `
    padding: 14px 30px;
  `,
}

export const withSizes = (WrappedButton) => {
  const getSize = (size = 'medium') => BUTTON_SIZES[size]
  const ComponentWithStyle = styled(WrappedButton)`
    ${(props) => getSize(props.size)}
  `

  return ComponentWithStyle
}
