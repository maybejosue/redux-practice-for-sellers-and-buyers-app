import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../App.css'
import {Link} from 'react-router-dom'

export const Signup = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <p color="danger" >Signup</p>
      <Modal isOpen={toggle} className={className}>
        <ModalHeader >Signup</ModalHeader>
        <ModalBody>
          <form>
              <label className='test'>username: 
              <input className='test2'/></label><br/>

              <label>password: </label>
              <input/><br/>

              <label>email: </label>
              <input/><br/>

              <label>age: </label>
              <input/><br/>
          </form>

          <p>Already have an account? <Link to='/login'>Click Here</Link></p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" >Do Something</Button>
          <Button color="secondary" >Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}