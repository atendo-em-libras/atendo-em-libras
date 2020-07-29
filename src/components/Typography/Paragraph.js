import React from 'react'
import { Paragraph as GrommetParagraph } from 'grommet'

const Paragraph = (propsDefault) => {
  const props = { size: 'small', ...propsDefault }

  return <GrommetParagraph {...props} />
}

export { Paragraph }
