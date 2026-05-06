'use client';

import { ModernFooter } from './_components/modern-footer';
import { ModernShell } from './_components/modern-shell';
import { ModernTopNav } from './_components/modern-top-nav';
import {
  ArchitectureTab,
  ComponentsTab,
  FoundationsTab,
  IconsTab,
  ManifestoTab,
  SignatureTab,
} from './_components/tabs';
import { navItems } from './_lib/constants';
import { useModernDraftState } from './_lib/use-modern-draft-state';
import type { ModernTabId } from './_lib/types';

export default function ModernDraftPage() {
  const {
    activeTab,
    setActiveTab,
    isDarkMode,
    toggleDarkMode,
    searchQuery,
    setSearchQuery,
    strokeWidth,
    setStrokeWidth,
    filteredIcons,
  } = useModernDraftState();

  const tabContent: Record<ModernTabId, React.ReactNode> = {
    manifesto: <ManifestoTab isDarkMode={isDarkMode} />,
    foundations: <FoundationsTab isDarkMode={isDarkMode} />,
    architecture: <ArchitectureTab isDarkMode={isDarkMode} />,
    components: <ComponentsTab isDarkMode={isDarkMode} />,
    icons: (
      <IconsTab
        isDarkMode={isDarkMode}
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        strokeWidth={strokeWidth}
        onStrokeWidthChange={setStrokeWidth}
        filteredIcons={filteredIcons}
      />
    ),
    signature: <SignatureTab isDarkMode={isDarkMode} />,
  };

  return (
    <ModernShell isDarkMode={isDarkMode}>
      <ModernTopNav
        isDarkMode={isDarkMode}
        activeTab={activeTab}
        navItems={navItems}
        onTabChange={setActiveTab}
        onToggleDarkMode={toggleDarkMode}
      />
      <main className='min-h-screen px-6 md:px-12 lg:px-24 transition-all duration-500 pt-48 pb-64'>
        <div className='max-w-[1200px] mx-auto'>{tabContent[activeTab]}</div>
        <ModernFooter isDarkMode={isDarkMode} />
      </main>
    </ModernShell>
  );
}
