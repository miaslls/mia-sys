'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Palette,
  Type,
  Layout,
  Sun,
  Moon,
  Leaf,
  MoveRight,
  Maximize2,
  MousePointer2,
  AlertCircle,
  CheckCircle2,
  Info,
  Shapes,
  Wind,
  Sparkles,
  Zap,
  Search,
  Settings,
  Bell,
  Heart,
  SquareStack,
  Brush,
  Smartphone,
  Monitor,
  Layers,
  Fingerprint,
  RotateCcw,
  Plus,
  Trash,
  Download,
  Share,
  Mail,
  Phone,
  MapPin,
  User,
  Image,
  FileText,
  Cloud,
  Activity,
  Database,
  Columns,
  MessageSquare,
  Lock,
  Unlock,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ExternalLink,
  Eye,
  EyeOff,
  Filter,
  Flag,
  Home,
  Star,
  Trash2,
  Clock,
  Calendar,
  Camera,
  Play,
  Pause,
  Wifi,
  Battery,
  HardDrive,
  Cpu,
  Globe,
  Key,
  RefreshCw,
  Send,
  Users,
  MessageCircle,
  AtSign,
  Link,
  Gift,
  Smile,
  Languages,
  Hash,
  Megaphone,
  Radio,
  Shield,
  ShieldCheck,
  Terminal,
  Power,
  Bluetooth,
  Map,
  Sprout,
  Trees,
  TreePine,
  Droplets,
  Flame,
  Mountain,
  Waves,
  Bird,
  Bug,
  Ghost,
  BarChart3,
  PieChart,
  Table,
  FileJson,
  Folder,
  Archive,
  Grid,
  List,
  Box,
  Compass,
} from 'lucide-react';

// --- DESIGN TOKENS ---
const tokens = {
  colors: {
    brand: {
      amber: '#FFCA3A',
      rose: '#FF595E',
      azure: '#1982C4',
      lime: '#8AC926',
    },
    states: {
      positive: '#8AC926',
      warning: '#FFCA3A',
      danger: '#FF595E',
      info: '#1982C4',
    },
    ambient: {
      light: { nav: '#EDEBE3', content: '#F7F3F3', border: '#CED6DF' },
      dark: {
        nav: '#0B0E14',
        content: '#0B0E14',
        surface: '#141A24',
        border: '#232D3D',
      },
    },
  },
  typography: {
    families: {
      display: 'font-serif',
      body: 'font-sans',
    },
  },
  spacing: [
    { name: '4xs', value: '2px' },
    { name: 'xs', value: '4px' },
    { name: 'sm', value: '8px' },
    { name: 'md', value: '16px' },
    { name: 'lg', value: '24px' },
    { name: 'xl', value: '32px' },
    { name: '2xl', value: '48px' },
    { name: '3xl', value: '64px' },
  ],
  radius: 'rounded-[2rem] rounded-tr-md rounded-bl-md',
};

// --- QUIRKY SVG ACCENTS ---
const Squiggle = ({ className }: { className?: string }) => (
  <svg
    viewBox='0 0 100 20'
    className={className}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M0 10C10 10 15 2 25 2C35 2 40 18 50 18C60 18 65 2 75 2C85 2 90 10 100 10'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
);

const Blob = ({
  className,
  color = 'currentColor',
  variant = 'A',
}: {
  className?: string;
  color?: string;
  variant?: 'A' | 'B' | 'C';
}) => {
  const paths: Record<'A' | 'B' | 'C', string> = {
    A: 'M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C87,14.6,81.4,29.1,72.6,41.9C63.8,54.7,51.7,65.7,37.8,72.3C23.9,78.9,8.1,81.1,-7.2,78.5C-22.5,75.9,-37.2,68.5,-49.6,58.3C-62,48.1,-72.1,35.1,-78.3,20.3C-84.5,5.5,-86.8,-11.1,-82.1,-25.9C-77.4,-40.7,-65.7,-53.8,-51.9,-61.3C-38.1,-68.8,-22.1,-70.7,-6.3,-72.8C9.5,-74.9,23,-77.2,44.7,-76.4Z',
    B: 'M38.1,-65.6C51.6,-57.8,66.4,-49.7,73.5,-37.2C80.5,-24.8,79.8,-7.9,76.5,8.2C73.3,24.3,67.6,39.6,57.1,51.1C46.6,62.6,31.4,70.3,16.2,72.2C1.1,74,-13.9,70,-28.9,64.3C-43.9,58.5,-58.9,50.9,-67.2,38.8C-75.6,26.7,-77.2,10,-75.2,-5.7C-73.2,-21.4,-67.6,-36.1,-57.4,-46.8C-47.3,-57.4,-32.6,-64,-18.2,-68.2C-3.8,-72.4,10.2,-74.2,38.1,-65.6Z',
    C: 'M52.4,-84.9C66,-75.8,73.7,-58.1,78.2,-41C82.7,-23.9,84.1,-7.4,82,8.6C79.8,24.6,74.2,40.1,64,52.2C53.7,64.2,38.8,72.9,23.5,77.7C8.1,82.4,-7.8,83.1,-22.8,79.1C-37.8,75,-51.9,66.2,-63.3,54.5C-74.8,42.7,-83.7,28.1,-87.1,12C-90.5,-4.1,-88.4,-21.7,-81.4,-36.8C-74.4,-51.9,-62.5,-64.6,-48.4,-73.4C-34.4,-82.1,-18.2,-87,-0.5,-86.2C17.2,-85.4,38.8,-94.1,52.4,-84.9Z',
  };
  return (
    <svg
      viewBox='0 0 200 200'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path fill={color} d={paths[variant]} transform='translate(100 100)' />
    </svg>
  );
};

// --- ICON LIBRARY (The 100 Set) ---
const iconLibrary = {
  botanical: [
    { name: 'Leaf', icon: Leaf },
    { name: 'Wind', icon: Wind },
    { name: 'Sparkles', icon: Sparkles },
    { name: 'Zap', icon: Zap },
    { name: 'Shapes', icon: Shapes },
    { name: 'Brush', icon: Brush },
    { name: 'Cloud', icon: Cloud },
    { name: 'Sun', icon: Sun },
    { name: 'Moon', icon: Moon },
    { name: 'Sprout', icon: Sprout },
    { name: 'Trees', icon: Trees },
    { name: 'TreePine', icon: TreePine },
    { name: 'Droplets', icon: Droplets },
    { name: 'Flame', icon: Flame },
    { name: 'Mountain', icon: Mountain },
    { name: 'Waves', icon: Waves },
    { name: 'Bird', icon: Bird },
    { name: 'Bug', icon: Bug },
    { name: 'Ghost', icon: Ghost },
    { name: 'Camera', icon: Camera },
  ],
  action: [
    { name: 'MoveRight', icon: MoveRight },
    { name: 'Maximize2', icon: Maximize2 },
    { name: 'MousePointer2', icon: MousePointer2 },
    { name: 'Plus', icon: Plus },
    { name: 'Trash', icon: Trash },
    { name: 'Trash2', icon: Trash2 },
    { name: 'Download', icon: Download },
    { name: 'Share', icon: Share },
    { name: 'RotateCcw', icon: RotateCcw },
    { name: 'ChevronRight', icon: ChevronRight },
    { name: 'ChevronLeft', icon: ChevronLeft },
    { name: 'ChevronDown', icon: ChevronDown },
    { name: 'ExternalLink', icon: ExternalLink },
    { name: 'Eye', icon: Eye },
    { name: 'EyeOff', icon: EyeOff },
    { name: 'Filter', icon: Filter },
    { name: 'Play', icon: Play },
    { name: 'Pause', icon: Pause },
    { name: 'RefreshCw', icon: RefreshCw },
    { name: 'Send', icon: Send },
  ],
  communication: [
    { name: 'Mail', icon: Mail },
    { name: 'Phone', icon: Phone },
    { name: 'MapPin', icon: MapPin },
    { name: 'MessageSquare', icon: MessageSquare },
    { name: 'MessageCircle', icon: MessageCircle },
    { name: 'Bell', icon: Bell },
    { name: 'Flag', icon: Flag },
    { name: 'User', icon: User },
    { name: 'Users', icon: Users },
    { name: 'Heart', icon: Heart },
    { name: 'Star', icon: Star },
    { name: 'Globe', icon: Globe },
    { name: 'AtSign', icon: AtSign },
    { name: 'Link', icon: Link },
    { name: 'Gift', icon: Gift },
    { name: 'Smile', icon: Smile },
    { name: 'Languages', icon: Languages },
    { name: 'Hash', icon: Hash },
    { name: 'Megaphone', icon: Megaphone },
    { name: 'Radio', icon: Radio },
  ],
  system: [
    { name: 'Settings', icon: Settings },
    { name: 'Search', icon: Search },
    { name: 'Info', icon: Info },
    { name: 'AlertCircle', icon: AlertCircle },
    { name: 'CheckCircle2', icon: CheckCircle2 },
    { name: 'Lock', icon: Lock },
    { name: 'Unlock', icon: Unlock },
    { name: 'Fingerprint', icon: Fingerprint },
    { name: 'Home', icon: Home },
    { name: 'Activity', icon: Activity },
    { name: 'Clock', icon: Clock },
    { name: 'Calendar', icon: Calendar },
    { name: 'Key', icon: Key },
    { name: 'Shield', icon: Shield },
    { name: 'ShieldCheck', icon: ShieldCheck },
    { name: 'Terminal', icon: Terminal },
    { name: 'Power', icon: Power },
    { name: 'Bluetooth', icon: Bluetooth },
    { name: 'Wifi', icon: Wifi },
    { name: 'Map', icon: Map },
  ],
  data: [
    { name: 'SquareStack', icon: SquareStack },
    { name: 'Layers', icon: Layers },
    { name: 'Columns', icon: Columns },
    { name: 'Layout', icon: Layout },
    { name: 'Database', icon: Database },
    { name: 'Monitor', icon: Monitor },
    { name: 'Smartphone', icon: Smartphone },
    { name: 'Image', icon: Image },
    { name: 'FileText', icon: FileText },
    { name: 'Battery', icon: Battery },
    { name: 'HardDrive', icon: HardDrive },
    { name: 'Cpu', icon: Cpu },
    { name: 'BarChart3', icon: BarChart3 },
    { name: 'PieChart', icon: PieChart },
    { name: 'Table', icon: Table },
    { name: 'FileJson', icon: FileJson },
    { name: 'Folder', icon: Folder },
    { name: 'Archive', icon: Archive },
    { name: 'Grid', icon: Grid },
    { name: 'List', icon: List },
  ],
};

// --- SUB-COMPONENTS ---

const SectionHeader = ({
  title,
  sub,
  isDarkMode,
  hexColor = '#FF595E',
  blobVariant = 'A',
}: {
  title: string;
  sub: string;
  isDarkMode: boolean;
  hexColor?: string;
  blobVariant?: 'A' | 'B' | 'C';
}) => (
  <header className='relative mb-16'>
    <Blob
      className={`absolute -top-32 -left-32 w-96 h-96 opacity-10 dark:opacity-5 transition-all duration-1000`}
      color={hexColor}
      variant={blobVariant}
    />
    <div className='relative z-10'>
      <div className='flex items-center gap-3 mb-4'>
        <div
          className='w-2 h-10 rounded-full'
          style={{ backgroundColor: hexColor }}
        />
        <h2
          className={`font-serif text-6xl md:text-7xl tracking-tighter transition-colors ${isDarkMode ? 'text-white' : 'text-[#0B0E14]'}`}
        >
          {title}
        </h2>
      </div>
      <p
        className={`text-xl font-medium max-w-2xl leading-relaxed transition-colors ${isDarkMode ? 'text-slate-400' : 'text-zinc-500'}`}
      >
        {sub}
      </p>
    </div>
  </header>
);

const ColorCard = ({
  name,
  hex,
  isDarkMode,
  desc,
}: {
  name: string;
  hex: string;
  isDarkMode: boolean;
  desc: string;
}) => (
  <div
    className={`p-4 border ${isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100'} ${tokens.radius} shadow-sm group`}
  >
    <div
      className={`h-32 w-full mb-4 shadow-inner border border-black/5 ${tokens.radius}`}
      style={{ backgroundColor: hex }}
    />
    <div className='flex justify-between items-center mb-1'>
      <h4 className='font-bold text-sm dark:text-white uppercase'>{name}</h4>
      <code className='text-[10px] text-rose-500 font-mono font-black'>
        {hex}
      </code>
    </div>
    <p className='text-[11px] text-zinc-400 leading-tight'>{desc}</p>
  </div>
);

// --- MAIN APP ---

export default function InitialDraftPage() {
  const [activeTab, setActiveTab] = useState('manifesto');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [strokeWidth, setStrokeWidth] = useState(2.5);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#0B0E14' : '#F7F3F3';
  }, [isDarkMode]);

  const allIcons = useMemo(() => {
    return Object.entries(iconLibrary).flatMap(([cat, icons]) =>
      icons.map((i) => ({ ...i, category: cat })),
    );
  }, []);

  const filteredIcons = allIcons.filter((i) =>
    i.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div
        className={`min-h-screen font-sans transition-colors duration-700 ${isDarkMode ? 'bg-[#0B0E14] text-white' : 'bg-[#F7F3F3] text-zinc-900'}`}
      >
        {/* Navigation Sidebar */}
        <nav
          className={`fixed top-0 left-0 h-full z-50 transition-all duration-500 border-r ${
            isDarkMode
              ? 'bg-[#0B0E14] border-[#232D3D]'
              : 'bg-[#EDEBE3] border-zinc-200 shadow-xl'
          } w-72 hidden lg:flex flex-col p-10`}
        >
          <div className='mb-12'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 bg-[#FFCA3A] rounded-2xl rotate-3 flex items-center justify-center shadow-lg'>
                <Leaf size={22} strokeWidth={2.5} className='text-[#0B0E14]' />
              </div>
              <h1 className='font-serif text-3xl tracking-tighter text-[#0B0E14] dark:text-white'>
                MiaSys.
              </h1>
            </div>
            <p className='text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mt-4 italic'>
              Design Manifesto
            </p>
          </div>

          <div className='space-y-1.5 flex-grow overflow-y-auto custom-scrollbar pr-2'>
            {[
              {
                id: 'manifesto',
                label: 'Manifesto',
                icon: Compass,
                color: tokens.colors.brand.lime,
              },
              {
                id: 'foundations',
                label: 'Foundations',
                icon: Palette,
                color: tokens.colors.brand.rose,
              },
              {
                id: 'architecture',
                label: 'Architecture',
                icon: Layout,
                color: tokens.colors.brand.amber,
              },
              {
                id: 'components',
                label: 'Components',
                icon: Box,
                color: tokens.colors.brand.azure,
              },
              {
                id: 'icons',
                label: 'Icon Library',
                icon: Shapes,
                color: tokens.colors.brand.lime,
              },
              {
                id: 'decorative',
                label: 'Signature',
                icon: Brush,
                color: tokens.colors.brand.rose,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-4 px-4 py-3.5 text-sm font-bold transition-all rounded-xl ${
                  activeTab === tab.id
                    ? isDarkMode
                      ? 'bg-[#141A24]'
                      : 'bg-[#F7F3F3] shadow-sm border border-zinc-100'
                    : isDarkMode
                      ? 'text-slate-500 hover:text-slate-100'
                      : 'text-zinc-500 hover:text-zinc-900'
                }`}
                style={{ color: activeTab === tab.id ? tab.color : 'inherit' }}
              >
                <tab.icon
                  size={18}
                  className={activeTab === tab.id ? 'rotate-12' : ''}
                />
                {tab.label}
              </button>
            ))}
          </div>

          <div className='mt-auto pt-6 border-t border-zinc-200/50 dark:border-zinc-800'>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`w-full p-4 rounded-2xl flex items-center justify-between border ${isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100 shadow-sm'}`}
            >
              <span className='text-[10px] font-black uppercase tracking-widest text-slate-500'>
                {isDarkMode ? 'Midnight' : 'Paper'}
              </span>
              <div
                className={`w-10 h-6 rounded-full relative transition-colors ${isDarkMode ? 'bg-slate-700' : 'bg-zinc-200'}`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 rounded-full transition-all ${isDarkMode ? 'left-5 bg-[#FFCA3A]' : 'left-1 bg-white shadow-sm'}`}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Header */}
        <header
          className={`lg:hidden fixed top-0 w-full z-40 backdrop-blur-md border-b px-8 py-5 flex items-center justify-between ${
            isDarkMode
              ? 'bg-[#0B0E14]/80 border-[#232D3D]'
              : 'bg-[#EDEBE3]/80 border-zinc-200 shadow-sm'
          }`}
        >
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 bg-[#FFCA3A] rounded-lg flex items-center justify-center'>
              <Leaf size={18} strokeWidth={2.5} className='text-[#0B0E14]' />
            </div>
            <span className='font-serif text-xl tracking-tighter dark:text-white'>
              MiaSys
            </span>
          </div>
          <button
            className='text-zinc-500'
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </header>

        {/* Content */}
        <main className='lg:ml-72 min-h-screen px-8 lg:px-24 transition-all duration-500'>
          <div className='max-w-7xl mx-auto pt-32 lg:pt-24 pb-48'>
            {/* MANIFESTO TAB */}
            {activeTab === 'manifesto' && (
              <div className='space-y-32 animate-in fade-in slide-in-from-bottom-8 duration-1000'>
                <SectionHeader
                  title='Manifesto.'
                  sub='MiaSys is a botanical design system built to reject the sterile. We craft software that feels grown, not manufactured.'
                  hexColor={tokens.colors.brand.lime}
                  blobVariant='A'
                  isDarkMode={isDarkMode}
                />
                <div className='grid md:grid-cols-2 gap-12'>
                  <div
                    className={`p-12 border ${isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100 shadow-sm'} ${tokens.radius}`}
                  >
                    <h3 className='font-serif text-3xl mb-6'>Organic Logic.</h3>
                    <p
                      className={`leading-relaxed italic ${isDarkMode ? 'text-slate-400' : 'text-zinc-500'}`}
                    >
                      &quot;Nature does not follow a perfect grid. MiaSys
                      utilizes the &apos;Botanical Cut&apos;—a mathematical
                      asymmetry that provides digital comfort through irregular
                      curves and human strokes.&quot;
                    </p>
                  </div>
                  <div className='flex items-center justify-center'>
                    <div
                      className='w-48 h-48 bg-[#FFCA3A] flex items-center justify-center shadow-[0_0_80px_rgba(255,202,58,0.2)] animate-pulse transition-all hover:rotate-12 duration-1000'
                      style={{ borderRadius: '2rem 0.375rem 2rem 0.375rem' }}
                    >
                      <Sparkles
                        size={80}
                        strokeWidth={2.5}
                        className='text-black'
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* FOUNDATIONS TAB */}
            {activeTab === 'foundations' && (
              <div className='space-y-32 animate-in fade-in slide-in-from-bottom-8 duration-1000'>
                <SectionHeader
                  title='Foundations.'
                  sub='The core pigments and typography that define the MiaSys visual pulse.'
                  hexColor={tokens.colors.brand.rose}
                  blobVariant='B'
                  isDarkMode={isDarkMode}
                />

                <section className='space-y-8'>
                  <h3 className='text-[10px] font-black uppercase text-zinc-400 tracking-[0.2em]'>
                    Core Pigments
                  </h3>
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <ColorCard
                      name='Amber'
                      hex='#FFCA3A'
                      desc='Primary action and brand anchor.'
                      isDarkMode={isDarkMode}
                    />
                    <ColorCard
                      name='Rose'
                      hex='#FF595E'
                      desc='Alert and emotional highlight.'
                      isDarkMode={isDarkMode}
                    />
                    <ColorCard
                      name='Lime'
                      hex='#8AC926'
                      desc='Success and growth state indicator.'
                      isDarkMode={isDarkMode}
                    />
                    <ColorCard
                      name='Azure'
                      hex='#1982C4'
                      desc='Supportive structural tone.'
                      isDarkMode={isDarkMode}
                    />
                  </div>
                </section>

                <section className='space-y-8'>
                  <h3 className='text-[10px] font-black uppercase text-zinc-400 tracking-[0.2em]'>
                    Typographic Pulse
                  </h3>
                  <div
                    className={`p-10 border ${isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100'} ${tokens.radius}`}
                  >
                    {[
                      {
                        label: 'Display / Serif',
                        size: 'text-7xl',
                        weight: 'font-normal',
                        font: 'font-serif',
                      },
                      {
                        label: 'Heading / Serif',
                        size: 'text-4xl',
                        weight: 'font-bold',
                        font: 'font-serif',
                      },
                      {
                        label: 'Body / Inter',
                        size: 'text-lg',
                        weight: 'font-medium',
                        font: 'font-sans',
                      },
                      {
                        label: 'Label / Inter',
                        size: 'text-[10px]',
                        weight: 'font-black',
                        font: 'font-sans',
                      },
                    ].map((t, i) => (
                      <div
                        key={i}
                        className='flex flex-col lg:flex-row lg:items-baseline gap-4 py-8 border-b last:border-0 border-zinc-100 dark:border-zinc-800'
                      >
                        <span className='lg:w-48 text-[10px] font-black text-rose-500 uppercase tracking-widest'>
                          {t.label}
                        </span>
                        <p
                          className={`${t.font} ${t.size} ${t.weight} tracking-tight dark:text-white`}
                        >
                          The quick brown fox jumps over the lazy dog.
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* ARCHITECTURE TAB */}
            {activeTab === 'architecture' && (
              <div className='space-y-32 animate-in fade-in slide-in-from-bottom-8 duration-1000'>
                <SectionHeader
                  title='Architecture.'
                  sub='The mathematical grid and responsive rules that hold the garden together.'
                  hexColor={tokens.colors.brand.amber}
                  blobVariant='C'
                  isDarkMode={isDarkMode}
                />
                <div className='grid lg:grid-cols-2 gap-12'>
                  <div
                    className={`p-10 border ${isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100'} ${tokens.radius}`}
                  >
                    <h4 className='font-serif text-3xl mb-8 dark:text-white'>
                      The 8pt Grid.
                    </h4>
                    <div className='space-y-6'>
                      {tokens.spacing.map((s, i) => (
                        <div key={i} className='flex items-center gap-6 group'>
                          <span className='w-12 font-mono text-[9px] text-zinc-400 uppercase font-black'>
                            {s.name}
                          </span>
                          <div
                            className='flex-grow h-4 bg-amber-500/10 border-x-2 border-amber-500 transition-all group-hover:bg-amber-500/30'
                            style={{ width: s.value }}
                          />
                          <span className='w-16 text-right font-mono text-[10px] text-zinc-500'>
                            {s.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className={`p-10 border flex flex-col items-center justify-center ${isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100'} ${tokens.radius}`}
                  >
                    <Monitor className='text-zinc-300 mb-6' size={48} />
                    <h4 className='font-serif text-2xl mb-4 dark:text-white'>
                      Responsive Breakpoints
                    </h4>
                    <div className='w-full space-y-3'>
                      {[
                        'SM: 640px',
                        'MD: 768px',
                        'LG: 1024px',
                        'XL: 1280px',
                      ].map((b) => (
                        <div
                          key={b}
                          className='flex items-center justify-between p-3 bg-zinc-50 dark:bg-black/20 rounded-xl border border-zinc-100 dark:border-white/5'
                        >
                          <span className='text-[10px] font-black uppercase text-amber-500'>
                            {b.split(':')[0]}
                          </span>
                          <span className='font-mono text-xs dark:text-slate-400'>
                            {b.split(':')[1]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* COMPONENTS TAB */}
            {activeTab === 'components' && (
              <div className='space-y-32 animate-in fade-in slide-in-from-bottom-8 duration-1000'>
                <SectionHeader
                  title='Components.'
                  sub='Interactive modules designed for high-velocity user tasks.'
                  hexColor={tokens.colors.brand.azure}
                  blobVariant='A'
                  isDarkMode={isDarkMode}
                />
                <div className='grid md:grid-cols-2 gap-12'>
                  <section className='space-y-8'>
                    <h4 className='text-[10px] font-black uppercase text-zinc-400 tracking-widest'>
                      Action Drivers
                    </h4>
                    <div
                      className={`p-10 border flex flex-wrap gap-4 ${isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100'} ${tokens.radius}`}
                    >
                      <button
                        className={`px-8 py-3 bg-[#FFCA3A] text-black font-bold hover:scale-105 active:scale-95 transition-all ${tokens.radius}`}
                      >
                        Primary
                      </button>
                      <button
                        className={`px-8 py-3 border-2 border-zinc-200 dark:border-zinc-700 font-bold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all dark:text-white ${tokens.radius}`}
                      >
                        Ghost
                      </button>
                      <button
                        className={`px-8 py-3 bg-[#FF595E] text-white font-bold hover:brightness-110 active:scale-95 transition-all ${tokens.radius}`}
                      >
                        Danger
                      </button>
                    </div>
                  </section>
                  <section className='space-y-8'>
                    <h4 className='text-[10px] font-black uppercase text-zinc-400 tracking-widest'>
                      Entry Fields
                    </h4>
                    <div
                      className={`p-10 border space-y-6 ${isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100'} ${tokens.radius}`}
                    >
                      <div className='space-y-2'>
                        <label className='text-[10px] font-black uppercase text-amber-500'>
                          Focus State
                        </label>
                        <div className='w-full border-2 border-amber-500 p-3 rounded-2xl flex items-center gap-3 shadow-lg shadow-amber-500/5'>
                          <Type size={16} className='text-amber-500' />
                          <input
                            className='bg-transparent border-none outline-none w-full text-sm dark:text-white'
                            defaultValue='Active interaction'
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            )}

            {/* ICON LIBRARY TAB */}
            {activeTab === 'icons' && (
              <div className='space-y-24 animate-in fade-in slide-in-from-bottom-8 duration-1000'>
                <div className='flex flex-col md:flex-row md:items-end justify-between gap-12'>
                  <SectionHeader
                    title='Icons.'
                    sub='The discovery engine for 100 system tokens. Click any tile to copy name.'
                    hexColor={tokens.colors.brand.lime}
                    blobVariant='B'
                    isDarkMode={isDarkMode}
                  />
                  <div className='flex flex-col gap-6 relative z-10 md:w-96'>
                    <div
                      className={`flex items-center gap-3 p-4 border rounded-[2rem] ${isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100 shadow-sm'}`}
                    >
                      <Search size={18} className='text-zinc-400' />
                      <input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder='Search 100+ tokens...'
                        className='bg-transparent border-none outline-none text-sm w-full font-medium dark:text-white'
                      />
                    </div>
                    <div
                      className={`flex items-center p-1 border rounded-2xl ${isDarkMode ? 'bg-[#0B0E14] border-[#232D3D]' : 'bg-zinc-100'}`}
                    >
                      {[1.5, 2.5].map((w) => (
                        <button
                          key={w}
                          onClick={() => setStrokeWidth(w)}
                          className={`flex-1 py-2 text-[10px] font-black uppercase rounded-xl transition-all ${strokeWidth === w ? 'bg-amber-500 text-black shadow-md' : 'text-zinc-400'}`}
                        >
                          {w === 1.5 ? 'Utility' : 'Brand'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4'>
                  {filteredIcons.map((i, idx) => (
                    <button
                      key={idx}
                      onClick={() => {}}
                      className={`group p-4 border transition-all duration-500 ${isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100 shadow-sm hover:shadow-xl hover:border-amber-500'} ${tokens.radius} flex flex-col items-center gap-3`}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isDarkMode ? 'bg-zinc-900 text-zinc-500' : 'bg-zinc-50 text-zinc-400'} group-hover:rotate-6 group-hover:scale-110 shadow-inner`}
                      >
                        {React.createElement(i.icon, {
                          size: 20,
                          strokeWidth: strokeWidth,
                          className: 'group-hover:text-amber-500',
                        })}
                      </div>
                      <span className='text-[8px] font-black uppercase text-zinc-400 tracking-tighter truncate w-full text-center'>
                        {i.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* DECORATIVE TAB */}
            {activeTab === 'decorative' && (
              <div className='space-y-32 animate-in fade-in slide-in-from-bottom-8 duration-1000'>
                <SectionHeader
                  title='Signature.'
                  sub='The non-functional soul of the system. Flourishes that ground the digital garden.'
                  hexColor={tokens.colors.brand.rose}
                  blobVariant='C'
                  isDarkMode={isDarkMode}
                />
                <div className='grid md:grid-cols-2 gap-12'>
                  <div
                    className={`p-12 border ${isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100 shadow-sm'} ${tokens.radius} overflow-hidden relative`}
                  >
                    <div
                      className='absolute inset-0 opacity-[0.05] pointer-events-none'
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, ${isDarkMode ? 'white' : 'black'} 1px, transparent 0)`,
                        backgroundSize: '32px 32px',
                      }}
                    />
                    <h4 className='text-[10px] font-black uppercase text-zinc-400 mb-12 tracking-widest relative z-10'>
                      Studio Texture
                    </h4>
                    <div className='flex flex-col items-center gap-8 relative z-10'>
                      <RotateCcw className='text-zinc-300' size={64} />
                      <p className='text-sm text-zinc-500 italic text-center'>
                        Subtle Dot Grids provide a sense of precision and scale.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`p-12 border ${isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100 shadow-sm'} ${tokens.radius}`}
                  >
                    <h4 className='text-[10px] font-black uppercase text-zinc-400 mb-12 tracking-widest'>
                      The Squiggle
                    </h4>
                    <div className='space-y-20 py-4'>
                      <Squiggle className='w-full text-amber-500 h-8' />
                      <Squiggle className='w-full text-rose-500/20 h-16' />
                      <p className='text-xs text-zinc-500 text-center uppercase font-black tracking-widest'>
                        Semantic Underlines & Dividers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <footer
            className={`mt-20 py-20 border-t flex flex-col md:flex-row justify-between items-start gap-12 ${
              isDarkMode ? 'border-[#232D3D]' : 'border-zinc-200'
            }`}
          >
            <div className='space-y-4'>
              <div className='flex items-center gap-2'>
                <div className='w-1.5 h-6 bg-[#8AC926] rounded-full rotate-12' />
                <span className='font-serif text-lg tracking-tighter uppercase dark:text-white'>
                  MiaSys Studio
                </span>
              </div>
              <p className='text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]'>
                Designed by Camila Studio • Build v1.5.0
              </p>
            </div>
            <div className='flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-zinc-500'>
              <button className='hover:text-rose-500 transition-colors'>
                Documentation
              </button>
              <div className='w-1 h-1 rounded-full bg-zinc-300' />
              <button className='hover:text-rose-500 transition-colors'>
                Github Set
              </button>
              <div className='w-1 h-1 rounded-full bg-zinc-300' />
              <button className='hover:text-rose-500 transition-colors'>
                Figma Spec
              </button>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
