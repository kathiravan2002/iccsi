import React from 'react'
import Papersubmission from '../shared/components/Papersubmission'
import HelmetComponent from './HelmetComponent'

function Papersubmissionpage() {
  return (
    <div>
      <HelmetComponent title={'Paper Submission - International Conference on Computer Science Innovations'} canonical={'https://ic-csi.com/paper-submission'} />
      <Papersubmission />
    </div>
  )
}

export default Papersubmissionpage