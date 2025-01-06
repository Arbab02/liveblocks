'use client'
// components/FinancialCalculators/CLVCACROI.js
import { useState } from "react";
import { FaClipboard } from "react-icons/fa";

const CLVCACROI = () => {
  const [revenue, setRevenue] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [acquisitionCost, setAcquisitionCost] = useState(0);
  const [investment, setInvestment] = useState(0);

  const calculateCLV = customers ? revenue / customers : 0;
  const calculateCAC = customers ? acquisitionCost / customers : 0;
  const calculateROI = investment ? ((revenue - investment) / investment) * 100 : 0;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    });
  };

  return (
    <div className="p-6 mx-auto bg-white rounded-xl shadow-lg space-y-6 w-full sm:w-1/2 md:w-1/3">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">CLV, CAC, and ROI</h2>
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
          <label className="block text-sm text-gray-700">Number of Customers</label>
          <input
            type="number"
            value={customers}
            onChange={(e) => setCustomers(Number(e.target.value))}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter number of customers"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700">Customer Acquisition Cost</label>
          <input
            type="number"
            value={acquisitionCost}
            onChange={(e) => setAcquisitionCost(Number(e.target.value))}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter acquisition cost"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700">Investment</label>
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(Number(e.target.value))}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter investment"
            min="0"
          />
        </div>
      </div>

      <div className="space-y-2 mt-4">
        <p className="text-sm">
          <strong>CLV:</strong> ${calculateCLV.toFixed(2)} 
          <button
            onClick={() => copyToClipboard(calculateCLV.toFixed(2))}
            className="ml-2 p-1 text-gray-600 hover:text-blue-600"
          >
            <FaClipboard />
          </button>
        </p>
        <p className="text-sm">
          <strong>CAC:</strong> ${calculateCAC.toFixed(2)} 
          <button
            onClick={() => copyToClipboard(calculateCAC.toFixed(2))}
            className="ml-2 p-1 text-gray-600 hover:text-blue-600"
          >
            <FaClipboard />
          </button>
        </p>
        <p className="text-sm">
          <strong>ROI:</strong> {calculateROI.toFixed(2)}% 
          <button
            onClick={() => copyToClipboard(calculateROI.toFixed(2))}
            className="ml-2 p-1 text-gray-600 hover:text-blue-600"
          >
            <FaClipboard />
          </button>
        </p>
      </div>
    </div>
  );
};

export default CLVCACROI;
