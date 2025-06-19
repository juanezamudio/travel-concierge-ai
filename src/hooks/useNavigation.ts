import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
  const navigate = useNavigate();

  const goToOnboarding = () => navigate('/onboarding');
  const goToLogin = () => navigate('/login');
  const goToDashboard = () => navigate('/dashboard');
  const goToTripForm = () => navigate('/trip-form');
  const goToLanding = () => navigate('/');

  return {
    goToOnboarding,
    goToLogin,
    goToDashboard,
    goToTripForm,
    goToLanding,
    navigate
  };
}; 