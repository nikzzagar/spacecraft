import { mount } from 'enzyme'
import React from 'react'
import Launchcard from '../'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('test for launchcard', () => {
  const selectYear = jest.fn()
  const selectLaunch = jest.fn()
  const selectLanding = jest.fn()

  const wrapper = mount(
    <Launchcard
      selectYear={selectYear}
      selectLaunch={selectLaunch}
      selectLanding={selectLanding}
    />
  )
  it('test launchcard render', (done) => {
    expect(wrapper.find('Launchcard')).toBeTruthy()
    done()
  })
  it('test click launch year button', (done) => {
    wrapper.find('#launchyear-2016').simulate('click')
    expect(selectYear).toHaveBeenCalled()
    done()
  })
  it('test click true successful launch button', (done) => {
    wrapper.find('#launchbutton-true').simulate('click')
    expect(selectLaunch).toHaveBeenCalled()
    done()
  })
  it('test click true successful landing button', (done) => {
    wrapper.find('#successfulLanding-true').simulate('click')
    expect(selectLanding).toHaveBeenCalled()
    done()
  })
})