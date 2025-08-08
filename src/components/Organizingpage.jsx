import React from 'react'
import Organizing from '../shared/components/Organizing'
import HelmetComponent from './HelmetComponent'

function Organizingpage() {
  return (
    <div>
      <HelmetComponent title={'Organizing Committee - International Conference on Computer Science Innovations'} canonical={'https://ic-csi.com/organizing-committee'} />
      <Organizing />
    </div>
  )
}

export default Organizingpage