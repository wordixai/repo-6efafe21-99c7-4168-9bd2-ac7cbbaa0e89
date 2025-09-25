import { Avatar, Typography } from 'antd';

const { Text } = Typography;

interface TransactionItemProps {
  avatar: string;
  name: string;
  description: string;
  amount: string;
  isIncoming: boolean;
  time: string;
}

export const TransactionItem = ({ 
  avatar, 
  name, 
  description, 
  amount, 
  isIncoming, 
  time 
}: TransactionItemProps) => {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center space-x-3">
        <Avatar size={44} src={avatar} />
        <div>
          <Text className="text-gray-900 font-medium block">{name}</Text>
          <Text className="text-gray-500 text-sm">{description}</Text>
        </div>
      </div>
      
      <div className="text-right">
        <Text className={`font-semibold ${isIncoming ? 'text-green-500' : 'text-gray-900'}`}>
          {isIncoming ? '+' : '-'}{amount}
        </Text>
        <Text className="text-gray-400 text-xs block">{time}</Text>
      </div>
    </div>
  );
};