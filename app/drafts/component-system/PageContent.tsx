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
  { label: 'Active', className: 'translate-y-[1px] scale-[0.98] brightness-90' },
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

function SectionShell({
  index,
  title,
  children,
  className = '',
}: {
  index: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`rounded-[28px] border border-white/12 bg-white/[0.025] shadow-[0_24px_80px_rgba(0,0,0,0.24)] ${className}`}>
      <div className='flex items-center gap-5 px-6 pt-5 sm:px-8'>
        <span className='font-mono text-sm text-[#9DCC1F]'>{index}</span>
        <h2 className='text-sm font-semibold uppercase tracking-[0.16em] text-[#F5F1E6]'>
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function PlantMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-[1.35rem] border border-[#9DCC1F]/60 bg-[#9DCC1F]/5 text-[#9DCC1F] shadow-[0_0_28px_rgba(157,204,31,0.16)] ${className}`}>
      <Leaf strokeWidth={1.35} />
    </span>
  );
}

function StateButton({
  tone,
  stateClass,
}: {
  tone: 'primary' | 'secondary' | 'ghost';
  stateClass: string;
}) {
  const styles = {
    primary:
      'border-[#9DCC1F]/70 bg-[linear-gradient(135deg,#8AB917,#3E5B08)] text-[#F9F6EA] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_12px_24px_rgba(91,128,8,0.24)]',
    secondary:
      'border-[#F6F2E5] bg-[#F8F5EC] text-[#101312] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_10px_22px_rgba(246,242,229,0.12)]',
    ghost:
      'border-white/18 bg-transparent text-[#F5F1E6] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]',
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
  const [theme, setTheme] = useState('dark');
  const [toggle, setToggle] = useState(true);
  const [checkbox, setCheckbox] = useState(true);
  const [radio, setRadio] = useState<'selected' | 'unselected'>('selected');
  const [segmented, setSegmented] = useState('Option 1');
  const isDark = theme === 'dark';
  const toggleTheme = () =>
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return (
    <main className='min-h-screen overflow-hidden bg-[#07090A] px-4 py-6 text-[#F5F1E6] sm:px-8 md:px-12 md:py-10'>
      <style>
        {`
          .component-noise::before {
            content: '';
            position: fixed;
            inset: 0;
            pointer-events: none;
            opacity: 0.16;
            background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
            background-size: 100% 3px;
            mix-blend-mode: soft-light;
          }

          .field-focus:focus {
            border-color: rgba(157, 204, 31, 0.8);
            box-shadow: 0 0 0 1px rgba(157, 204, 31, 0.35);
            outline: none;
          }
        `}
      </style>

      <div className='component-noise relative mx-auto max-w-7xl space-y-8 md:space-y-12'>
        <header className='flex flex-col items-start justify-between gap-5 md:flex-row md:items-center md:gap-8'>
          <div className='flex items-center gap-4 sm:gap-6'>
            <div
              className={`grid h-12 w-12 shrink-0 place-items-center rounded-[18px] border shadow-[0_0_32px_rgba(166,226,46,0.12)] transition-all sm:h-16 sm:w-16 sm:rounded-[26px] ${isDark ? 'border-[#A6E22E]/40 bg-[#A6E22E]/5 text-[#F7F6F2]' : 'border-[#739E1C]/40 bg-[#F7F6F2] text-[#516F12]'}`}
            >
              <Leaf className='h-6 w-6 sm:h-8 sm:w-8' strokeWidth={1.5} />
            </div>
            <div>
              <h1
                className={`font-display text-3xl tracking-tight transition-colors sm:text-4xl ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                MiaSys
              </h1>
              <p
                className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] transition-colors sm:text-[10px] sm:tracking-[0.2em] ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}
              >
                Component System{' '}
                <span className='ml-1 text-lime-500 sm:ml-2'>v 1.5.2</span>
              </p>
            </div>
          </div>

          <div className='flex w-full items-center justify-between gap-4 md:w-auto md:justify-end md:gap-6'>
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

        <SectionShell index='01' title='Buttons'>
          <div className='overflow-x-auto px-6 pb-8 pt-6 sm:px-8'>
            <div className='grid min-w-[860px] grid-cols-[84px_repeat(4,minmax(160px,1fr))] gap-x-10 gap-y-4'>
              <div />
              {['Primary', 'Secondary', 'Ghost', 'Pill / Tag'].map((label) => (
                <p
                  className='text-xs font-semibold uppercase tracking-[0.16em] text-[#C8C1B4]'
                  key={label}
                >
                  {label}
                </p>
              ))}

              {buttonStates.map((state) => (
                <div className='contents' key={state.label}>
                  <p className='flex h-12 items-center text-sm text-[#B7B0A5]'>
                    {state.label}
                  </p>
                  <StateButton tone='primary' stateClass={state.className} />
                  <StateButton tone='secondary' stateClass={state.className} />
                  <StateButton tone='ghost' stateClass={state.className} />
                  <div
                    className={`flex h-12 w-full min-w-40 items-center justify-between rounded-[14px] border border-white/14 bg-[#0D1011] px-4 transition ${state.className} ${state.label === 'Hover' ? 'border-[#9DCC1F]' : ''}`}
                  >
                    <span className='inline-flex items-center gap-2 text-sm text-[#F5F1E6]'>
                      <Leaf size={16} className='text-[#9DCC1F]' />
                      Botanical
                    </span>
                    <span className='text-sm text-[#E5DEC8]'>Logic</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell index='02' title='Inputs & Controls'>
          <div className='grid gap-10 px-6 pb-8 pt-6 md:grid-cols-3 sm:px-8'>
            <div className='space-y-8'>
              <label className='block space-y-3'>
                <span className='text-xs font-semibold uppercase tracking-[0.16em] text-[#C8C1B4]'>
                  Text Input
                </span>
                <span className='relative block'>
                  <input
                    className='field-focus h-14 w-full rounded-[12px] border border-[#9DCC1F]/45 bg-[#0A0D0E] px-5 pr-12 text-sm text-[#F5F1E6] placeholder:text-[#9B9489]'
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
                <p className='text-xs font-semibold uppercase tracking-[0.16em] text-[#C8C1B4]'>
                  Toggle
                </p>
                <div className='flex gap-4'>
                  <button
                    aria-pressed={toggle}
                    className={`relative h-9 w-[74px] rounded-full border transition ${toggle ? 'border-[#9DCC1F]/60 bg-[linear-gradient(135deg,#9DCC1F,#4E690B)]' : 'border-white/20 bg-[#0D1011]'}`}
                    onClick={() => setToggle((current) => !current)}
                    type='button'
                  >
                    <span
                      className={`absolute top-1 h-7 w-7 rounded-full bg-[#F7F3E8] shadow transition ${toggle ? 'left-10' : 'left-1'}`}
                    />
                  </button>
                  <button
                    aria-pressed='false'
                    className='relative h-9 w-[74px] rounded-full border border-white/24 bg-[#0D1011]'
                    type='button'
                  >
                    <span className='absolute left-1 top-1 h-7 w-7 rounded-full bg-[#F7F3E8] shadow' />
                  </button>
                </div>
              </div>
            </div>

            <div className='space-y-8'>
              <label className='block space-y-3'>
                <span className='text-xs font-semibold uppercase tracking-[0.16em] text-[#C8C1B4]'>
                  Search Field
                </span>
                <span className='relative block'>
                  <Search
                    className='absolute left-5 top-1/2 -translate-y-1/2 text-[#F5F1E6]'
                    size={20}
                    strokeWidth={1.5}
                  />
                  <input
                    className='field-focus h-14 w-full rounded-full border border-[#9DCC1F]/45 bg-[#0A0D0E] py-0 pl-14 pr-5 text-sm text-[#F5F1E6] placeholder:text-[#9B9489]'
                    placeholder='Search protocols...'
                    type='search'
                  />
                </span>
              </label>

              <div className='grid grid-cols-2 gap-8'>
                <div className='space-y-4'>
                  <p className='text-xs font-semibold uppercase tracking-[0.16em] text-[#C8C1B4]'>
                    Checkbox
                  </p>
                  <button
                    className='flex items-center gap-3 text-sm text-[#F5F1E6]'
                    onClick={() => setCheckbox((current) => !current)}
                    type='button'
                  >
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-[5px] border ${checkbox ? 'border-[#9DCC1F] bg-[#7DA513]' : 'border-white/24 bg-transparent'}`}
                    >
                      {checkbox ? <Check size={15} strokeWidth={2.4} /> : null}
                    </span>
                    Checked state
                  </button>
                  <div className='flex items-center gap-3 text-sm text-[#B7B0A5]'>
                    <span className='h-6 w-6 rounded-[5px] border border-white/24' />
                    Unchecked state
                  </div>
                </div>

                <div className='space-y-4'>
                  <p className='text-xs font-semibold uppercase tracking-[0.16em] text-[#C8C1B4]'>
                    Radio
                  </p>
                  <button
                    className='flex items-center gap-3 text-sm text-[#F5F1E6]'
                    onClick={() =>
                      setRadio((current) =>
                        current === 'selected' ? 'unselected' : 'selected',
                      )
                    }
                    type='button'
                  >
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full border ${radio === 'selected' ? 'border-[#9DCC1F] bg-[#7DA513]' : 'border-white/24'}`}
                    >
                      {radio === 'selected' ? (
                        <span className='h-2.5 w-2.5 rounded-full bg-[#F7F3E8]' />
                      ) : null}
                    </span>
                    Selected
                  </button>
                  <div className='flex items-center gap-3 text-sm text-[#B7B0A5]'>
                    <span className='h-6 w-6 rounded-full border border-white/24' />
                    Unselected
                  </div>
                </div>
              </div>
            </div>

            <div className='space-y-8'>
              <label className='block space-y-3'>
                <span className='text-xs font-semibold uppercase tracking-[0.16em] text-[#C8C1B4]'>
                  Select / Dropdown
                </span>
                <span className='relative block'>
                  <select className='field-focus h-14 w-full appearance-none rounded-[12px] border border-white/20 bg-[#0A0D0E] px-5 text-sm text-[#F5F1E6]'>
                    <option>Select an option</option>
                    <option>Growth Optimizer</option>
                    <option>Nutrient Protocol</option>
                  </select>
                  <ChevronDown
                    className='absolute right-5 top-1/2 -translate-y-1/2 text-[#F5F1E6]'
                    size={20}
                  />
                </span>
              </label>

              <div className='space-y-4'>
                <p className='text-xs font-semibold uppercase tracking-[0.16em] text-[#C8C1B4]'>
                  Segmented Control
                </p>
                <div className='grid h-14 grid-cols-3 overflow-hidden rounded-[12px] border border-[#9DCC1F]/45 bg-[#090B0C]'>
                  {['Option 1', 'Option 2', 'Option 3'].map((option) => (
                    <button
                      className={`border-r border-white/10 px-3 text-sm transition last:border-r-0 ${segmented === option ? 'bg-[linear-gradient(135deg,#8AB917,#4B690A)] text-[#F8F5EC]' : 'text-[#C8C1B4]'}`}
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

        <SectionShell index='03' title='Cards'>
          <div className='grid gap-6 px-6 pb-8 pt-6 md:grid-cols-3 sm:px-8'>
            <article className='rounded-[16px] border border-white/14 bg-[#0B0E0F] p-6'>
              <div className='flex items-start justify-between'>
                <p className='text-sm text-[#E1DBCF]'>Photosynthesis Rate</p>
                <PlantMark className='h-16 w-16 rounded-full [&_svg]:h-7 [&_svg]:w-7' />
              </div>
              <p className='mt-4 font-display text-6xl leading-none text-white'>98.7%</p>
              <p className='mt-8 text-sm text-[#9DCC1F]'>+ 12.4% <span className='text-[#9B9489]'>vs last 7 days</span></p>
            </article>

            <article className='rounded-[16px] border border-white/14 bg-[#0B0E0F] p-6'>
              <div className='max-w-[15rem]'>
                <p className='font-mono text-xs uppercase tracking-[0.18em] text-[#9DCC1F]'>
                  Module
                </p>
                <h3 className='mt-4 font-display text-3xl leading-tight text-white'>
                  Growth Optimizer
                </h3>
                <p className='mt-3 text-sm leading-6 text-[#B7B0A5]'>
                  Optimizes light, humidity, and nutrient balance.
                </p>
              </div>
              <div className='mt-10 flex items-center gap-5 text-xs text-[#A9A196]'>
                <span>v1.2.0</span>
                <span>12 Protocols</span>
                <button
                  className='ml-auto flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/18'
                  type='button'
                >
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </article>

            <article className='rounded-[16px] border border-white/14 bg-[#0B0E0F] p-6'>
              <div className='flex items-start justify-between'>
                <p className='flex items-center gap-3 text-sm text-[#E1DBCF]'>
                  <span className='h-3 w-3 rounded-full bg-[#9DCC1F]' />
                  System Status
                </p>
                <span className='flex h-16 w-16 items-center justify-center rounded-full border border-[#9DCC1F]/60 bg-[#9DCC1F]/5 text-[#9DCC1F] shadow-[0_0_28px_rgba(157,204,31,0.16)]'>
                  <Activity size={26} />
                </span>
              </div>
              <h3 className='mt-6 font-display text-4xl text-white'>Optimal</h3>
              <p className='mt-5 text-sm text-[#C8C1B4]'>All systems operational</p>
              <p className='mt-2 text-sm text-[#9B9489]'>Last checked 2m ago</p>
            </article>
          </div>
        </SectionShell>

        <div className='grid gap-5 lg:grid-cols-2'>
          <SectionShell index='04' title='Iconography'>
            <div className='space-y-8 px-6 pb-8 pt-6 sm:px-8'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-[0.16em] text-[#C8C1B4]'>
                  Brand Icon Weight
                </p>
                <div className='mt-5 flex flex-wrap gap-9'>
                  <PlantMark className='h-16 w-16 rounded-[18px] [&_svg]:h-8 [&_svg]:w-8' />
                  {brandIcons.map(({ label, Icon }) => (
                    <span
                      className='flex h-16 w-16 items-center justify-center rounded-[18px] border border-white/16 text-[#F5F1E6]'
                      key={label}
                    >
                      <Icon size={30} strokeWidth={1.25} />
                    </span>
                  ))}
                </div>
              </div>
              <div className='border-t border-white/10 pt-7'>
                <p className='text-xs font-semibold uppercase tracking-[0.16em] text-[#C8C1B4]'>
                  Utility Icon Weight
                </p>
                <div className='mt-5 flex flex-wrap gap-8 text-[#E4DFD0]'>
                  {utilityIcons.map(({ label, Icon }) => (
                    <Icon key={label} size={28} strokeWidth={1.45} />
                  ))}
                </div>
              </div>
            </div>
          </SectionShell>

          <SectionShell index='05' title='Tokens'>
            <div className='grid gap-9 px-6 pb-8 pt-6 sm:px-8 md:grid-cols-2'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-[0.16em] text-[#C8C1B4]'>
                  Radius Scale
                </p>
                <div className='mt-6 flex items-end gap-5'>
                  {[8, 16, 24].map((radius) => (
                    <div className='space-y-3 text-center text-sm text-[#C8C1B4]' key={radius}>
                      <div
                        className='border border-[#9DCC1F]/70 bg-white/[0.02]'
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
                <p className='text-xs font-semibold uppercase tracking-[0.16em] text-[#C8C1B4]'>
                  Spacing Scale (8pt Grid)
                </p>
                <div className='mt-6 flex h-20 items-end gap-4'>
                  {spacingTokens.map((token, index) => (
                    <div className='space-y-3 text-center text-sm text-[#C8C1B4]' key={token}>
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
                <p className='text-xs font-semibold uppercase tracking-[0.16em] text-[#C8C1B4]'>
                  Stroke Weight
                </p>
                <div className='mt-7 grid grid-cols-3 gap-8 text-center text-sm text-[#C8C1B4]'>
                  {[1, 1.5, 2].map((weight) => (
                    <div className='space-y-4' key={weight}>
                      <div
                        className='h-px bg-[#F5F1E6]'
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

        <SectionShell index='06' title='Typography'>
          <div className='grid gap-10 px-6 pb-8 pt-6 md:grid-cols-[220px_1fr_240px] sm:px-8'>
            <div className='space-y-7 text-sm font-semibold uppercase tracking-[0.12em] text-[#C8C1B4]'>
              <p>Display Heading</p>
              <p>Section Heading</p>
              <p>Body Text</p>
              <p>Label</p>
              <p>Micro Text</p>
            </div>

            <div>
              <h3 className='font-display text-5xl leading-tight text-white sm:text-6xl'>
                Engineering life.
              </h3>
              <h4 className='mt-5 font-display text-3xl text-[#F5F1E6]'>
                Section heading example
              </h4>
              <p className='mt-5 max-w-md text-base leading-7 text-[#B7B0A5]'>
                MiaSys unites botanical intelligence, automation, and ecological
                insight in a living system that grows with you.
              </p>
              <p className='mt-5 text-sm font-semibold text-[#F5F1E6]'>Label Text</p>
              <p className='mt-2 text-xs text-[#B7B0A5]'>Micro text example</p>
            </div>

            <div className='space-y-5 text-sm leading-5 text-[#C8C1B4]'>
              <p>
                <span className='block uppercase tracking-[0.12em] text-[#F5F1E6]'>
                  Cormorant Garamond
                </span>
                Bold / -1%
              </p>
              <p>
                <span className='block uppercase tracking-[0.12em] text-[#F5F1E6]'>
                  Manrope
                </span>
                Medium / +2%
              </p>
              <p>Manrope<br />Regular / 0%</p>
              <p>Manrope<br />Regular / +4%</p>
            </div>
          </div>
        </SectionShell>

        <footer className='flex justify-center pb-2 pt-1'>
          <div className='flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.025] py-2 pl-3 pr-7 text-base text-[#D5D0C5]'>
            <PlantMark className='h-12 w-12 rounded-full [&_svg]:h-6 [&_svg]:w-6' />
            Organic by logic. <span className='text-[#9DCC1F]'>Engineered for life.</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
