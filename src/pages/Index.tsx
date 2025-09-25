import { useState } from 'react';
import { Card, Typography, Divider } from 'antd';
import { 
  WalletOutlined, 
  TrophyOutlined, 
  ShoppingOutlined, 
  CarOutlined 
} from '@ant-design/icons';
import { MobileHeader } from '../components/MobileHeader';
import { StatsCard } from '../components/StatsCard';
import { QuickActions } from '../components/QuickActions';
import { TransactionItem } from '../components/TransactionItem';
import { BottomNavigation } from '../components/BottomNavigation';

const { Title } = Typography;

const mockTransactions = [
  {
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b0e4?w=100&h=100&fit=crop&crop=face",
    name: "Sarah Johnson",
    description: "Payment received",
    amount: "$850.00",
    isIncoming: true,
    time: "2 hours ago"
  },
  {
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    name: "Coffee Shop",
    description: "Purchase",
    amount: "$12.50",
    isIncoming: false,
    time: "5 hours ago"
  },
  {
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    name: "Emma Wilson",
    description: "Money transfer",
    amount: "$200.00",
    isIncoming: true,
    time: "1 day ago"
  },
  {
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    name: "Gas Station",
    description: "Fuel payment",
    amount: "$45.00",
    isIncoming: false,
    time: "2 days ago"
  }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <MobileHeader 
        userName="Alex Rivera" 
        notificationCount={2}
      />

      {/* Balance Card */}
      <div className="px-4 py-6">
        <Card className="mobile-gradient text-white border-0 mobile-shadow-lg">
          <div className="text-center py-4">
            <p className="text-blue-100 text-sm mb-1">Total Balance</p>
            <h2 className="text-3xl font-bold text-white mb-4">$12,548.90</h2>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <p className="text-blue-100 text-xs">Income</p>
                <p className="text-white font-semibold">$8,420.00</p>
              </div>
              <div className="text-center">
                <p className="text-blue-100 text-xs">Expenses</p>
                <p className="text-white font-semibold">$2,890.00</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Stats Grid */}
      <div className="px-4 grid grid-cols-2 gap-4 mb-6">
        <StatsCard 
          title="Savings"
          value="$3,240"
          change={12}
          icon={<WalletOutlined />}
          color="#3b82f6"
        />
        <StatsCard 
          title="Investments"
          value="$8,956"
          change={-2.3}
          icon={<TrophyOutlined />}
          color="#10b981"
        />
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Recent Transactions */}
      <div className="px-4 pb-6">
        <Card className="border-0 mobile-shadow">
          <div className="flex items-center justify-between mb-4">
            <Title level={4} className="!mb-0 !text-gray-900">Recent Transactions</Title>
            <span className="text-blue-500 text-sm font-medium">View All</span>
          </div>
          
          <div className="space-y-1">
            {mockTransactions.map((transaction, index) => (
              <div key={index}>
                <TransactionItem {...transaction} />
                {index < mockTransactions.length - 1 && <Divider className="!my-2" />}
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
    </div>
  );
};

export default Index;