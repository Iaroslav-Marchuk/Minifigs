import Modal from 'react-modal';
import { X } from 'lucide-react';

import css from './ModalOverlay.module.css';

function ModalOverlay({ children, isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
      bodyOpenClassName={css.bodyOpen}
    >
      <button type="button" onClick={onClose} className={css.btn}>
        <X size={24} strokeWidth={1} />
      </button>
      {children}
    </Modal>
  );
}
export default ModalOverlay;
