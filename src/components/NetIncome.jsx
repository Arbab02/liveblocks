'use client'
// components/FinancialCalculators/NetIncome.js
import { useState } from "react";
import { FaClipboard } from "react-icons/fa";

const NetIncome = () => {
  const [revenue, setRevenue] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [taxes, setTaxes] = useState(0);

  const calculateNetIncome = revenue - expenses - taxes;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    });
  };

  return (
    <div className="p-6 mx-auto bg-white rounded-xl shadow-lg space-y-6 w-full sm:w-1/2 md:w-1/3">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Net Income</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700">Revenue</label>
          <input
            type="number"
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter revenue"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700">Expenses</label>
          <input
            type="number"
            value={expenses}
            onChange={(e) => setExpenses(Number(e.target.value))}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter expenses"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700">Taxes</label>
          <input
            type="number"
            value={taxes}
            onChange={(e) => setTaxes(Number(e.target.value))}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter taxes"
            min="0"
          />
        </div>
      </div>

      <div className="space-y-2 mt-4">
        <p className="text-sm">
          <strong>Net Income:</strong> ${calculateNetIncome.toFixed(2)} 
          <button
            onClick={() => copyToClipboard(calculateNetIncome.toFixed(2))}
            className="ml-2 p-1 text-gray-600 hover:text-blue-600"
          >
            <FaClipboard />
          </button>
        </p>
      </div>
    </div>
  );
};

export default NetIncome;
