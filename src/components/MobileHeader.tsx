import { Avatar, Badge, Typography } from 'antd';
import { BellOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface MobileHeaderProps {
  userName: string;
  avatarUrl?: string;
  notificationCount?: number;
}

export const MobileHeader = ({ userName, avatarUrl, notificationCount = 0 }: MobileHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white mobile-shadow-lg safe-area-top">
      <div className="flex items-center space-x-3">
        <Avatar 
          size={44} 
          src={avatarUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"}
          className="ring-2 ring-blue-100"
        />
        <div>
          <Text className="text-gray-500 text-sm block">Good morning</Text>
          <Text className="text-gray-900 font-semibold text-lg">{userName}</Text>
        </div>
      </div>
      
      <Badge count={notificationCount} size="small">
        <div className="w-11 h-11 bg-gray-50 rounded-full flex items-center justify-center">
          <BellOutlined className="text-gray-600 text-lg" />
        </div>
      </Badge>
    </div>
  );
};