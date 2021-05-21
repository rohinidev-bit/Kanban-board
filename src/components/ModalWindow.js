import React, {useState} from "react";
import Modal from "react-modal";
import ModalForm from "./ModalForm";
import Home from "./Home";
Modal.setAppElement('#root')
function ModalWindow() {
  const [modalOpen, setModal]=useState(false)
  return (
    <div className="App">
      <Home/>
      <button onClick={()=>setModal(true)}>
        + New
      </button>
      <Modal isOpen={modalOpen} 
      shouldCloseOnOverlayClick={true} 
      onRequestClose={()=>setModal(false)}
      style={
        {
          overlay:{
            backgroundColor:'grey'
          },
          content:{
            color:'black'
          }
        }
      }
       >

        <div>
          <button onClick={()=>setModal(false)}>
                  X
          </button>     
          <ModalForm />
        </div>
      </Modal>
    </div>
  );
}
export default ModalWindow;