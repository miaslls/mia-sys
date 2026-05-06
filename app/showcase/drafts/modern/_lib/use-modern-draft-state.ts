'use client';

import { useEffect, useMemo, useState } from 'react';
import { iconLibrary } from './constants';
import { filterIcons, flattenIconLibrary } from './selectors';
import type { ModernTabId, StrokeWidthOption } from './types';

export function useModernDraftState() {
  const [activeTab, setActiveTab] = useState<ModernTabId>('manifesto');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [strokeWidth, setStrokeWidth] = useState<StrokeWidthOption>(2.5);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#0B0E14' : '#F7F3F3';
  }, [isDarkMode]);

  const allIcons = useMemo(() => flattenIconLibrary(iconLibrary), []);
  const filteredIcons = useMemo(
    () => filterIcons(allIcons, searchQuery),
    [allIcons, searchQuery],
  );

  const toggleDarkMode = () => setIsDarkMode((value) => !value);

  return {
    activeTab,
    setActiveTab,
    isDarkMode,
    toggleDarkMode,
    searchQuery,
    setSearchQuery,
    strokeWidth,
    setStrokeWidth,
    filteredIcons,
  };
}
