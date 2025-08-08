import React from 'react'
import Editorial from '../shared/components/Editorial'
import HelmetComponent from './HelmetComponent'

function Editorialpage() {
  return (
    <div>
      <HelmetComponent title={'Editorial Board - International Conference on Computer Science Innovations'} canonical={'https://ic-csi.com/editorial-board'} />
      <Editorial />
    </div>
  )
}

export default Editorialpage