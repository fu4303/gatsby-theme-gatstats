import * as React from 'react'
import { shallow } from 'enzyme'

import { ThemeProvider } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

import { usage } from './Panel.stories'

describe('<Panel>', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ThemeProvider theme={theme}>{usage()}</ThemeProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
