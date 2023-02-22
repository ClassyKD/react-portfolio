import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Contact Me</MDBCardTitle>
        <MDBCardText>
          These are a few places that you can contact me at for any questions or information.
        </MDBCardText>
            <MDBBtn style={{ backgroundColor: '#dd4b39' }} href='mailto:kdmoreno14@gmail.com?' className='btn-fix'>
            <MDBIcon className='me-2 btn-fix' fab icon='google' /> Gmail
            </MDBBtn>
            <MDBBtn style={{ backgroundColor: '#0082ca' }} href='https://www.linkedin.com/in/kevindavid-moreno-1756aa265/' className='btn-fix'>
            <MDBIcon className='me-2 btn-fix' fab icon='linkedin-in' /> LinkedIN
            </MDBBtn>
            <MDBBtn style={{ backgroundColor: '#333333' }} href='https://github.com/ClassyKD' className='btn-fix'>
            <MDBIcon className='me-2 btn-fix' fab icon='github' /> github 
            </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}