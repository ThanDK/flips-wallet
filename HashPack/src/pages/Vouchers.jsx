import React, { useState } from 'react';
import { vouchers, myVouchers } from '../data/mockData';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Search, Tag, QrCode, Ticket, Gem, Anchor, Clapperboard, X } from 'lucide-react';

const Vouchers = () => {
    const [activeTab, setActiveTab] = useState('my-vouchers'); // 'my-vouchers' | 'store'
    const [qrModalOpen, setQrModalOpen] = useState(false);
    const [selectedVoucher, setSelectedVoucher] = useState(null);

    const handleOpenQr = (voucher) => {
        setSelectedVoucher(voucher);
        setQrModalOpen(true);
    };

    const getCurrencyIcon = (currency) => {
        switch (currency) {
            case 'FLIPS': return <Gem className="w-4 h-4" />;
            case 'TBFC': return <Anchor className="w-4 h-4" />;
            case 'BG2': return <Clapperboard className="w-4 h-4" />;
            default: return <Gem className="w-4 h-4" />;
        }
    };

    return (
        <div className="space-y-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-2">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Rewards Center</h2>
                    <p className="text-gray-500 text-sm">Manage your vouchers and redeem exclusive partner rewards.</p>
                </div>

                {/* Main Tabs */}
                <div className="bg-gray-100 p-1 rounded-xl flex gap-1">
                    <button
                        onClick={() => setActiveTab('my-vouchers')}
                        className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'my-vouchers'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >
                        My Vouchers
                    </button>
                    <button
                        onClick={() => setActiveTab('store')}
                        className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'store'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >
                        Redeem Rewards
                    </button>
                </div>
            </div>

            {/* MY VOUCHERS TAB */}
            {activeTab === 'my-vouchers' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Placeholder for Empty State if needed */}
                    {myVouchers.length === 0 && (
                        <div className="col-span-full py-20 text-center">
                            <Ticket className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-400">No vouchers yet</h3>
                            <p className="text-gray-400">Go to the store to redeem rewards!</p>
                            <Button className="mt-4" onClick={() => setActiveTab('store')}>Go to Store</Button>
                        </div>
                    )}

                    {myVouchers.map(voucher => (
                        <Card key={voucher.id} padding="p-0" className="overflow-hidden bg-white border border-gray-200">
                            <div className="flex h-full">
                                {/* Left Side (Image) */}
                                <div className="w-1/3 relative">
                                    <img
                                        src={voucher.image}
                                        alt={voucher.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/10"></div>
                                </div>

                                {/* Right Side (Info) */}
                                <div className="w-2/3 p-4 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-1">
                                            <Badge className="bg-blue-50 text-blue-700 border-blue-100 text-[10px] px-1.5 py-0.5">
                                                {voucher.partner}
                                            </Badge>
                                            {voucher.status === 'Active' && (
                                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                            )}
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-sm leading-tight mb-1">{voucher.title}</h3>
                                        <p className="text-xs text-gray-400">{voucher.purchaseDate}</p>
                                    </div>

                                    <Button
                                        size="sm"
                                        className="w-full mt-3 bg-gray-900 text-white flex items-center justify-center gap-2 text-xs"
                                        onClick={() => handleOpenQr(voucher)}
                                    >
                                        <QrCode className="w-3 h-3" />
                                        Show QR Code
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            )}

            {/* STORE TAB */}
            {activeTab === 'store' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {vouchers.map(voucher => (
                        <Card key={voucher.id} padding="p-0" className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow border-gray-100 group">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={voucher.image}
                                    alt={voucher.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-3 left-3">
                                    <Badge className="bg-white/90 text-gray-900 border-0 shadow-sm backdrop-blur-sm font-bold flex items-center gap-1">
                                        <Tag className="w-3 h-3" /> {voucher.partner}
                                    </Badge>
                                </div>
                            </div>

                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="font-bold text-gray-900 text-lg mb-1 leading-tight">{voucher.title}</h3>
                                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Requires</p>
                                        <div className={`flex items-center gap-1.5 font-bold text-lg ${voucher.currency === 'FLIPS' ? 'text-cyan-600' :
                                                voucher.currency === 'TBFC' ? 'text-blue-800' : 'text-indigo-600'
                                            }`}>
                                            {getCurrencyIcon(voucher.currency)}
                                            <span>{voucher.priceAmount} {voucher.currency}</span>
                                        </div>
                                    </div>
                                    <Button size="sm" variant="outline">Redeem</Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            )}

            {/* QR Code Modal Overlay */}
            {qrModalOpen && selectedVoucher && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-3xl p-6 w-full max-w-sm relative shadow-2xl scale-100 animate-in zoom-in-95 duration-200">
                        <button
                            onClick={() => setQrModalOpen(false)}
                            className="absolute right-4 top-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        <div className="text-center mb-6">
                            <h3 className="font-bold text-gray-900 text-lg">{selectedVoucher.partner}</h3>
                            <p className="text-gray-500 text-sm">{selectedVoucher.title}</p>
                        </div>

                        <div className="bg-white p-4 rounded-xl border-2 border-dashed border-gray-200 mb-6 flex justify-center">
                            {/* Simple CSS simulated QR for now, or use an image */}
                            <div className="w-48 h-48 bg-gray-900 p-2 relative">
                                <div className="w-full h-full bg-white flex items-center justify-center">
                                    {/* Placeholder QR Pattern */}
                                    <div className="grid grid-cols-4 gap-1 w-32 h-32">
                                        {[...Array(16)].map((_, i) => (
                                            <div key={i} className={`bg-black ${Math.random() > 0.5 ? 'opacity-100' : 'opacity-0'}`}></div>
                                        ))}
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {/* Logo overlay in QR center */}
                                        <div className="bg-white p-1 rounded-full">
                                            {selectedVoucher.partner === 'Colestia' ? <Gem className="w-6 h-6 text-cyan-500" /> : <Ticket className="w-6 h-6 text-gray-900" />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center space-y-2">
                            <div className="bg-gray-50 py-2 px-4 rounded-lg inline-block">
                                <p className="text-xs text-gray-400 font-mono">VOUCHER CODE</p>
                                <p className="font-mono font-bold text-lg tracking-widest text-gray-900">{selectedVoucher.code}</p>
                            </div>
                            <p className="text-xs text-gray-400 mt-4">Show this QR code to the staff at the venue.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Vouchers;
