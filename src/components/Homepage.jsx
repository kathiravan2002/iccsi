import React from 'react'
import Home from '../shared/components/Home'
import HelmetComponent from './HelmetComponent'

function Homepage() {
  return (
    <div>
      <HelmetComponent title={'Home - International Conference on Computer Science Innovations'} canonical={'https://ic-csi.com/'} />
      <Home />
    </div>
  )
}

export default Homepage