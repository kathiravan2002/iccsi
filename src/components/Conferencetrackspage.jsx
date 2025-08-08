import React from 'react'
import Conferencetracks from '../shared/components/Conferencetracks'
import HelmetComponent from './HelmetComponent'

function Conferencetrackspage() {
  return (
    <div>
      <HelmetComponent title={'Conference Tracks - International Conference on Computer Science Innovations'} canonical={'https://ic-csi.com/conference-tracks'} />
      <Conferencetracks />
    </div>
  )
}

export default Conferencetrackspage