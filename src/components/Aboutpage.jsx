import React from 'react'
import About from '../shared/components/About'
import HelmetComponent from './HelmetComponent'

function Aboutpage() {
  return (
    <div>
      <HelmetComponent title={'About us - International Conference on Computer Science Innovations'} canonical={'https://ic-csi.com/about'}/>
      <About/>
      </div>
  )
}

export default Aboutpage