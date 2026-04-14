import css from './SettingsPage.module.css';
import Container from '../../components/Container/Container.jsx';
import Section from '../../components/Section/Section.jsx';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors.js';
import { Check } from 'lucide-react';
import { useState } from 'react';
import ModalOverlay from '../../components/ModalOverlay/ModalOverlay.jsx';
import ConfirmContainer from '../../components/ConfirmContainer/ConfirmContainer.jsx';
import toast from 'react-hot-toast';

function SettingsPage() {
  const user = useSelector(selectUser);

  const [isConfirmCollectionOpen, setIsConfirmCollectionOpen] = useState(false);
  const [isConfirmWishlistOpen, setIsConfirmWishlistOpen] = useState(false);

  const openConfirmCollection = () => setIsConfirmCollectionOpen(true);
  const closeConfirmCollection = () => setIsConfirmCollectionOpen(false);

  const openConfirmWishlistOpen = () => setIsConfirmWishlistOpen(true);
  const closeConfirmWishlistOpen = () => setIsConfirmWishlistOpen(false);

  const handleChangePassword = async () => {
    try {
      toast.success('Password chanched');
    } catch (error) {
      toast.error('Error! ' + error);
    }
  };

  const handleChangeName = async () => {
    try {
      toast.success('Name chanched');
    } catch (error) {
      toast.error('Error! ' + error);
    }
  };

  const handleClearCollection = async () => {
    try {
      //   await dispatch(logOut()).unwrap();

      toast.success('Collection was cleared!');
      closeConfirmCollection();
    } catch (error) {
      toast.error('Error! ' + error);
    }
  };

  const handleClearWashList = async () => {
    try {
      //   await dispatch(logOut()).unwrap();
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
        <div className={css.profile}>
          <h3 className={css.subtitle}>Profile</h3>
          <p className={css.text}>Your current name is {user.name}</p>
          <div className={css.profileWrapper}>
            <span>New name</span>
            <input type="text" className={css.input} />
            <button className={css.btn}>
              <Check size={24} />
            </button>
          </div>
        </div>
        <div className={css.security}>
          <h3 className={css.subtitle}>Security</h3>
          <div className={css.securityWrapper}>
            <span>Old password</span>
            <input type="text" className={css.input} />
            <span>New password</span>
            <input type="text" className={css.input} />
            <span>Confirm new password</span>
            <input type="text" className={css.input} />
            <button className={css.btn}>
              <Check size={24} />
            </button>
          </div>
        </div>
        <div className={css.data}>
          <h3 className={css.subtitle}>My Data</h3>
          <button type="button" onClick={openConfirmCollection}>
            Clear my collection
          </button>
          <button type="button" onClick={openConfirmWishlistOpen}>
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
