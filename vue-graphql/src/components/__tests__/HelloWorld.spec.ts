import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppTitle from '../AppTitle.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(AppTitle, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
