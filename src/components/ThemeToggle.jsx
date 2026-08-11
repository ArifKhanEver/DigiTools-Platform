import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <FiSun size={20} className="text-yellow-400" /> : <FiMoon size={20} className="text-gray-600" />}
    </button>
  );
};

export default ThemeToggle;

// Code styling and structural review completed.
