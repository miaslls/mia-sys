'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArchitectureSection } from './_components/ArchitectureSection';
import { ComponentsSection } from './_components/ComponentsSection';
import { DecorativeSection } from './_components/DecorativeSection';
import { FoundationsSection } from './_components/FoundationsSection';
import { IconsSection } from './_components/IconsSection';
import { ManifestoSection } from './_components/ManifestoSection';
import { MobileHeader } from './_components/MobileHeader';
import { PageFooter } from './_components/PageFooter';
import { SidebarNav } from './_components/SidebarNav';
import { iconLibrary } from './_components/constants';
import type { IconStrokeWidth, IconWithCategory, TabId } from './_components/types';

export default function InitialDraftPage() {
  const [activeTab, setActiveTab] = useState<TabId>('manifesto');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [strokeWidth, setStrokeWidth] = useState<IconStrokeWidth>(2.5);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#0B0E14' : '#F7F3F3';
  }, [isDarkMode]);

  const allIcons = useMemo<IconWithCategory[]>(
    () =>
      Object.entries(iconLibrary).flatMap(([category, icons]) =>
        icons.map((iconItem) => ({ ...iconItem, category: category as IconWithCategory['category'] })),
      ),
    [],
  );

  const filteredIcons = useMemo(
    () => allIcons.filter((iconItem) => iconItem.name.toLowerCase().includes(searchQuery.toLowerCase())),
    [allIcons, searchQuery],
  );

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div
        className={`min-h-screen font-sans transition-colors duration-700 ${
          isDarkMode ? 'bg-[#0B0E14] text-white' : 'bg-[#F7F3F3] text-zinc-900'
        }`}
      >
        <SidebarNav
          activeTab={activeTab}
          isDarkMode={isDarkMode}
          onTabChange={setActiveTab}
          onThemeToggle={toggleTheme}
        />
        <MobileHeader isDarkMode={isDarkMode} onThemeToggle={toggleTheme} />

        <main className='min-h-screen px-8 transition-all duration-500 lg:ml-72 lg:px-24'>
          <div className='mx-auto max-w-7xl pb-48 pt-32 lg:pt-24'>
            {activeTab === 'manifesto' && <ManifestoSection isDarkMode={isDarkMode} />}
            {activeTab === 'foundations' && <FoundationsSection isDarkMode={isDarkMode} />}
            {activeTab === 'architecture' && <ArchitectureSection isDarkMode={isDarkMode} />}
            {activeTab === 'components' && <ComponentsSection isDarkMode={isDarkMode} />}
            {activeTab === 'icons' && (
              <IconsSection
                isDarkMode={isDarkMode}
                searchQuery={searchQuery}
                strokeWidth={strokeWidth}
                filteredIcons={filteredIcons}
                onSearchChange={setSearchQuery}
                onStrokeWidthChange={setStrokeWidth}
              />
            )}
            {activeTab === 'decorative' && <DecorativeSection isDarkMode={isDarkMode} />}
          </div>
          <PageFooter isDarkMode={isDarkMode} />
        </main>
      </div>
    </div>
  );
}
