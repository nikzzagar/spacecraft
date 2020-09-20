import { mount } from 'enzyme'
import React from 'react'
import mockData from '../../../mockData'
import Card from '../../Cards'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
 
configure({ adapter: new Adapter() })

describe('test for spacecard', () => {
  it('test card render', (done) => {
    const wrapper = mount(<Card spaceData={mockData}/>)
    expect(wrapper.find('#spacecraft__cards')).toBeTruthy()
    done()
  })

  it('test component if empty data passed', (done) => {
    const wrapper = mount(<Card spaceData={[]}/>)
    expect(wrapper.find('#spacecraft__cards')).toHaveLength(0)
    done()
  })
})