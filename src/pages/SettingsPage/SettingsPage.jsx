import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useState } from 'react';

import Container from '../../components/Container/Container.jsx';
import Section from '../../components/Section/Section.jsx';
import ModalOverlay from '../../components/ModalOverlay/ModalOverlay.jsx';
import ConfirmContainer from '../../components/ConfirmContainer/ConfirmContainer.jsx';
import ChangePassForm from '../../components/ChangePassForm/ChangePassForm.jsx';
import ChangeNameForm from '../../components/ChangeNameForm/ChangeNameForm.jsx';

import { clearUserCollection } from '../../redux/collection/operations.js';
import { clearUserWishList } from '../../redux/wishList/operations.js';

import css from './SettingsPage.module.css';

function SettingsPage() {
  const dispatch = useDispatch();

  const [isConfirmCollectionOpen, setIsConfirmCollectionOpen] = useState(false);
  const [isConfirmWishlistOpen, setIsConfirmWishlistOpen] = useState(false);

  const openConfirmCollection = () => setIsConfirmCollectionOpen(true);
  const closeConfirmCollection = () => setIsConfirmCollectionOpen(false);

  const openConfirmWishlistOpen = () => setIsConfirmWishlistOpen(true);
  const closeConfirmWishlistOpen = () => setIsConfirmWishlistOpen(false);

  const handleClearCollection = async () => {
    try {
      await dispatch(clearUserCollection()).unwrap();

      toast.success('Collection was cleared!');
      closeConfirmCollection();
    } catch (error) {
      toast.error('Error! ' + error);
    }
  };

  const handleClearWashList = async () => {
    try {
      await dispatch(clearUserWishList()).unwrap();
      toast.success('Wishlist was cleared!');
      closeConfirmWishlistOpen();
    } catch (error) {
      toast.error('Error! ' + error);
    }
  };

  return (
    <Section>
      <Container>
        <h2 className={css.title}>Settings</h2>

        <div className={css.wrapper}>
          <h3 className={css.subtitle}>Profile</h3>
          <ChangeNameForm />
        </div>

        <div className={css.wrapper}>
          <h3 className={css.subtitle}>Security</h3>
          <ChangePassForm />
        </div>

        <div className={css.data}>
          <h3 className={css.subtitle}>My Data</h3>
          <button
            type="button"
            onClick={openConfirmCollection}
            className={css.btn}
          >
            Clear my collection
          </button>
          <button
            type="button"
            onClick={openConfirmWishlistOpen}
            className={css.btn}
          >
            Clear my wish list
          </button>
        </div>

        <ModalOverlay
          isOpen={isConfirmCollectionOpen}
          onClose={() => setIsConfirmCollectionOpen(false)}
        >
          <ConfirmContainer
            text="Are you sure you want to clear your collection?"
            onConfirm={handleClearCollection}
            onClose={() => setIsConfirmCollectionOpen(false)}
          />
        </ModalOverlay>

        <ModalOverlay
          isOpen={isConfirmWishlistOpen}
          onClose={() => setIsConfirmWishlistOpen(false)}
        >
          <ConfirmContainer
            text="Are you sure you want to clear your wishlist?"
            onConfirm={handleClearWashList}
            onClose={() => setIsConfirmWishlistOpen(false)}
          />
        </ModalOverlay>
      </Container>
    </Section>
  );
}

export default SettingsPage;
