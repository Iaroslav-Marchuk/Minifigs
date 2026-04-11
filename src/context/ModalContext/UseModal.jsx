import { useContext } from 'react';
import { ModalContext } from './ModalContext.jsx';

export const useModal = () => useContext(ModalContext);
