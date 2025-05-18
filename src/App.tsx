import React from 'react';
import { Button } from '@/components/ui/button';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">Welcome to My TypeScript React App</h1>
      <Button variant="default">Click Me</Button>
    </div>
  );
};

export default App;