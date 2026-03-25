import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface DeviceFrameProps {
  children: React.ReactNode;
  type: 'mobile' | 'desktop';
  icon?: LucideIcon;
  title?: string;
}

export const DeviceFrame = ({ children, type, icon: Icon, title }: DeviceFrameProps) => {
  if (type === 'mobile') {
    return (
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
        <div className="w-[148px] h-[18px] bg-gray-800 top-0 left-1/2 -translate-x-1/2 rounded-b-[1rem] absolute"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-900">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[450px] max-w-[800px] w-full shadow-2xl">
      <div className="rounded-t-lg overflow-hidden h-full bg-white dark:bg-gray-900">
        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          {title && (
            <div className="flex-1 text-center">
              <span className="text-xs font-mono opacity-50">{title}</span>
            </div>
          )}
        </div>
        <div className="h-[calc(100%-40px)] overflow-auto">
          {children}
        </div>
      </div>
      <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[800px] w-full"></div>
      <div className="relative mx-auto bg-gray-800 h-[32px] w-[96px] rounded-b-xl"></div>
    </div>
  );
};
