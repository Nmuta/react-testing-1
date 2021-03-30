import React from 'react'
import { mount } from 'enzyme'
import AddNumbers from './AddNumbers'

describe('MyComponent', () => {
  it('renders appropriately', () => {
    const wrapper = mount(<AddNumbers />)
    for (let i = 1; i <=100; i++){
        wrapper.find('button').simulate('click')
        expect(wrapper.find('Number').length).toEqual(i)
    }
  })
})
