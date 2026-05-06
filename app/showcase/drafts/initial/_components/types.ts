import type { LucideIcon } from 'lucide-react';

export type TabId =
  | 'manifesto'
  | 'foundations'
  | 'architecture'
  | 'components'
  | 'icons'
  | 'decorative';

export type BlobVariant = 'A' | 'B' | 'C';
export type IconCategory =
  | 'botanical'
  | 'action'
  | 'communication'
  | 'system'
  | 'data';
export type IconStrokeWidth = 1.5 | 2.5;

export interface IconItem {
  name: string;
  icon: LucideIcon;
}

export interface IconWithCategory extends IconItem {
  category: IconCategory;
}

export interface NavTab {
  id: TabId;
  label: string;
  icon: LucideIcon;
  color: string;
}

export interface SectionHeaderProps {
  title: string;
  sub: string;
  isDarkMode: boolean;
  hexColor?: string;
  blobVariant?: BlobVariant;
}

export interface ColorCardProps {
  name: string;
  hex: string;
  desc: string;
  isDarkMode: boolean;
}

export interface ThemeProps {
  isDarkMode: boolean;
}
