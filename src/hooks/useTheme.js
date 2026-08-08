import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

/**
 * useTheme custom hook to access and toggle light/dark theme state.
 */
export const useTheme = () => useContext(ThemeContext);

export default useTheme;
