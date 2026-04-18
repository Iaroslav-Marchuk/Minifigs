import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginWithGoogle } from '../../redux/auth/operations.js';
import GlobalLoader from '../../components/GlobalLoader/GlobalLoader.jsx';

function GoogleOAuthCallbackPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (!code) {
      navigate('/login');
      return;
    }

    dispatch(loginWithGoogle({ code }))
      .unwrap()
      .then(() => navigate('/'))
      .catch(() => navigate('/login'));
  }, [dispatch, navigate]);

  return <GlobalLoader />;
}

export default GoogleOAuthCallbackPage;
