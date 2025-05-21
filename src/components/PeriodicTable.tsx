import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Element } from '../data/elements';
import { Card } from './ui/card';

interface PeriodicTableProps {
  elements: Element[];
}

const PeriodicTable: React.FC<PeriodicTableProps> = ({ elements }) => {
  const navigate = useNavigate();

  const tableStructure = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10],
    [11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
    [55, 56, 57, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
    [87, 88, 89, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 0, 0],
    [0, 0, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 0, 0]
  ];

  const getCategoryColor = (category: string): string => {
    const categoryColors: Record<string, string> = {
      'nonmetal': 'bg-blue-200 hover:bg-blue-300 dark:bg-blue-800 dark:hover:bg-blue-700',
      'noble gas': 'bg-purple-200 hover:bg-purple-300 dark:bg-purple-800 dark:hover:bg-purple-700',
      'alkali metal': 'bg-red-200 hover:bg-red-300 dark:bg-red-800 dark:hover:bg-red-700',
      'alkaline earth metal': 'bg-orange-200 hover:bg-orange-300 dark:bg-orange-800 dark:hover:bg-orange-700',
      'metalloid': 'bg-green-200 hover:bg-green-300 dark:bg-green-800 dark:hover:bg-green-700',
      'halogen': 'bg-yellow-200 hover:bg-yellow-300 dark:bg-yellow-800 dark:hover:bg-yellow-700',
      'transition metal': 'bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600',
      'post-transition metal': 'bg-indigo-200 hover:bg-indigo-300 dark:bg-indigo-800 dark:hover:bg-indigo-700',
      'lanthanide': 'bg-pink-200 hover:bg-pink-300 dark:bg-pink-800 dark:hover:bg-pink-700',
      'actinide': 'bg-rose-200 hover:bg-rose-300 dark:bg-rose-800 dark:hover:bg-rose-700'
    };

    return categoryColors[category] || 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600';
  };

  const handleElementClick = (atomicNumber: number) => {
    navigate(`/element/${atomicNumber}`);
  };

  const findElement = (atomicNumber: number): Element | undefined => {
    return elements.find(element => element.atomicNumber === atomicNumber);
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[1000px] p-4">
        <div className="grid grid-cols-18 gap-1">
          {tableStructure.map((row, rowIndex) => (
            <React.Fragment key={`row-${rowIndex}`}>
              {row.map((atomicNumber, colIndex) => {
                if (atomicNumber === 0) {
                  return <div key={`empty-${rowIndex}-${colIndex}`} className="w-14 h-14"></div>;
                }

                const element = findElement(atomicNumber);
                if (!element) {
                  return <div key={`unknown-${atomicNumber}`} className="w-14 h-14 bg-gray-100 dark:bg-gray-800"></div>;
                }

                return (
                  <Card
                    key={element.atomicNumber}
                    className={`w-16 h-16 flex flex-col items-center cursor-pointer transition-colors ${getCategoryColor(element.properties.category)}`}
                    onClick={() => handleElementClick(element.atomicNumber)}
                  >
                    <div className="text-xs font-medium text-gray-700 dark:text-gray-300 mt-1">{element.atomicNumber}</div>
                    <div className="text-lg font-bold -mt-1 dark:text-white">{element.symbol}</div>
                    <div className="text-[10px] font-semibold truncate w-full text-center px-1 mt-auto mb-1 text-gray-800 dark:text-gray-200">{element.name}</div>
                  </Card>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeriodicTable;
