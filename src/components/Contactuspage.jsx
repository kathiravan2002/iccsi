import React from 'react'
import Contactus from '../shared/components/Contactus'
import HelmetComponent from './HelmetComponent'

function Contactuspage() {
  return (
    <div>
      <HelmetComponent title={'Contact us - International Conference on Computer Science Innovations'} canonical={'https://ic-csi.com/contact-us'} />
      <Contactus />
    </div>
  )
}

export default Contactuspage