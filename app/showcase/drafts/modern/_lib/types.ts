import type { LucideIcon } from 'lucide-react';

export type ModernTabId =
  | 'manifesto'
  | 'foundations'
  | 'architecture'
  | 'components'
  | 'icons'
  | 'signature';

export type BlobVariant = 'A' | 'B' | 'C';
export type StrokeWidthOption = 1.5 | 2.5;

export interface SpacingToken {
  name: string;
  value: string;
}

export interface NavItem {
  id: ModernTabId;
  label: string;
  icon: LucideIcon;
  color: string;
}

export interface IconToken {
  name: string;
  icon: LucideIcon;
}

export type IconCategory =
  | 'botanical'
  | 'action'
  | 'communication'
  | 'system'
  | 'data';

export type IconLibrary = Record<IconCategory, IconToken[]>;

export interface IconEntry extends IconToken {
  category: IconCategory;
}

export interface SectionHeaderProps {
  title: string;
  sub: string;
  isDarkMode: boolean;
  hexColor?: string;
  blobVariant?: BlobVariant;
}
