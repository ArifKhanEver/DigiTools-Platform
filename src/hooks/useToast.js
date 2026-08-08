import { useContext } from 'react';
import { ToastContext } from '../components/Toast';

/**
 * useToast custom hook to trigger notifications anywhere in the component tree.
 */
export const useToast = () => useContext(ToastContext);

export default useToast;
