import * as React from 'react'

import { TextInput } from '.'
import { NetlifyForm } from '../NetlifyForm'

export default {
  title: 'TextInput',
  decorators: [
    (storFn: any) => (
      <div style={{ color: '#fff' }}>
        <NetlifyForm>{storFn()}</NetlifyForm>
      </div>
    )
  ],
  parameters: {
    component: TextInput,
    componentSubtitle: 'TextInput is ...'
  }
}

export const usage = () => <TextInput />

export const placeholder = () => <TextInput placeholder="Placeholder text" />

placeholder.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `placeholder` prop can be used to display a placeholder'
    }
  }
}
