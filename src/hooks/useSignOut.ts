import { useNavigate } from 'react-router-dom';

export const useSignOut = () => {
  const navigate = useNavigate();

  const signOut = () => {
    navigate('/sign-in');
  };

  return { signOut };
};
