'use client'
// components/FinancialCalculators/ChurnRate.js
import { useState } from "react";
import { FaChartLine,FaClipboard } from "react-icons/fa";

const ChurnRate = () => {
  const [lostCustomers, setLostCustomers] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState(0);

  const calculateChurnRate = totalCustomers ? (lostCustomers / totalCustomers) * 100 : 0;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    });
  };

  return (
    <div className="p-6 inline-bloc bg-white rounded-xl shadow-lg space-y-6 w-full sm:w-1/2 md:w-1/3">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Churn Rate</h2>
        <FaChartLine className="text-blue-600 text-2xl" />
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700">Lost Customers</label>
          <input
            type="number"
            value={lostCustomers}
            onChange={(e) => setLostCustomers(Number(e.target.value))}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter lost customers"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700">Total Customers</label>
          <input
            type="number"
            value={totalCustomers}
            onChange={(e) => setTotalCustomers(Number(e.target.value))}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter total customers"
            min="0"
          />
        </div>
      </div>

      <div className="space-y-2 mt-4">
        <p className="text-sm">
          <strong>Churn Rate:</strong> {calculateChurnRate.toFixed(2)}% 
          <button
            onClick={() => copyToClipboard(calculateChurnRate.toFixed(2))}
            className="ml-2 p-1 text-blue-600 hover:text-blue-800"
          >
            <FaClipboard />
          </button>
        </p>
      </div>
    </div>
  );
};

export default ChurnRate;
