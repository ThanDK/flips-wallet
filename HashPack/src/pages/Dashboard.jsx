import React from 'react';
import { Card } from '../components/ui/Card';
import StatCard from '../components/ui/StatCard';
import BalanceChart from '../components/dashboard/BalanceChart';
import AllocationPie from '../components/dashboard/AllocationPie';
import RevenueBar from '../components/dashboard/RevenueBar';
import { DollarSign, PieChart, TrendingUp, Layers } from 'lucide-react';
import { walletBalance, investmentStats } from '../data/mockData';

const Dashboard = () => {
    return (
        <div className="space-y-6 max-w-7xl mx-auto">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
                <p className="text-gray-500 text-sm">Track your investments and portfolio performance</p>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard label="Total Balance" value={`$${walletBalance.totalUsd.toLocaleString()}`} icon={DollarSign} dark />
                <StatCard label="Portfolio Value" value={`$${walletBalance.assets.amount.toLocaleString()}`} icon={PieChart} dark />
                <StatCard label="Total Investments" value={investmentStats.activeProjects} icon={Layers} dark />
                <StatCard label="Average ROI" value={`+${walletBalance.roi.percentage}%`} icon={TrendingUp} dark />
            </div>

            {/* Charts Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RevenueBar />
                <AllocationPie />
            </div>

            {/* Charts Row 2 */}
            <div>
                <BalanceChart />
            </div>

            {/* Investment Performance Bar Chart (Placeholder for simplicity, re-using revenue structure if needed or creating new) */}
            {/* Note: The reference image showed more charts, but these 3 cover the main types. Adding simpler placeholder for bottom section. */}

            {/* Portfolio Assets Table */}
            <Card>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-gray-900">My Portfolio Assets</h3>
                    <button className="text-sm text-primary font-medium hover:underline">Manage Assets</button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-xs text-gray-400 border-b border-gray-100 uppercase tracking-wider">
                                <th className="py-3 font-medium">Asset</th>
                                <th className="py-3 font-medium">Price</th>
                                <th className="py-3 font-medium text-right">Balance</th>
                                <th className="py-3 font-medium text-right">Value</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {/* We'll use a combined list of tokens and investments for display */}
                            {[
                                { id: 'flips', name: 'FLIPS Token', symbol: 'FLIPS', type: 'Utility', price: 0.15, balance: 8500, icon: 'gem', color: 'bg-cyan-500' },
                                { id: 'tbf', name: 'TBFC (Yacht Club)', symbol: 'TBFC', type: 'Partner', price: 5.50, balance: 0, icon: 'anchor', color: 'bg-blue-800' },
                                { id: 'slr', name: 'Sanam Luang Retro', symbol: 'SLR', type: 'Movie Share', price: 10.00, balance: 50000, icon: 'clapperboard', color: 'bg-indigo-500' },
                                { id: 'obr', name: 'Ong Bak Remastered', symbol: 'OBR', type: 'Movie Share', price: 12.00, balance: 100000, icon: 'clapperboard', color: 'bg-indigo-500' }
                            ].map((asset) => (
                                <tr key={asset.id} className="group hover:bg-gray-50 transition-colors">
                                    <td className="py-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 rounded-full ${asset.color} flex items-center justify-center text-white shadow-sm`}>
                                                <span className="font-bold text-xs">{asset.symbol.substring(0, 2)}</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900">{asset.name}</p>
                                                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-600">
                                                    {asset.type}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4">
                                        <span className="text-sm font-medium text-gray-600">${asset.price.toFixed(2)}</span>
                                    </td>
                                    <td className="py-4 text-right">
                                        <p className="font-bold text-gray-900">{asset.balance.toLocaleString()}</p>
                                        <span className="text-xs text-gray-400">{asset.symbol}</span>
                                    </td>
                                    <td className="py-4 text-right">
                                        <p className="font-bold text-gray-900">${(asset.price * asset.balance).toLocaleString()}</p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default Dashboard;
