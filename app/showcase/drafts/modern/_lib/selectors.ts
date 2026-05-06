import type { IconEntry, IconLibrary } from './types';

export function flattenIconLibrary(library: IconLibrary): IconEntry[] {
  return Object.entries(library).flatMap(([category, icons]) =>
    icons.map((icon) => ({ ...icon, category: category as IconEntry['category'] })),
  );
}

export function filterIcons(icons: IconEntry[], query: string): IconEntry[] {
  const normalized = query.toLowerCase();
  return icons.filter((icon) => icon.name.toLowerCase().includes(normalized));
}
