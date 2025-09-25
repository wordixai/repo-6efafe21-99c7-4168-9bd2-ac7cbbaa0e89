import { Button, Typography } from 'antd';
import { 
  SendOutlined, 
  CreditCardOutlined, 
  QrcodeOutlined, 
  MoreOutlined 
} from '@ant-design/icons';

const { Title } = Typography;

const actions = [
  { icon: <SendOutlined />, label: 'Transfer', color: '#3b82f6' },
  { icon: <CreditCardOutlined />, label: 'Pay Bills', color: '#10b981' },
  { icon: <QrcodeOutlined />, label: 'QR Code', color: '#f59e0b' },
  { icon: <MoreOutlined />, label: 'More', color: '#6b7280' },
];

export const QuickActions = () => {
  return (
    <div className="px-4 py-6">
      <Title level={4} className="!mb-4 !text-gray-900">Quick Actions</Title>
      <div className="grid grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <Button
              shape="circle"
              size="large"
              icon={action.icon}
              className="!w-14 !h-14 !border-0 !text-white mobile-shadow"
              style={{ backgroundColor: action.color }}
            />
            <span className="text-xs text-gray-600 font-medium">{action.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};