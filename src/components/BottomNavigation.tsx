import { Badge } from 'antd';
import { 
  HomeOutlined, 
  CreditCardOutlined, 
  BarChartOutlined, 
  MessageOutlined, 
  UserOutlined 
} from '@ant-design/icons';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  { key: 'home', icon: HomeOutlined, label: 'Home' },
  { key: 'cards', icon: CreditCardOutlined, label: 'Cards' },
  { key: 'analytics', icon: BarChartOutlined, label: 'Analytics' },
  { key: 'messages', icon: MessageOutlined, label: 'Messages', badge: 3 },
  { key: 'profile', icon: UserOutlined, label: 'Profile' },
];

export const BottomNavigation = ({ activeTab, onTabChange }: BottomNavigationProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 safe-area-bottom">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.key;
          
          return (
            <button
              key={item.key}
              onClick={() => onTabChange(item.key)}
              className="flex flex-col items-center justify-center py-2 px-3 min-w-0 flex-1"
            >
              <div className="relative">
                {item.badge ? (
                  <Badge count={item.badge} size="small" offset={[4, -4]}>
                    <Icon 
                      className={`text-xl ${isActive ? 'text-blue-500' : 'text-gray-400'}`} 
                    />
                  </Badge>
                ) : (
                  <Icon 
                    className={`text-xl ${isActive ? 'text-blue-500' : 'text-gray-400'}`} 
                  />
                )}
              </div>
              <span 
                className={`text-xs mt-1 font-medium ${
                  isActive ? 'text-blue-500' : 'text-gray-400'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};