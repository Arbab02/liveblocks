'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [metrics, setMetrics] = useState([]);
  const [form, setForm] = useState({
    revenue: '',
    expenses: '',
    profit: '',
    loss: '',
    cogs: '',
    grossMargin: '',
    netIncome: '',
    clv: '',
    cac: '',
    roi: '',
    churnRate: '',
    month: '',
    year: '',
  });
  const [editId, setEditId] = useState(null); // For tracking the metric being edited

  // Fetch all metrics from the database
  const fetchMetrics = async () => {
    const res = await fetch('/api/metrics');
    const data = await res.json();
    setMetrics(data);
  };

  // Initial data fetch on component load
  useEffect(() => {
    fetchMetrics();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(editId ? `/api/metrics/${editId}` : '/api/metrics', {
        method: editId ? 'PUT' : 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        setForm({
          revenue: '',
          expenses: '',
          profit: '',
          loss: '',
          cogs: '',
          grossMargin: '',
          netIncome: '',
          clv: '',
          cac: '',
          roi: '',
          churnRate: '',
          month: '',
          year: '',
        });
        setEditId(null); // Clear edit state
        fetchMetrics();
      } else {
        console.error('Error creating or updating financial metric');
      }
    } catch (error) {
      console.error('Failed to submit form:', error);
    }
  };

  // Handle metric deletion
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/metrics/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        fetchMetrics();
      } else {
        console.error('Error deleting financial metric');
      }
    } catch (error) {
      console.error('Failed to delete metric:', error);
    }
  };

  // Handle metric edit
  const handleEdit = (metric) => {
    setForm({
      name: metric.revenue,
      course: metric.expenses,
      rollNo: metric.profit,
      batch: metric.loss,
      timing: metric.cogs,
      grossMargin: metric.grossMargin,
      netIncome: metric.netIncome,
      clv: metric.clv,
      cac: metric.cac,
      roi: metric.roi,
      churnRate: metric.churnRate,
      month: metric.month,
      year: metric.year,

    });
    setEditingId(metric._id);
  };

  return (
    <main className="p-8 pt-28">
      <h1 className="text-3xl font-bold text-center mb-6">Finance Management</h1>

      {/* Form to add or edit financial metrics */}
      <form onSubmit={handleSubmit} className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.keys(form).map((key) => (
          <div key={key}>
            <label htmlFor={key} className="block text-sm font-medium text-gray-700 mb-1">
              {key
                .replace(/([A-Z])/g, ' $1') // Add space before capital letters
                .replace(/^./, (str) => str.toUpperCase())} {/* Capitalize the first letter */}
            </label>
            <input
              id={key}
              type={key === 'year' ? 'number' : 'text'}
              value={form[key]}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
              required
              className="border rounded-md p-2 w-full"
              placeholder={`Enter ${key}`}
            />
          </div>
        ))}
        <button
          type="submit"
          className="col-span-1 md:col-span-2 bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700"
        >
          {editId ? 'Update Financial Metric' : 'Add Financial Metric'}
        </button>
      </form>

      {/* Display list of financial metrics */}
      <ul className="space-y-4">
        {metrics.map((metric) => (
          <li
            key={metric._id}
            className="p-4 border rounded shadow-sm bg-gray-50"
          >
            <h2 className="text-lg font-bold mb-2">
              {metric.month} {metric.year}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              <p><strong>Revenue:</strong> {metric.revenue}</p>
              <p><strong>Expenses:</strong> {metric.expenses}</p>
              <p><strong>Profit:</strong> {metric.profit}</p>
              <p><strong>Loss:</strong> {metric.loss}</p>
              <p><strong>COGS:</strong> {metric.cogs}</p>
              <p><strong>Gross Margin:</strong> {metric.grossMargin}</p>
              <p><strong>Net Income:</strong> {metric.netIncome}</p>
              <p><strong>CLV:</strong> {metric.clv}</p>
              <p><strong>CAC:</strong> {metric.cac}</p>
              <p><strong>ROI:</strong> {metric.roi}</p>
              <p><strong>Churn Rate:</strong> {metric.churnRate}</p>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => handleEdit(metric)}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(metric._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
