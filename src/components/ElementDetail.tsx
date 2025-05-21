import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Element } from '../data/elements';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { ArrowLeft } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';

interface ElementDetailProps {
  getElementByAtomicNumber: (atomicNumber: number) => Element | undefined;
}

const ElementDetail: React.FC<ElementDetailProps> = ({ getElementByAtomicNumber }) => {
  const { atomicNumber } = useParams<{ atomicNumber: string }>();
  const navigate = useNavigate();

  const element = getElementByAtomicNumber(Number(atomicNumber));

  const handleBack = () => {
    navigate('/');
  };

  if (!element) {
    return (
      <div className="container mx-auto p-4">
        <Alert variant="destructive">
          <AlertDescription>Element not found</AlertDescription>
        </Alert>
        <Button onClick={handleBack} className="mt-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Periodic Table
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Button onClick={handleBack} variant="outline" className="mb-4 dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Periodic Table
      </Button>
      
        {/* Element Information */}
               
+      <div className="flex justify-center"> {/* Changed: Use flexbox to center the card */}
+        <Card className="dark:bg-slate-800 dark:border-slate-700 w-full max-w-2xl"> {/* Added: w-full and max-w-2xl (or adjust as needed, e.g., max-w-xl) */}

          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl dark:text-white">{element.name} ({element.symbol})</CardTitle>
                <CardDescription className="dark:text-slate-300">Atomic Number: {element.atomicNumber}</CardDescription>
              </div>
              <div className="text-4xl font-bold dark:text-white">{element.symbol}</div>
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold mb-2 dark:text-white">Properties</h3>
            <div className="grid grid-cols-2 gap-2 dark:text-slate-200">
              <div>Atomic Mass:</div>
              <div>{element.properties.atomicMass}</div>
              
              <div>Category:</div>
              <div className="capitalize">{element.properties.category}</div>
              
              {element.properties.group && (
                <>
                  <div>Group:</div>
                  <div>{element.properties.group}</div>
                </>
              )}
              
              {element.properties.period && (
                <>
                  <div>Period:</div>
                  <div>{element.properties.period}</div>
                </>
              )}
              
              {element.properties.electronConfiguration && (
                <>
                  <div>Electron Configuration:</div>
                  <div>{element.properties.electronConfiguration}</div>
                </>
              )}
              
              {element.properties.density && (
                <>
                  <div>Density:</div>
                  <div>{element.properties.density} g/cm³</div>
                </>
              )}
              
              {element.properties.meltingPoint && (
                <>
                  <div>Melting Point:</div>
                  <div>{element.properties.meltingPoint} °C</div>
                </>
              )}
              
              {element.properties.boilingPoint && (
                <>
                  <div>Boiling Point:</div>
                  <div>{element.properties.boilingPoint} °C</div>
                </>
              )}
            </div>
            
            <Separator className="my-4 dark:bg-slate-700" />
            
            <h3 className="text-lg font-semibold mb-2 dark:text-white">Earthly Items</h3>
            <div className="space-y-2">
              {element.earthItems.map((item, index) => (
                <div key={index} className="p-2 bg-slate-50 dark:bg-slate-700 rounded-md">
                  <div className="font-medium dark:text-white">{item.name}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{item.use}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        {/* AI Query Card was here and is now removed */}
      </div>
    </div>
  );
};

export default ElementDetail;