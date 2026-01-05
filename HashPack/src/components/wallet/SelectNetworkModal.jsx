import React, { useState } from 'react';
import { Search, X, ChevronRight, Globe, Layers, Bitcoin, Gem, Clapperboard, Building, Anchor } from 'lucide-react';
import Modal from '../ui/Modal';
import { availableNetworks, tokens } from '../../data/mockData';

const SelectNetworkModal = ({ isOpen, onClose, onSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('all'); // all, crypto, investments

    // Combine all assets for the list
    const allAssets = [
        ...availableNetworks,
        ...tokens
    ];

    const filteredAssets = allAssets.filter(asset => {
        // Exclude the native network token from the list (it's infrastructure)
        if (asset.type === 'Network') return false;

        const matchesSearch = asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            asset.symbol.toLowerCase().includes(searchTerm.toLowerCase());

        if (activeTab === 'tokens') return matchesSearch && (asset.type === 'Utility' || asset.type === 'Partner');
        if (activeTab === 'investments') return matchesSearch && (asset.type === 'Investment');

        return matchesSearch;
    });

    const getIcon = (asset) => {
        if (asset.symbol === 'TRX') return <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">T</div>;

        // Handle specific icons defined in mockData
        if (asset.icon === 'gem') return <div className={`w-10 h-10 rounded-full ${asset.color || 'bg-cyan-500'} flex items-center justify-center text-white`}><Gem className="w-5 h-5" /></div>;
        if (asset.icon === 'clapperboard') return <div className={`w-10 h-10 rounded-full ${asset.color || 'bg-indigo-500'} flex items-center justify-center text-white`}><Clapperboard className="w-5 h-5" /></div>;
        if (asset.icon === 'building') return <div className={`w-10 h-10 rounded-full ${asset.color || 'bg-emerald-500'} flex items-center justify-center text-white`}><Building className="w-5 h-5" /></div>;
        if (asset.icon === 'anchor') return <div className={`w-10 h-10 rounded-full ${asset.color || 'bg-blue-800'} flex items-center justify-center text-white`}><Anchor className="w-5 h-5" /></div>;

        return (
            <div className={`w-10 h-10 rounded-full ${asset.color || 'bg-gray-500'} flex items-center justify-center text-white font-bold text-sm`}>
                {asset.symbol.substring(0, 2)}
            </div>
        );
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Send" maxWidth="max-w-md">
            <div className="space-y-4">
                {/* Network Indicator - Best Practice */}
                <div className="flex items-center justify-between bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-100">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">Tron Network</span>
                    </div>
                    <span className="text-xs text-emerald-600 font-medium">TRC-20</span>
                </div>

                {/* Search Bar */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search assets"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                    />
                </div>

                {/* Quick Filters - Like Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeTab === 'all' ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                        All Assets
                    </button>
                    <button
                        onClick={() => setActiveTab('tokens')}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeTab === 'tokens' ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                        Tokens
                    </button>
                    <button
                        onClick={() => setActiveTab('investments')}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeTab === 'investments' ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                        Investments
                    </button>
                </div>

                {/* Asset List */}
                <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-2 -mr-2">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2 mt-2 ml-1">Available Assets</h3>

                    {filteredAssets.map((asset) => (
                        <button
                            key={asset.id}
                            onClick={() => onSelect(asset)}
                            className="w-full flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors group text-left"
                        >
                            {/* Icon */}
                            <div className="flex-shrink-0 transition-transform group-hover:scale-105">
                                {getIcon(asset)}
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-0.5">
                                    <h4 className="font-bold text-gray-900 truncate">{asset.symbol}</h4>
                                    <span className="font-bold text-gray-900">${asset.price.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-gray-500 truncate flex items-center gap-1">
                                        {asset.name}
                                        {asset.type !== 'Network' && <span className="bg-gray-100 text-gray-600 text-[10px] px-1.5 py-0.5 rounded-md">{asset.type}</span>}
                                    </p>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-500">{asset.balance > 0 ? `${asset.balance.toLocaleString()} ${asset.symbol}` : '0'}</p>
                                    </div>
                                </div>
                            </div>
                        </button>
                    ))}

                    {filteredAssets.length === 0 && (
                        <div className="py-8 text-center text-gray-500">
                            <p>No assets found</p>
                        </div>
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default SelectNetworkModal;
