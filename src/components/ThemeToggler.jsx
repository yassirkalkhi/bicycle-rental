import React , {useState,useEffect} from 'react'
import {Sun,Moon} from "lucide-react"
import {Badge} from "../components/ui/badge"

const themeToggler = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const html = document.querySelector('html');
    if (isDarkMode) {
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.querySelector('html').classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);
  return (
 
    <Badge onClick={toggleDarkMode} className="fixed bottom-3 right-2 md:bottom-6 md:right-6 z-50  text-white rounded-lg px-6 py-2 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700  border-0">
      {isDarkMode ? (  <Sun size={26} strokeWidth={3}  className='text-white' />) :
                         (<Moon size={26} strokeWidth={3} className='text-white' />)}
                          
         </Badge>
                 
        
       
  )
}

export default themeToggler