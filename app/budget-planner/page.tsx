"use client";

import { Calculator } from 'lucide-react';
import BudgetCalculator from '@/components/BudgetCalculator';

export default function BudgetPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-primary-50 rounded-full mb-4">
            <Calculator className="w-6 h-6 text-brand-primary" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Wedding Budget Calculator</h1>
          <p className="text-lg text-text-secondary">
            Plan and track your wedding expenses with our comprehensive budget calculator
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <BudgetCalculator />
        </div>
        
        <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden p-6">
          <h2 className="text-xl font-bold mb-4">Budget Planning Tips</h2>
          <ul className="space-y-3 text-text-secondary">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-primary text-white text-xs mr-3 mt-0.5">1</span>
              <span>Start by setting your total budget based on what you can realistically afford</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-primary text-white text-xs mr-3 mt-0.5">2</span>
              <span>Prioritize expenses based on what matters most to you and your partner</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-primary text-white text-xs mr-3 mt-0.5">3</span>
              <span>Add a 5-10% buffer for unexpected expenses</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-primary text-white text-xs mr-3 mt-0.5">4</span>
              <span>Update your actual expenses regularly to stay on track</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
