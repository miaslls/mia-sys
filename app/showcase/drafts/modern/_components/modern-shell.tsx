import type { ReactNode } from 'react';

interface ModernShellProps {
  isDarkMode: boolean;
  children: ReactNode;
}

export function ModernShell({ isDarkMode, children }: ModernShellProps) {
  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div
        className={`min-h-screen font-sans transition-colors duration-700 ${
          isDarkMode ? 'bg-[#0B0E14] text-white' : 'bg-[#F7F3F3] text-zinc-900'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
