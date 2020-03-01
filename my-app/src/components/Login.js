import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../App.css'
import { connect } from 'react-redux';
import {Link, useHistory} from 'react-router-dom'




 const Login = (props) => {
  const {
    className
  } = props;
  console.log(props)

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  let history = useHistory()
  console.log(history)
  return (
    <div>
      <p color="danger" >Login</p>
      <Modal isOpen={toggle} className={className}>
        <ModalHeader >Login</ModalHeader>
        <ModalBody>
          <form>
              <label className='test'>username: 
              <input className='test2'/></label><br/>

              <label>password: </label>
              <input/><br/>
          </form>

          <p>Already have an account? <Link to='/signup'>Click Here</Link></p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" >Do Something</Button>
          <Button color="secondary" onClick={() => {history.goBack()}}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Login;