import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import FinancialMetric from '@/lib/models/FinancialMetric'; // Updated model name

// PUT handler: Update a specific financial metric
export async function PUT(request, { params }) {
  const { id } = params;
  const {
    revenue,
    expenses,
    profit,
    loss,
    cogs,
    grossMargin,
    netIncome,
    clv,
    cac,
    roi,
    churnRate,
    month,
    year,
  } = await request.json();

  try {
    await connectToDatabase();
    const updatedMetric = await FinancialMetric.findByIdAndUpdate(
      id,
      {
        revenue,
        expenses,
        profit,
        loss,
        cogs,
        grossMargin,
        netIncome,
        clv,
        cac,
        roi,
        churnRate,
        month,
        year,
      },
      { new: true }
    );
    return NextResponse.json(updatedMetric);
  } catch (error) {
    console.error('Error updating financial metric:', error);
    return NextResponse.json({ message: 'Failed to update metric' }, { status: 500 });
  }
}

// DELETE handler: Delete a specific financial metric
export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await connectToDatabase();
    await FinancialMetric.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Metric deleted successfully' });
  } catch (error) {
    console.error('Error deleting financial metric:', error);
    return NextResponse.json({ message: 'Failed to delete metric' }, { status: 500 });
  }
}
