// import React, { useState, useEffect } from 'react';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
// import { Input } from './ui/input';
// import { Button } from './ui/button';
// import { Progress } from './ui/progress';
// import { Alert, AlertDescription } from './ui/alert';
// import { AlertTriangle, RefreshCw, Save } from 'lucide-react';
// import { 
//   checkCredits, 
//   resetCredits, 
//   updateBudget, 
//   saveApiKey, 
//   getApiKey, 
//   clearApiKey 
// } from '../services/openai';
// import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

// const CreditsSettings: React.FC = () => {
//   const [apiKey, setApiKey] = useState('');
//   const [budget, setBudget] = useState(5);
//   const [showApiKey, setShowApiKey] = useState(false);
//   const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  
//   useEffect(() => {
//     const storedApiKey = getApiKey();
//     if (storedApiKey) {
//       setApiKey(storedApiKey);
//     }
    
//     const creditStatus = checkCredits();
//     setBudget(creditStatus.budget);
//   }, []);
  
//   const handleSaveApiKey = () => {
//     try {
//       saveApiKey(apiKey);
//       setMessage({ type: 'success', text: 'API key saved successfully' });
//       setTimeout(() => setMessage(null), 3000);
//     } catch (error) {
//       setMessage({ type: 'error', text: 'Failed to save API key' });
//     }
//   };
  
//   const handleClearApiKey = () => {
//     clearApiKey();
//     setApiKey('');
//     setMessage({ type: 'success', text: 'API key cleared' });
//     setTimeout(() => setMessage(null), 3000);
//   };
  
//   const handleUpdateBudget = () => {
//     updateBudget(budget);
//     setMessage({ type: 'success', text: 'Budget updated successfully' });
//     setTimeout(() => setMessage(null), 3000);
//   };
  
//   const handleResetCredits = () => {
//     resetCredits();
//     setMessage({ type: 'success', text: 'Credits reset successfully' });
//     setTimeout(() => setMessage(null), 3000);
//   };
  
//   const creditStatus = checkCredits();
//   const creditPercentage = (creditStatus.used / creditStatus.budget) * 100;
  
//   const chartData = [
//     { name: 'Used', value: creditStatus.used },
//     { name: 'Remaining', value: Math.max(0, creditStatus.budget - creditStatus.used) }
//   ];
  
//   const COLORS = ['#ff6b6b', '#4ecdc4'];
  
//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Credits Usage */}
//         <Card className="dark:bg-slate-800 dark:border-slate-700">
//           <CardHeader>
//             <CardTitle className="dark:text-white">Credits Usage</CardTitle>
//             <CardDescription className="dark:text-slate-300">Track your OpenAI API usage</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="mb-4">
//               <div className="flex justify-between mb-2 dark:text-slate-200">
//                 <span>Credits Used:</span>
//                 <span>${creditStatus.used.toFixed(2)} / ${creditStatus.budget.toFixed(2)}</span>
//               </div>
//               <Progress value={creditPercentage} className="h-2" />
//             </div>
            
//             {creditStatus.warning && (
//               <Alert className="mb-4">
//                 <AlertTriangle className="h-4 w-4" />
//                 <AlertDescription>
//                   Warning: You've used {Math.round(creditPercentage)}% of your credit budget
//                 </AlertDescription>
//               </Alert>
//             )}
            
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     data={chartData}
//                     cx="50%"
//                     cy="50%"
//                     labelLine={false}
//                     outerRadius={80}
//                     fill="#8884d8"
//                     dataKey="value"
//                     label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                   >
//                     {chartData.map((_, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Tooltip formatter={(value) => `$${Number(value).toFixed(2)}`} />
//                   <Legend />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
            
//             <div className="mt-4">
//               <Button onClick={handleResetCredits} className="w-full dark:bg-blue-600 dark:hover:bg-blue-700">
//                 <RefreshCw className="mr-2 h-4 w-4" /> Reset Credits
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
        
//         {/* Settings */}
//         <Card className="dark:bg-slate-800 dark:border-slate-700">
//           <CardHeader>
//             <CardTitle className="dark:text-white">Settings</CardTitle>
//             <CardDescription className="dark:text-slate-300">Configure your OpenAI API key and budget</CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             {message && (
//               <Alert variant={message.type === 'success' ? 'default' : 'destructive'}>
//                 <AlertDescription>{message.text}</AlertDescription>
//               </Alert>
//             )}
            
//             <div className="space-y-2">
//               <label htmlFor="apiKey" className="text-sm font-medium dark:text-slate-200">
//                 OpenAI API Key
//               </label>
//               <div className="flex gap-2">
//                 <Input
//                   id="apiKey"
//                   type={showApiKey ? 'text' : 'password'}
//                   value={apiKey}
//                   onChange={(e) => setApiKey(e.target.value)}
//                   placeholder="sk-..."
//                   className="dark:bg-slate-700 dark:text-white dark:border-slate-600"
//                 />
//                 <Button
//                   variant="outline"
//                   onClick={() => setShowApiKey(!showApiKey)}
//                   className="dark:text-slate-200 dark:border-slate-600 dark:hover:bg-slate-700"
//                 >
//                   {showApiKey ? 'Hide' : 'Show'}
//                 </Button>
//               </div>
//               <div className="flex gap-2 mt-2">
//                 <Button onClick={handleSaveApiKey} className="flex-1 dark:bg-blue-600 dark:hover:bg-blue-700">
//                   <Save className="mr-2 h-4 w-4" /> Save Key
//                 </Button>
//                 <Button onClick={handleClearApiKey} variant="outline" className="flex-1 dark:text-slate-200 dark:border-slate-600 dark:hover:bg-slate-700">
//                   Clear Key
//                 </Button>
//               </div>
//             </div>
            
//             <div className="space-y-2">
//               <label htmlFor="budget" className="text-sm font-medium dark:text-slate-200">
//                 Monthly Budget (USD)
//               </label>
//               <div className="flex gap-2">
//                 <Input
//                   id="budget"
//                   type="number"
//                   min="1"
//                   step="0.01"
//                   value={budget}
//                   onChange={(e) => setBudget(Number(e.target.value))}
//                   className="dark:bg-slate-700 dark:text-white dark:border-slate-600"
//                 />
//                 <Button onClick={handleUpdateBudget} className="dark:bg-blue-600 dark:hover:bg-blue-700">
//                   Update
//                 </Button>
//               </div>
//             </div>
//           </CardContent>
//           <CardFooter className="text-sm text-slate-500 dark:text-slate-400">
//             Your API key is stored locally in your browser and never sent to any server.
//           </CardFooter>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default CreditsSettings;
