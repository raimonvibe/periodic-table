import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from './components/ui/tabs';
import PeriodicTable from './components/PeriodicTable';
import ElementDetail from './components/ElementDetail';
// import CreditsSettings from './components/CreditsSettings';
import { elements, getElementByAtomicNumber } from './data/elements';
import { Table } from 'lucide-react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('periodic-table');

useEffect(() => {
  const path = window.location.pathname;
  if (path === '/') {
    setActiveTab('periodic-table');
  }
}, []);


  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-200">
          <header className="bg-white dark:bg-slate-800 shadow-sm">
            <div className="container mx-auto p-4">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                  <Link to="/" onClick={() => setActiveTab('periodic-table')}>
                    Periodic Table
                  </Link>
                </h1>
                
                <div className="flex items-center">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
                    <TabsList className="dark:bg-slate-700">
                      <TabsTrigger value="periodic-table" asChild className="dark:data-[state=active]:bg-slate-900 dark:text-slate-200">
                        <Link to="/" className="flex items-center gap-1">
                          <Table className="h-4 w-4" /> Table
                        </Link>
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </header>
        
        <main className="py-6">
          <Routes>
            <Route path="/" element={<PeriodicTable elements={elements} />} />
            <Route path="/element/:atomicNumber" element={<ElementDetail getElementByAtomicNumber={getElementByAtomicNumber} />} />
          </Routes>
        </main>
        
        <footer className="mt-12 sm:mt-16 bg-black/30 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6 sm:p-8">
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Connect with Raimon</h3>
            <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 icons social-grid">
              <li>
                <a href="https://x.com/raimonvibe/" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-110">
                  <i className="fab fa-x-twitter text-base sm:text-lg"></i>
                  <span className="sr-only">X</span>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCDGDNuYb2b2Ets9CYCNVbuA/videos/" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-110">
                  <i className="fab fa-youtube text-base sm:text-lg"></i>
                  <span className="sr-only">YouTube</span>
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@raimonvibe/" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-800 to-black rounded-lg flex items-center justify-center text-white hover:from-gray-700 hover:to-gray-900 transition-all duration-300 hover:scale-110">
                  <i className="fab fa-tiktok text-base sm:text-lg"></i>
                  <span className="sr-only">TikTok</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/raimonvibe/" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-110">
                  <i className="fab fa-instagram text-base sm:text-lg"></i>
                  <span className="sr-only">Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://medium.com/@raimonvibe/" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center text-white hover:from-gray-600 hover:to-gray-700 transition-all duration-300 hover:scale-110">
                  <i className="fab fa-medium text-base sm:text-lg"></i>
                  <span className="sr-only">Medium</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/raimonvibe/" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center text-white hover:from-gray-500 hover:to-gray-600 transition-all duration-300 hover:scale-110">
                  <i className="fab fa-github text-base sm:text-lg"></i>
                  <span className="sr-only">GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/raimonvibe/" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-110">
                  <i className="fab fa-linkedin-in text-base sm:text-lg"></i>
                  <span className="sr-only">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61563450007849" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-110">
                  <i className="fab fa-facebook-f text-base sm:text-lg"></i>
                  <span className="sr-only">Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </Router>
  </ThemeProvider>
  );
}

export default App;
