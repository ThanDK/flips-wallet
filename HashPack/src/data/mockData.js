export const userProfile = {
    name: "James Angle",
    email: "James@gmail.com",
    phone: "095-3332-121",
    dob: "23 Jan 1990", // Approx 35 years old
    age: 35,
    address: "Chiang Mai, Thailand 50300",
    kycStatus: "Verified",
    walletConnected: true,
    avatar: "https://i.pravatar.cc/150?u=james",
};

export const walletBalance = {
    totalUsd: 3620000.00,
    growth: 2.4, // percentage
    fiat: {
        amount: 245000.00,
        currency: "USD",
        growth: 1.2
    },
    crypto: {
        amount: 158000.00,
        growth: 3.5
    },
    trx: {
        amount: 24582.00,
        currency: "TRX"
    },
    assets: {
        amount: 3200000.00,
        growth: 3.5
    },
    roi: {
        percentage: 18.2,
        details: "Since Jan 1, 2024"
    }
};

export const investmentStats = {
    totalValueBTC: "125,000,000",
    totalValueUSD: "3,620,000",
    roi: 185,
    profitBTC: "231,250,000",
    activeProjects: 8,
    totalProfitLabel: "Total Profit Generated"
};

export const availableNetworks = [
    {
        id: "trx",
        name: "Tron",
        symbol: "TRX",
        type: "Network",
        balance: 24582.00,
        price: 0.11,
        change24h: 0.8,
        color: "bg-red-500"
    }
];

export const tokens = [
    {
        id: "flips",
        name: "FLIPS Token",
        symbol: "FLIPS",
        type: "Utility",
        balance: 8500,
        price: 0.15, // USD
        change24h: 5.2,
        icon: "gem",
        color: "bg-cyan-500"
    },
    {
        id: "tbf",
        name: "TBFC (Yacht Club)",
        symbol: "TBFC",
        type: "Partner",
        balance: 0,
        price: 5.50,
        change24h: 0,
        icon: "anchor",
        color: "bg-blue-800",
        claimable: {
            usdt: 0,
            flips: 0
        }
    },
    {
        id: "inv-movie",
        name: "Bad Genius 2 Invest",
        symbol: "BG2",
        type: "Investment",
        balance: 5000,
        price: 1.00,
        change24h: 0,
        icon: "clapperboard",
        color: "bg-indigo-500",
        claimable: {
            usdt: 120.50,
            flips: 50
        }
    },
    {
        id: "inv-condo",
        name: "Luxury Condo Sukhumvit",
        symbol: "LCS",
        type: "Investment",
        balance: 10, // sqm
        price: 3000.00,
        change24h: 2.1,
        icon: "building",
        color: "bg-emerald-500",
        claimable: {
            usdt: 0,
            flips: 0
        }
    }
];

export const transactions = [
    {
        id: "tx1",
        type: "Transfer",
        title: "Transfer Coins",
        date: "Today, 10:42 AM",
        amount: -14.99,
        currency: "USD",
        status: "Success",
        icon: "arrow-right-circle"
    },
    {
        id: "tx2",
        type: "Transfer",
        title: "Transfer Coins",
        date: "Today, 09:15 AM",
        amount: 500.00,
        currency: "USD",
        status: "Pending",
        icon: "wallet"
    },
    {
        id: "tx3",
        type: "Withdraw",
        title: "Withdraw",
        date: "Yesterday, 08:30 PM",
        amount: -120.00,
        currency: "USD",
        status: "Failed",
        icon: "download"
    },
    {
        id: "tx4",
        type: "Deposit",
        title: "Deposit Coins",
        date: "Yesterday, 11:00 AM",
        amount: 50.00,
        currency: "USD",
        status: "Success",
        icon: "plus-circle"
    }
];

export const investments = [
    {
        id: 1,
        name: "Sanam Luang Retro",
        type: "Movie",
        roi: 220,
        invested: 45000000,
        returnVal: 99000000,
        status: "Sold Out",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop",
        tokenId: "inv-movie",
        tokenBalance: 50000,
        tokenPrice: 10.00,
        tokenSymbol: "SLR"
    },
    {
        id: 2,
        name: "Luang Phee Jazz 4G",
        type: "Movie",
        roi: 49,
        invested: 15000000,
        returnVal: 89000000,
        status: "Sold Out",
        image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070&auto=format&fit=crop",
        tokenId: "inv-movie-2",
        tokenBalance: 15000,
        tokenPrice: 8.50,
        tokenSymbol: "LPJ"
    },
    {
        id: 3,
        name: "Ong Bak Remastered",
        type: "Movie",
        roi: 118,
        invested: 115000000,
        returnVal: 55600000,
        status: "In Progress",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop",
        tokenId: "inv-movie-3",
        tokenBalance: 100000,
        tokenPrice: 12.00,
        tokenSymbol: "OBR"
    },
    {
        id: 4,
        name: "Pee Mak Part 2",
        type: "Movie",
        roi: 79,
        invested: 7000000,
        returnVal: 1200000,
        status: "Completed",
        image: "https://images.unsplash.com/photo-1585647347384-2593bc35786b?q=80&w=2070&auto=format&fit=crop",
        tokenId: "inv-movie-4",
        tokenBalance: 25000,
        tokenPrice: 5.00,
        tokenSymbol: "PM2"
    }
];

export const vouchers = [
    {
        id: 1,
        title: "Luxury Condo (Early Bird)",
        type: "Real Estate",
        partner: "Colestia",
        asset: "1 sqm",
        price: 90000,
        priceAmount: 5000,
        currency: "FLIPS",
        image: "https://placehold.co/600x400/10b981/ffffff?text=Luxury+Condo",
        tier: "Tier 1"
    },
    {
        id: 2,
        title: "Yacht Charter (Off-Peak)",
        type: "Yacht",
        partner: "Yacht Club",
        asset: "4 hrs",
        price: 10000,
        priceAmount: 200,
        currency: "TBFC",
        image: "https://placehold.co/600x400/3b82f6/ffffff?text=Yacht+Charter",
        tier: "Tier 1"
    },
    {
        id: 3,
        title: "5-Star Hotel Night",
        type: "Hotel",
        partner: "Colestia",
        asset: "1 night",
        price: 2500,
        priceAmount: 300,
        currency: "FLIPS",
        image: "https://placehold.co/600x400/f59e0b/ffffff?text=5-Star+Hotel",
        tier: "Tier 1"
    },
    {
        id: 4,
        title: "Exclusive Gala Dinner",
        type: "Event",
        partner: "CtrlG",
        asset: "1 Ticket",
        price: 5000,
        priceAmount: 500,
        currency: "BG2",
        image: "https://placehold.co/600x400/6366f1/ffffff?text=Gala+Dinner",
        tier: "VIP"
    }
];

export const myVouchers = [
    {
        id: 101,
        title: "5-Star Hotel Night",
        partner: "Colestia",
        type: "Hotel",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=300&h=200",
        purchaseDate: "12 Dec 2024",
        status: "Active",
        code: "H-123-456-789"
    }
];

export const loginActivity = [
    {
        id: 1,
        device: "Chrome on Windows",
        location: "Bangkok, Thailand",
        lastLogin: "2 minutes ago",
        current: true
    },
    {
        id: 2,
        device: "Safari on iPhone",
        location: "Chiang Mai, Thailand",
        lastLogin: "3 hours ago",
        current: false
    }
];

export const notifications = [
    {
        id: 1,
        type: "success",
        title: "Transaction completed",
        description: "Your investment of 50,000 in Tech Growth Fund has been successfully processed. View your updated portfolio.",
        time: "1 hour ago",
        read: false
    },
    {
        id: 2,
        type: "warning",
        title: "Password expiring soon",
        description: "Your password will expire in 7 days. We recommend changing it now to maintain security.",
        time: "3 hours ago",
        read: false
    },
    {
        id: 3,
        type: "info",
        title: "Dividend payment received",
        description: "You've received a dividend payment of 2,450 from your mutual fund investments. Amount has been credited to your account.",
        time: "2 days ago",
        read: true
    }
];
