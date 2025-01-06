import mongoose from 'mongoose';

const FinancialMetricsSchema = new mongoose.Schema({
  revenue: Number,
  expenses: Number,
  profit: Number,
  loss: Number,
  cogs: Number,
  grossMargin: Number,
  netIncome: Number,
  clv: Number,
  cac: Number,
  roi: Number,
  churnRate: Number,
  month: Number,
  year: Number,
});

const FinancialMetrics = mongoose.models.FinancialMetrics || mongoose.model('FinancialMetrics', FinancialMetricsSchema);

export default FinancialMetrics;
