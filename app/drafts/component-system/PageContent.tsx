'use client';

import { useState } from 'react';
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  Leaf,
  Moon,
  Search,
  Settings,
  Sprout,
  Sun,
} from 'lucide-react';

const buttonStates = [
  { label: 'Default', className: '' },
  { label: 'Hover', className: 'translate-y-[-1px] brightness-110' },
  {
    label: 'Active',
    className: 'translate-y-[1px] scale-[0.98] brightness-90',
  },
];

const spacingTokens = [8, 16, 24, 32, 40, 48, 64];

const utilityIcons = [
  { label: 'leaf', Icon: Leaf },
  { label: 'sprout', Icon: Sprout },
  { label: 'activity', Icon: Activity },
  { label: 'chart', Icon: BarChart3 },
  { label: 'search', Icon: Search },
  { label: 'settings', Icon: Settings },
];

const brandIcons = [
  { label: 'sprout', Icon: Sprout },
  { label: 'activity', Icon: Activity },
  { label: 'chart', Icon: BarChart3 },
];

type Theme = 'dark' | 'light';

function getThemeClasses(isDark: boolean) {
  return {
    page: isDark
      ? 'bg-[#07090A] text-[#F5F1E6]'
      : 'bg-[#F2F0EA] text-[#172018]',
    section: isDark
      ? 'border-white/12 bg-white/[0.025] shadow-[0_24px_80px_rgba(0,0,0,0.24)]'
      : 'border-[#D5D0C3] bg-white/70 shadow-[0_24px_80px_rgba(92,82,64,0.12)]',
    sectionTitle: isDark ? 'text-[#F5F1E6]' : 'text-[#182317]',
    label: isDark ? 'text-[#C8C1B4]' : 'text-[#5F6D59]',
    muted: isDark ? 'text-[#B7B0A5]' : 'text-[#53624F]',
    quiet: isDark ? 'text-[#9B9489]' : 'text-[#717B68]',
    strong: isDark ? 'text-[#F5F1E6]' : 'text-[#172018]',
    heading: isDark ? 'text-white' : 'text-[#172018]',
    panel: isDark
      ? 'border-white/14 bg-[#0B0E0F]'
      : 'border-[#D8D2C4] bg-white/80 shadow-[0_14px_40px_rgba(92,82,64,0.10)]',
    control: isDark
      ? 'border-[#9DCC1F]/45 bg-[#0A0D0E] text-[#F5F1E6] placeholder:text-[#9B9489]'
      : 'border-[#80A922]/55 bg-white/80 text-[#172018] placeholder:text-[#788371]',
    neutralControl: isDark
      ? 'border-white/20 bg-[#0A0D0E] text-[#F5F1E6]'
      : 'border-[#C9C2B4] bg-white/80 text-[#172018]',
    toggleOff: isDark
      ? 'border-white/20 bg-[#0D1011]'
      : 'border-[#BEB7AA] bg-white/70',
    checkBorder: isDark ? 'border-white/24' : 'border-[#AFA99E]',
    divider: isDark ? 'border-white/10' : 'border-[#D8D2C4]',
    iconBox: isDark
      ? 'border-white/16 text-[#F5F1E6]'
      : 'border-[#D1CABC] bg-white/55 text-[#172018]',
    segment: isDark
      ? 'border-[#9DCC1F]/45 bg-[#090B0C]'
      : 'border-[#7FA91A]/55 bg-white/75',
    stroke: isDark ? 'bg-[#F5F1E6]' : 'bg-[#172018]',
    radiusBox: isDark ? 'bg-white/[0.02]' : 'bg-white/65',
  };
}

function SectionShell({
  index,
  title,
  children,
  className = '',
  theme,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  theme: Theme;
}) {
  const ui = getThemeClasses(theme === 'dark');

  return (
    <section
      className={`rounded-[28px] border transition-colors duration-500 ${ui.section} ${className}`}
    >
      <div className='flex items-center gap-5 px-6 pt-5 sm:px-8'>
        <span className='font-mono text-sm text-[#9DCC1F]'>{index}</span>
        <h2
          className={`text-sm font-semibold uppercase tracking-[0.16em] ${ui.sectionTitle}`}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function PlantMark({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-[1.35rem] border border-[#9DCC1F]/60 bg-[#9DCC1F]/5 text-[#9DCC1F] shadow-[0_0_28px_rgba(157,204,31,0.16)] ${className}`}
    >
      <Leaf strokeWidth={1.35} />
    </span>
  );
}

function StateButton({
  tone,
  stateClass,
  theme,
}: {
  tone: 'primary' | 'secondary' | 'ghost';
  stateClass: string;
  theme: Theme;
}) {
  const isDark = theme === 'dark';
  const styles = {
    primary:
      'border-[#9DCC1F]/70 bg-[linear-gradient(135deg,#8AB917,#3E5B08)] text-[#F9F6EA] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_12px_24px_rgba(91,128,8,0.24)]',
    secondary: isDark
      ? 'border-[#F6F2E5] bg-[#F8F5EC] text-[#101312] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_10px_22px_rgba(246,242,229,0.12)]'
      : 'border-[#D8D2C4] bg-white text-[#172018] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_22px_rgba(92,82,64,0.10)]',
    ghost: isDark
      ? 'border-white/18 bg-transparent text-[#F5F1E6] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]'
      : 'border-[#C9C2B4] bg-white/35 text-[#172018] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]',
  };

  const labels = {
    primary: 'Primary Button',
    secondary: 'Secondary Button',
    ghost: 'Ghost Button',
  };

  return (
    <button
      className={`flex h-12 w-full min-w-40 items-center justify-between rounded-[14px] border px-5 text-sm transition ${styles[tone]} ${stateClass}`}
      type='button'
    >
      <span>{labels[tone]}</span>
      <ArrowUpRight size={18} strokeWidth={1.6} />
    </button>
  );
}

export default function ComponentsPageContent() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [toggle, setToggle] = useState(true);
  const [checkbox, setCheckbox] = useState(true);
  const [radio, setRadio] = useState<'selected' | 'unselected'>('selected');
  const [segmented, setSegmented] = useState('Option 1');
  const isDark = theme === 'dark';
  const ui = getThemeClasses(isDark);
  const toggleTheme = () =>
    setTheme((current): Theme => (current === 'dark' ? 'light' : 'dark'));

  return (
    <main
      className={`min-h-screen overflow-hidden px-4 py-6 transition-colors duration-500 sm:px-8 md:px-12 md:py-10 ${ui.page}`}
    >
      <style>
        {`
          .component-noise::before {
            content: '';
            position: fixed;
            inset: 0;
            pointer-events: none;
            opacity: ${isDark ? '0.16' : '0.09'};
            background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
            background-size: 100% 3px;
            mix-blend-mode: ${isDark ? 'soft-light' : 'multiply'};
          }

          .field-focus:focus {
            border-color: rgba(157, 204, 31, 0.8);
            box-shadow: 0 0 0 1px rgba(157, 204, 31, 0.35);
            outline: none;
          }
        `}
      </style>

      <div className='component-noise relative mx-auto max-w-7xl space-y-8 md:space-y-12'>
        <header className='flex items-start justify-between gap-4 md:items-center md:gap-8'>
          <div className='flex min-w-0 items-center gap-4 sm:gap-6'>
            <div
              className={`grid h-12 w-12 shrink-0 place-items-center rounded-[18px] border shadow-[0_0_32px_rgba(166,226,46,0.12)] transition-all sm:h-16 sm:w-16 sm:rounded-[26px] ${isDark ? 'border-[#A6E22E]/40 bg-[#A6E22E]/5 text-[#F7F6F2]' : 'border-[#739E1C]/40 bg-[#F7F6F2] text-[#516F12]'}`}
            >
              <Leaf className='h-6 w-6 sm:h-8 sm:w-8' strokeWidth={1.5} />
            </div>
            <div className='min-w-0'>
              <h1
                className={`font-display text-3xl tracking-tight transition-colors sm:text-4xl ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                MiaSys
              </h1>
              <p
                className={`mt-1 truncate text-[9px] font-semibold uppercase tracking-[0.16em] transition-colors sm:text-[10px] sm:tracking-[0.2em] ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}
              >
                Component System{' '}
                <span className='ml-1 text-lime-500 sm:ml-2'>v 0.1.0</span>
              </p>
            </div>
          </div>

          <div className='flex shrink-0 items-center justify-end gap-4 md:gap-6'>
            <div className='hidden text-right md:block'>
              <p className='text-sm font-semibold leading-none text-lime-500'>
                Organic Logic Interface
              </p>
              <p
                className={`mt-1 text-xs leading-none ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}
              >
                Detailed primitives for botanical engineering systems.
              </p>
            </div>
            <div
              className={`hidden h-10 w-px md:block ${isDark ? 'bg-zinc-800' : 'bg-slate-300'}`}
            />
            <button
              type='button'
              aria-label='Toggle color theme'
              className={`grid h-9 w-9 place-items-center rounded-full transition-all hover:scale-105 active:scale-95 ${isDark ? 'text-zinc-400 hover:bg-zinc-900' : 'text-slate-500 hover:bg-slate-200'}`}
              onClick={toggleTheme}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </header>

        <SectionShell index='01' title='Buttons' theme={theme}>
          <div className='overflow-x-auto px-6 pb-8 pt-6 sm:px-8'>
            <div className='grid min-w-[860px] grid-cols-[84px_repeat(4,minmax(160px,1fr))] gap-x-10 gap-y-4'>
              <div />
              {['Primary', 'Secondary', 'Ghost', 'Pill / Tag'].map((label) => (
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.16em] ${ui.label}`}
                  key={label}
                >
                  {label}
                </p>
              ))}

              {buttonStates.map((state) => (
                <div className='contents' key={state.label}>
                  <p className={`flex h-12 items-center text-sm ${ui.muted}`}>
                    {state.label}
                  </p>
                  <StateButton
                    tone='primary'
                    stateClass={state.className}
                    theme={theme}
                  />
                  <StateButton
                    tone='secondary'
                    stateClass={state.className}
                    theme={theme}
                  />
                  <StateButton
                    tone='ghost'
                    stateClass={state.className}
                    theme={theme}
                  />
                  <div
                    className={`flex h-12 w-full min-w-40 items-center justify-between rounded-[14px] border px-4 transition ${isDark ? 'border-white/14 bg-[#0D1011]' : 'border-[#D8D2C4] bg-white/60'} ${state.className} ${state.label === 'Hover' ? 'border-[#9DCC1F]' : ''}`}
                  >
                    <span
                      className={`inline-flex items-center gap-2 text-sm ${ui.strong}`}
                    >
                      <Leaf size={16} className='text-[#9DCC1F]' />
                      Botanical
                    </span>
                    <span
                      className={`text-sm ${isDark ? 'text-[#E5DEC8]' : 'text-[#4F5D49]'}`}
                    >
                      Logic
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell index='02' title='Inputs & Controls' theme={theme}>
          <div className='grid gap-10 px-6 pb-8 pt-6 md:grid-cols-3 sm:px-8'>
            <div className='space-y-8'>
              <label className='block space-y-4'>
                <span
                  className={`block text-xs font-semibold uppercase tracking-[0.16em] ${ui.label}`}
                >
                  Text Input
                </span>
                <span className='relative block'>
                  <input
                    className={`field-focus h-14 w-full rounded-[12px] border px-5 pr-12 text-sm ${ui.control}`}
                    placeholder='Type something...'
                    type='text'
                  />
                  <Leaf
                    className='absolute right-4 top-1/2 -translate-y-1/2 text-[#9DCC1F]'
                    size={19}
                    strokeWidth={1.6}
                  />
                </span>
              </label>

              <div className='space-y-4'>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.16em] ${ui.label}`}
                >
                  Toggle
                </p>
                <div className='flex gap-4'>
                  <button
                    aria-pressed={toggle}
                    className={`relative h-9 w-[74px] rounded-full border transition ${toggle ? 'border-[#9DCC1F]/60 bg-[linear-gradient(135deg,#9DCC1F,#4E690B)]' : ui.toggleOff}`}
                    onClick={() => setToggle((current) => !current)}
                    type='button'
                  >
                    <span
                      className={`absolute top-1 h-7 w-7 rounded-full bg-[#F7F3E8] shadow transition ${toggle ? 'left-10' : 'left-1'}`}
                    />
                  </button>
                  <button
                    aria-pressed='false'
                    className={`relative h-9 w-[74px] rounded-full border ${ui.toggleOff}`}
                    type='button'
                  >
                    <span className='absolute left-1 top-1 h-7 w-7 rounded-full bg-[#F7F3E8] shadow' />
                  </button>
                </div>
              </div>
            </div>

            <div className='space-y-8'>
              <label className='block space-y-4'>
                <span
                  className={`block text-xs font-semibold uppercase tracking-[0.16em] ${ui.label}`}
                >
                  Search Field
                </span>
                <span className='relative block'>
                  <Search
                    className={`absolute left-5 top-1/2 -translate-y-1/2 ${ui.strong}`}
                    size={20}
                    strokeWidth={1.5}
                  />
                  <input
                    className={`field-focus h-14 w-full rounded-full border py-0 pl-14 pr-5 text-sm ${ui.control}`}
                    placeholder='Search protocols...'
                    type='search'
                  />
                </span>
              </label>

              <div className='grid grid-cols-2 gap-8'>
                <div className='space-y-4'>
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.16em] ${ui.label}`}
                  >
                    Checkbox
                  </p>
                  <button
                    className={`flex items-center gap-3 text-sm ${ui.strong}`}
                    onClick={() => setCheckbox((current) => !current)}
                    type='button'
                  >
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-[5px] border ${checkbox ? 'border-[#9DCC1F] bg-[#7DA513]' : `${ui.checkBorder} bg-transparent`}`}
                    >
                      {checkbox ? <Check size={15} strokeWidth={2.4} /> : null}
                    </span>
                    Checked state
                  </button>
                  <div
                    className={`flex items-center gap-3 text-sm ${ui.muted}`}
                  >
                    <span
                      className={`h-6 w-6 rounded-[5px] border ${ui.checkBorder}`}
                    />
                    Unchecked state
                  </div>
                </div>

                <div className='space-y-4'>
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.16em] ${ui.label}`}
                  >
                    Radio
                  </p>
                  <button
                    className={`flex items-center gap-3 text-sm ${ui.strong}`}
                    onClick={() =>
                      setRadio((current) =>
                        current === 'selected' ? 'unselected' : 'selected',
                      )
                    }
                    type='button'
                  >
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full border ${radio === 'selected' ? 'border-[#9DCC1F] bg-[#7DA513]' : ui.checkBorder}`}
                    >
                      {radio === 'selected' ? (
                        <span className='h-2.5 w-2.5 rounded-full bg-[#F7F3E8]' />
                      ) : null}
                    </span>
                    Selected
                  </button>
                  <div
                    className={`flex items-center gap-3 text-sm ${ui.muted}`}
                  >
                    <span
                      className={`h-6 w-6 rounded-full border ${ui.checkBorder}`}
                    />
                    Unselected
                  </div>
                </div>
              </div>
            </div>

            <div className='space-y-8'>
              <label className='block space-y-4'>
                <span
                  className={`block text-xs font-semibold uppercase tracking-[0.16em] ${ui.label}`}
                >
                  Select / Dropdown
                </span>
                <span className='relative block'>
                  <select
                    className={`field-focus h-14 w-full appearance-none rounded-[12px] border px-5 text-sm ${ui.neutralControl}`}
                  >
                    <option>Select an option</option>
                    <option>Growth Optimizer</option>
                    <option>Nutrient Protocol</option>
                  </select>
                  <ChevronDown
                    className={`absolute right-5 top-1/2 -translate-y-1/2 ${ui.strong}`}
                    size={20}
                  />
                </span>
              </label>

              <div className='space-y-4'>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.16em] ${ui.label}`}
                >
                  Segmented Control
                </p>
                <div
                  className={`grid h-14 grid-cols-3 overflow-hidden rounded-[12px] border ${ui.segment}`}
                >
                  {['Option 1', 'Option 2', 'Option 3'].map((option) => (
                    <button
                      className={`border-r px-3 text-sm transition last:border-r-0 ${isDark ? 'border-white/10' : 'border-[#D8D2C4]'} ${segmented === option ? 'bg-[linear-gradient(135deg,#8AB917,#4B690A)] text-[#F8F5EC]' : ui.label}`}
                      key={option}
                      onClick={() => setSegmented(option)}
                      type='button'
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell index='03' title='Cards' theme={theme}>
          <div className='grid gap-6 px-6 pb-8 pt-6 md:grid-cols-3 sm:px-8'>
            <article
              className={`rounded-[16px] border p-6 transition-colors duration-500 ${ui.panel}`}
            >
              <div className='flex items-start justify-between'>
                <p
                  className={`text-sm ${isDark ? 'text-[#E1DBCF]' : 'text-[#42503E]'}`}
                >
                  Photosynthesis Rate
                </p>
                <PlantMark className='h-16 w-16 rounded-full [&_svg]:h-7 [&_svg]:w-7' />
              </div>
              <p
                className={`mt-4 font-display text-6xl leading-none ${ui.heading}`}
              >
                98.7%
              </p>
              <p
                className={`mt-8 text-sm ${isDark ? 'text-[#9DCC1F]' : 'text-[#6FA009]'}`}
              >
                + 12.4% <span className={ui.quiet}>vs last 7 days</span>
              </p>
            </article>

            <article
              className={`rounded-[16px] border p-6 transition-colors duration-500 ${ui.panel}`}
            >
              <div className='max-w-[15rem]'>
                <p className='font-mono text-xs uppercase tracking-[0.18em] text-[#9DCC1F]'>
                  Module
                </p>
                <h3
                  className={`mt-4 font-display text-3xl leading-tight ${ui.heading}`}
                >
                  Growth Optimizer
                </h3>
                <p className={`mt-3 text-sm leading-6 ${ui.muted}`}>
                  Optimizes light, humidity, and nutrient balance.
                </p>
              </div>
              <div
                className={`mt-10 flex items-center gap-5 text-xs ${ui.quiet}`}
              >
                <span>v1.2.0</span>
                <span>12 Protocols</span>
                <button
                  className={`ml-auto flex h-9 w-9 items-center justify-center rounded-[10px] border ${isDark ? 'border-white/18' : 'border-[#C9C2B4]'}`}
                  type='button'
                >
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </article>

            <article
              className={`rounded-[16px] border p-6 transition-colors duration-500 ${ui.panel}`}
            >
              <div className='flex items-start justify-between'>
                <p
                  className={`flex items-center gap-3 text-sm ${isDark ? 'text-[#E1DBCF]' : 'text-[#42503E]'}`}
                >
                  <span className='h-3 w-3 rounded-full bg-[#9DCC1F]' />
                  System Status
                </p>
                <span className='flex h-16 w-16 items-center justify-center rounded-full border border-[#9DCC1F]/60 bg-[#9DCC1F]/5 text-[#9DCC1F] shadow-[0_0_28px_rgba(157,204,31,0.16)]'>
                  <Activity size={26} />
                </span>
              </div>
              <h3 className={`mt-6 font-display text-4xl ${ui.heading}`}>
                Optimal
              </h3>
              <p className={`mt-5 text-sm ${ui.label}`}>
                All systems operational
              </p>
              <p className={`mt-2 text-sm ${ui.quiet}`}>Last checked 2m ago</p>
            </article>
          </div>
        </SectionShell>

        <div className='grid gap-5 lg:grid-cols-2'>
          <SectionShell index='04' title='Iconography' theme={theme}>
            <div className='space-y-8 px-6 pb-8 pt-6 sm:px-8'>
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.16em] ${ui.label}`}
                >
                  Brand Icon Weight
                </p>
                <div className='mt-5 flex flex-wrap gap-9'>
                  <PlantMark className='h-16 w-16 rounded-[18px] [&_svg]:h-8 [&_svg]:w-8' />
                  {brandIcons.map(({ label, Icon }) => (
                    <span
                      className={`flex h-16 w-16 items-center justify-center rounded-[18px] border ${ui.iconBox}`}
                      key={label}
                    >
                      <Icon size={30} strokeWidth={1.25} />
                    </span>
                  ))}
                </div>
              </div>
              <div className={`border-t pt-7 ${ui.divider}`}>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.16em] ${ui.label}`}
                >
                  Utility Icon Weight
                </p>
                <div
                  className={`mt-5 flex flex-wrap gap-8 ${isDark ? 'text-[#E4DFD0]' : 'text-[#42503E]'}`}
                >
                  {utilityIcons.map(({ label, Icon }) => (
                    <Icon key={label} size={28} strokeWidth={1.45} />
                  ))}
                </div>
              </div>
            </div>
          </SectionShell>

          <SectionShell index='05' title='Tokens' theme={theme}>
            <div className='grid gap-9 px-6 pb-8 pt-6 sm:px-8 md:grid-cols-2'>
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.16em] ${ui.label}`}
                >
                  Radius Scale
                </p>
                <div className='mt-6 flex items-end gap-5'>
                  {[8, 16, 24].map((radius) => (
                    <div
                      className={`space-y-3 text-center text-sm ${ui.label}`}
                      key={radius}
                    >
                      <div
                        className={`border border-[#9DCC1F]/70 ${ui.radiusBox}`}
                        style={{
                          borderRadius: radius,
                          height: radius * 2.5,
                          width: radius * 2.5,
                        }}
                      />
                      <p>{radius}px</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.16em] ${ui.label}`}
                >
                  Spacing Scale (8pt Grid)
                </p>
                <div className='mt-6 flex h-20 items-end gap-4'>
                  {spacingTokens.map((token, index) => (
                    <div
                      className={`space-y-3 text-center text-sm ${ui.label}`}
                      key={token}
                    >
                      <div
                        className='rounded-[5px] bg-[#9DCC1F]'
                        style={{
                          height: 18 + index * 6,
                          opacity: 0.16 + index * 0.12,
                          width: 24,
                        }}
                      />
                      <p>{token}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className='md:col-span-2'>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.16em] ${ui.label}`}
                >
                  Stroke Weight
                </p>
                <div
                  className={`mt-7 grid grid-cols-3 gap-8 text-center text-sm ${ui.label}`}
                >
                  {[1, 1.5, 2].map((weight) => (
                    <div className='space-y-4' key={weight}>
                      <div
                        className={`h-px ${ui.stroke}`}
                        style={{ height: weight }}
                      />
                      <p>{weight}px</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionShell>
        </div>

        <SectionShell
          className='border-0 bg-transparent shadow-none'
          index='06'
          theme={theme}
          title='Typography'
        >
          <div className='overflow-x-auto px-6 pb-8 pt-6 sm:px-8'>
            <div className='grid min-w-[780px] grid-cols-[180px_minmax(280px,1fr)_220px] items-center gap-x-5 gap-y-4'>
              <p
                className={`text-sm font-semibold uppercase tracking-[0.12em] ${ui.label}`}
              >
                Display Heading
              </p>
              <h3
                className={`font-display text-5xl leading-none sm:text-6xl ${ui.heading}`}
              >
                Engineering life.
              </h3>
              <p className={`text-sm leading-5 ${ui.label}`}>
                <span
                  className={`block uppercase tracking-[0.12em] ${ui.strong}`}
                >
                  Cormorant Garamond
                </span>
                Bold / -1%
              </p>

              <p
                className={`text-sm font-semibold uppercase tracking-[0.12em] ${ui.label}`}
              >
                Section Heading
              </p>
              <h4
                className={`font-display text-3xl leading-tight ${ui.strong}`}
              >
                Section heading example
              </h4>
              <p className={`text-sm leading-5 ${ui.label}`}>
                <span
                  className={`block uppercase tracking-[0.12em] ${ui.strong}`}
                >
                  Cormorant Garamond
                </span>
                Bold / 0%
              </p>

              <p
                className={`text-sm font-semibold uppercase tracking-[0.12em] ${ui.label}`}
              >
                Body Text
              </p>
              <p className={`max-w-md text-base leading-7 ${ui.muted}`}>
                MiaSys unites botanical intelligence, automation, and ecological
                insight in a living system that grows with you.
              </p>
              <p className={`text-sm leading-5 ${ui.label}`}>
                <span
                  className={`block uppercase tracking-[0.12em] ${ui.strong}`}
                >
                  Manrope
                </span>
                Regular / 0%
              </p>

              <p
                className={`text-sm font-semibold uppercase tracking-[0.12em] ${ui.label}`}
              >
                Label
              </p>
              <p className={`text-sm font-semibold ${ui.strong}`}>Label Text</p>
              <p className={`text-sm leading-5 ${ui.label}`}>
                <span
                  className={`block uppercase tracking-[0.12em] ${ui.strong}`}
                >
                  Manrope
                </span>
                Medium / +2%
              </p>

              <p
                className={`text-sm font-semibold uppercase tracking-[0.12em] ${ui.label}`}
              >
                Micro Text
              </p>
              <p className={`text-xs ${ui.muted}`}>Micro text example</p>
              <p className={`text-sm leading-5 ${ui.label}`}>
                <span
                  className={`block uppercase tracking-[0.12em] ${ui.strong}`}
                >
                  Manrope
                </span>
                Regular / +4%
              </p>
            </div>
          </div>
        </SectionShell>
      </div>
    </main>
  );
}
