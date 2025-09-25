import { Card, Typography } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

interface StatsCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  color: string;
}

export const StatsCard = ({ title, value, change, icon, color }: StatsCardProps) => {
  const isPositive = change >= 0;
  
  return (
    <Card className="mobile-card-gradient border-0 mobile-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <Text className="text-gray-500 text-sm block mb-1">{title}</Text>
          <Title level={3} className="!mb-2 !text-gray-900">{value}</Title>
          <div className="flex items-center space-x-1">
            {isPositive ? (
              <ArrowUpOutlined className="text-green-500 text-xs" />
            ) : (
              <ArrowDownOutlined className="text-red-500 text-xs" />
            )}
            <Text className={`text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {Math.abs(change)}%
            </Text>
          </div>
        </div>
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
      </div>
    </Card>
  );
};