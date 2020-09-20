import { mount } from 'enzyme'
import React from 'react'
import LaunchSystem from '../view'
import { configure } from 'enzyme'
import mockdata from '../../../mockData'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('test for launch system', () => {
  const fetchSpacecards = jest.fn()
  it('render loader when data is fetching', (done) => {
    const wrapper = mount(
      <LaunchSystem fetchSpacecards={fetchSpacecards} fetchingData={true} spaceData={[]}/>
    )
    expect(wrapper.find('#fetch-loader')).toBeTruthy()
    done()
  })
  it('test render card component', (done) => {
    const wrapper = mount(
      <LaunchSystem fetchSpacecards={fetchSpacecards} fetchingData={false} spaceData={mockdata}/>
    )
    expect(wrapper.find('Cards')).toBeTruthy()
    expect(wrapper.find('#footer-content')).toBeTruthy()
    done()
  })
})