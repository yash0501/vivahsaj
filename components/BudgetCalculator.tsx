"use client";

import { useState, useEffect } from 'react';
import { PieChart, Save, Plus, Trash2 } from 'lucide-react';

const defaultCategories = [
  { id: 1, name: 'Venue & Catering', percentage: 40, budget: 0, actual: 0 },
  { id: 2, name: 'Photography & Video', percentage: 12, budget: 0, actual: 0 },
  { id: 3, name: 'Attire & Beauty', percentage: 10, budget: 0, actual: 0 },
  { id: 4, name: 'Decor & Flowers', percentage: 10, budget: 0, actual: 0 },
  { id: 5, name: 'Music & Entertainment', percentage: 8, budget: 0, actual: 0 },
  { id: 6, name: 'Invitations & Stationery', percentage: 3, budget: 0, actual: 0 },
  { id: 7, name: 'Wedding Rings', percentage: 3, budget: 0, actual: 0 },
  { id: 8, name: 'Transportation', percentage: 3, budget: 0, actual: 0 },
  { id: 9, name: 'Gifts', percentage: 2, budget: 0, actual: 0 },
  { id: 10, name: 'Contingency Fund', percentage: 9, budget: 0, actual: 0 },
];

export default function BudgetCalculator() {
  const [totalBudget, setTotalBudget] = useState<number>(0);
  const [categories, setCategories] = useState(defaultCategories);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryPercentage, setNewCategoryPercentage] = useState(0);
  const [savedMessage, setSavedMessage] = useState<string | null>(null);

  useEffect(() => {
    // Update budgets whenever total budget changes
    const updatedCategories = categories.map(cat => ({
      ...cat,
      budget: Math.round((totalBudget * cat.percentage) / 100)
    }));
    setCategories(updatedCategories);
  }, [totalBudget]); // Remove categories from dependency array to prevent infinite loop

  // Load saved budget from localStorage on component mount
  useEffect(() => {
    const savedBudget = localStorage.getItem('weddingBudget');
    if (savedBudget) {
      try {
        const { totalBudget, categories } = JSON.parse(savedBudget);
        setTotalBudget(totalBudget);
        setCategories(categories);
      } catch (e) {
        console.error("Failed to load saved budget:", e);
      }
    }
  }, []);

  const totalActual = categories.reduce((sum, category) => sum + category.actual, 0);
  const totalRemaining = totalBudget - totalActual;
  const totalPercentage = categories.reduce((sum, category) => sum + category.percentage, 0);

  const handleActualExpenseChange = (id: number, value: number) => {
    const updatedCategories = categories.map(category => 
      category.id === id ? { ...category, actual: value } : category
    );
    setCategories(updatedCategories);
  };

  const handlePercentageChange = (id: number, percentage: number) => {
    const updatedCategories = categories.map(category => {
      if (category.id === id) {
        const newBudget = Math.round((totalBudget * percentage) / 100);
        return { ...category, percentage, budget: newBudget };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  const addNewCategory = () => {
    if (!newCategoryName || newCategoryPercentage <= 0) return;
    
    const newId = Math.max(...categories.map(cat => cat.id)) + 1;
    const newBudget = Math.round((totalBudget * newCategoryPercentage) / 100);
    
    const newCategory = {
      id: newId,
      name: newCategoryName,
      percentage: newCategoryPercentage,
      budget: newBudget,
      actual: 0
    };
    
    setCategories([...categories, newCategory]);
    setNewCategoryName('');
    setNewCategoryPercentage(0);
  };

  const deleteCategory = (id: number) => {
    setCategories(categories.filter(category => category.id !== id));
  };

  const saveToLocalStorage = () => {
    localStorage.setItem('weddingBudget', JSON.stringify({
      totalBudget,
      categories
    }));
    setSavedMessage('Budget saved successfully!');
    setTimeout(() => setSavedMessage(null), 3000);
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Set Your Budget</h2>
          <div className="mb-4">
            <label htmlFor="totalBudget" className="block text-sm font-medium text-gray-700 mb-1">
              Total Wedding Budget
            </label>
            <div className="flex items-center">
              <span className="bg-gray-100 p-2 rounded-l-md border border-gray-300">₹</span>
              <input
                type="number"
                id="totalBudget"
                value={totalBudget}
                onChange={(e) => setTotalBudget(Number(e.target.value))}
                className="flex-grow p-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                placeholder="Enter your total budget"
              />
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Total Budget:</span>
              <span className="font-bold">₹{totalBudget.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Spent So Far:</span>
              <span className="font-bold text-red-600">₹{totalActual.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Remaining:</span>
              <span className={`font-bold ${totalRemaining < 0 ? 'text-red-600' : 'text-green-600'}`}>
                ₹{totalRemaining.toLocaleString()}
              </span>
            </div>
          </div>
          
          <div className="flex items-center mt-6 justify-between flex-wrap gap-4">
            <button
              onClick={saveToLocalStorage}
              className="flex items-center bg-brand-primary text-white py-2 px-4 rounded-md hover:bg-brand-primary-dark transition"
            >
              <Save className="w-4 h-4 mr-2" /> Save Budget
            </button>
            <div className="flex items-center text-sm text-text-secondary">
              <PieChart className="w-4 h-4 mr-2" />
              <span>Total allocation: {totalPercentage}%</span>
            </div>
          </div>
          {savedMessage && (
            <div className="mt-2 bg-green-50 text-green-800 p-2 rounded-md text-sm">
              {savedMessage}
            </div>
          )}
        </div>
        
        <div className="mt-6 md:mt-0">
          <h2 className="text-xl font-bold mb-4">Add Custom Category</h2>
          <div className="mb-3">
            <label htmlFor="newCategory" className="block text-sm font-medium text-gray-700 mb-1">
              Category Name
            </label>
            <input
              type="text"
              id="newCategory"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
              placeholder="E.g., Wedding Planner"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="newPercentage" className="block text-sm font-medium text-gray-700 mb-1">
              Budget Percentage (%)
            </label>
            <input
              type="number"
              id="newPercentage"
              value={newCategoryPercentage}
              onChange={(e) => setNewCategoryPercentage(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
              placeholder="E.g., 5"
              min="0"
              max="100"
            />
          </div>
          
          <button
            onClick={addNewCategory}
            className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition flex items-center justify-center"
          >
            <Plus className="w-4 h-4 mr-2" /> Add Category
          </button>
          
          <div className="mt-6 text-sm text-text-secondary">
            <p>Standard budget allocations are pre-populated based on industry averages, but you can customize them to fit your unique wedding priorities.</p>
          </div>
        </div>
      </div>
      
      {/* Mobile-friendly budget breakdown for small screens */}
      <div className="border-t border-gray-200 pt-6 md:hidden">
        <h2 className="text-xl font-bold mb-4">Budget Breakdown</h2>
        
        <div className="space-y-4">
          {categories.map((category) => {
            const remaining = category.budget - category.actual;
            
            return (
              <div key={category.id} className="border rounded-lg p-4 bg-white shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-brand-primary">{category.name}</h3>
                  {category.id > 10 && (
                    <button
                      onClick={() => deleteCategory(category.id)}
                      className="text-red-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="text-sm text-gray-600">Allocation:</div>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={category.percentage}
                      onChange={(e) => handlePercentageChange(category.id, Number(e.target.value))}
                      className="w-16 p-1 border border-gray-300 rounded text-sm"
                      min="0"
                      max="100"
                    />
                    <span className="ml-1">%</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="text-sm text-gray-600">Budget:</div>
                  <div className="font-medium">₹{category.budget.toLocaleString()}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="text-sm text-gray-600">Actual:</div>
                  <input
                    type="number"
                    value={category.actual}
                    onChange={(e) => handleActualExpenseChange(category.id, Number(e.target.value))}
                    className="w-full p-1 border border-gray-300 rounded text-sm"
                    min="0"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-sm text-gray-600">Remaining:</div>
                  <div className={`font-medium ${remaining < 0 ? 'text-red-600' : 'text-green-600'}`}>
                    ₹{remaining.toLocaleString()}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Desktop table view for larger screens */}
      <div className="border-t border-gray-200 pt-6 hidden md:block">
        <h2 className="text-xl font-bold mb-4">Budget Breakdown</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 text-sm font-semibold text-gray-600">Category</th>
                <th className="p-3 text-sm font-semibold text-gray-600">Allocation (%)</th>
                <th className="p-3 text-sm font-semibold text-gray-600">Budget Amount</th>
                <th className="p-3 text-sm font-semibold text-gray-600">Actual Expenses</th>
                <th className="p-3 text-sm font-semibold text-gray-600">Remaining</th>
                <th className="p-3 text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => {
                const remaining = category.budget - category.actual;
                return (
                  <tr key={category.id} className="border-b border-gray-100">
                    <td className="p-3 font-medium">{category.name}</td>
                    <td className="p-3">
                      <input
                        type="number"
                        value={category.percentage}
                        onChange={(e) => handlePercentageChange(category.id, Number(e.target.value))}
                        className="w-16 p-1 border border-gray-300 rounded"
                        min="0"
                        max="100"
                      />
                      %
                    </td>
                    <td className="p-3">₹{category.budget.toLocaleString()}</td>
                    <td className="p-3">
                      <input
                        type="number"
                        value={category.actual}
                        onChange={(e) => handleActualExpenseChange(category.id, Number(e.target.value))}
                        className="w-28 p-1 border border-gray-300 rounded"
                        min="0"
                      />
                    </td>
                    <td className={`p-3 font-medium ${remaining < 0 ? 'text-red-600' : 'text-green-600'}`}>
                      ₹{remaining.toLocaleString()}
                    </td>
                    <td className="p-3">
                      {category.id > 10 && (
                        <button
                          onClick={() => deleteCategory(category.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
