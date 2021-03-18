import React, { useState } from 'react';
import GuestBook from './components/GuestBook/GuestBook';
import CommentList from './components/CommentList/CommentList';
import Modal from './components/Modal/Modal';
import { Button } from '@material-ui/core';
import s from './App.module.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <>
      <div className={s.container}>
        <div className={s.appBar}>
          <h1 className={s.title}>Comments</h1>
          <div className={s.btn}>
            <Button
              onClick={toggleModal}
              aria-label="Open Modal"
              variant="contained"
              color="secondary"
            >
              Add comment
            </Button>
          </div>
        </div>

        {showModal && (
          <Modal onClose={toggleModal}>
            <GuestBook toggleModal={toggleModal} />
          </Modal>
        )}
        <CommentList />
      </div>
    </>
  );
}

export default App;
