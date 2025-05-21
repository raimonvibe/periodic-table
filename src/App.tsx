import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from './components/ui/tabs';
import PeriodicTable from './components/PeriodicTable';
import ElementDetail from './components/ElementDetail';
// import CreditsSettings from './components/CreditsSettings';
import { elements, getElementByAtomicNumber } from './data/elements';
import { Settings, Table, CreditCard } from 'lucide-react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('periodic-table');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/') {
      setActiveTab('periodic-table');
    } else if (path === '/settings') {
      setActiveTab('settings');
    } else if (path === '/credits') {
      setActiveTab('credits');
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
        
        <footer className="bg-white dark:bg-slate-800 border-t dark:border-slate-700 py-4">
          <div className="container mx-auto px-4 text-center text-slate-500 dark:text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Interactive Periodic Table | <a href="https://raimonvibe.eu" target="_blank" rel="noopener noreferrer" className="hover:underline">raimonvibe</a>
          </div>
        </footer>
      </div>
    </Router>
  </ThemeProvider>
  );
}

export default App;
