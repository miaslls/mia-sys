'use client';

import { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import WednesdayImage from '@/assets/img/wednesday.jpg';
import EvaImage from '@/assets/img/eva.jpg';
import MagaliImage from '@/assets/img/magali.jpg';
import MarthaImage from '@/assets/img/martha.jpg';
import PriscillaImage from '@/assets/img/priscilla.jpg';
import MiaSysLogo from '@/assets/logo/logo.svg';
import {
  Leaf,
  Sprout,
  BarChart3,
  Settings,
  ArrowUpRight,
  Search,
  ChevronDown,
  Sun,
  Moon,
  LayoutGrid,
  BookOpen,
  History,
  ArrowRight,
  Command,
  Circle,
  Square,
} from 'lucide-react';

type Theme = 'dark' | 'light';
type IconComponent = React.ComponentType<{
  size?: number;
  className?: string;
  strokeWidth?: number;
}>;

type MenuItem = {
  icon: IconComponent;
  label: string;
  active?: boolean;
};

type RelatedArticle = {
  title: string;
  desc: string;
  img: StaticImageData;
};

const menuItems: MenuItem[] = [
  { icon: LayoutGrid, label: 'Overview' },
  { icon: BarChart3, label: 'Foundations' },
  { icon: Settings, label: 'Components' },
  { icon: Square, label: 'Patterns' },
  { icon: Leaf, label: 'Content', active: true },
  { icon: BookOpen, label: 'Resources' },
  { icon: History, label: 'Changelog' },
];

const principles = [
  {
    icon: Leaf,
    title: 'Grown, Not Made',
    desc: 'Elements bloom into view through intentional motion and transforms, creating a sense of natural evolution.',
  },
  {
    icon: Circle,
    title: 'Breathe',
    desc: 'Through spacing, depth, and pacing, we give content room to exist and users room to think.',
  },
  {
    icon: Settings,
    title: 'In Harmony',
    desc: 'Every component works as part of a living system, adapting across contexts and devices.',
  },
];

const anchorLinks = [
  'The Philosophy of Organic Logic',
  'Nature as a System',
  'Designing with Intention',
  'The MiaSys Difference',
  "What's Next",
];

const relatedArticles: RelatedArticle[] = [
  {
    title: 'The Botanical Cut',
    desc: 'How asymmetric design creates organic harmony.',
    img: EvaImage,
  },
  {
    title: 'Color as Energy',
    desc: 'Understanding our botanical color system.',
    img: MagaliImage,
  },
  {
    title: 'Motion, Naturally',
    desc: 'Crafting transitions that feel alive, not animated.',
    img: MarthaImage,
  },
];

function panelClass(isDark: boolean, extra = '') {
  return [
    'border backdrop-blur-xl transition-colors duration-500',
    isDark
      ? 'border-white/10 bg-white/[0.035] shadow-[0_24px_80px_rgba(0,0,0,0.32)]'
      : 'border-black/10 bg-white/70 shadow-[0_24px_80px_rgba(15,23,42,0.08)]',
    extra,
  ].join(' ');
}

export default function ArticlePageContent() {
  const [theme, setTheme] = useState<Theme>('dark');

  const isDark = theme === 'dark';
  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div
      className={`min-h-screen transition-colors duration-700 ${
        isDark ? 'bg-[#05090D] text-zinc-300' : 'bg-[#F2F0E8] text-slate-700'
      }`}
    >
      <style>
        {`
          .article-hero-blob {
            border-radius: 48% 52% 34% 66% / 43% 31% 69% 57%;
          }

          .article-scroll::-webkit-scrollbar {
            width: 6px;
          }

          .article-scroll::-webkit-scrollbar-thumb {
            background: rgba(166, 226, 46, 0.28);
            border-radius: 999px;
          }
        `}
      </style>

      <div className='flex min-h-screen'>
        <Sidebar isDark={isDark} />

        <main className='article-scroll h-screen min-w-0 flex-1 overflow-y-auto'>
          <Header isDark={isDark} onToggleTheme={toggleTheme} />

          <div className='mx-auto w-full max-w-[1060px] px-5 pb-8 pt-8 sm:px-8 lg:px-12'>
            <section className='grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start'>
              <HeroCopy isDark={isDark} />
              <HeroVisual isDark={isDark} />
            </section>

            <div className='mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_316px]'>
              <ArticleBody isDark={isDark} />
              <ArticleRail isDark={isDark} />
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

function Sidebar({ isDark }: { isDark: boolean }) {
  return (
    <aside
      className={`sticky top-0 hidden h-screen w-[252px] shrink-0 flex-col border-r px-6 py-7 transition-colors xl:flex ${
        isDark
          ? 'border-white/10 bg-[#05090D]'
          : 'border-black/10 bg-[#F8F6EF]'
      }`}
    >
      <div
        aria-label='MiaSys Botanical Engineering'
        className={`mb-14 h-[82px] w-[158px] bg-current ${
          isDark ? 'text-white' : 'text-slate-950'
        }`}
        role='img'
        style={{
          maskImage: `url(${MiaSysLogo.src})`,
          maskPosition: 'left center',
          maskRepeat: 'no-repeat',
          maskSize: 'contain',
          WebkitMaskImage: `url(${MiaSysLogo.src})`,
          WebkitMaskPosition: 'left center',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: 'contain',
        }}
      />

      <nav className='flex-1 space-y-4'>
        {menuItems.map((item) => (
          <button
            key={item.label}
            type='button'
            className={`flex h-12 w-full items-center gap-4 rounded-[24px] border px-4 text-sm transition-all ${
              item.active
                ? 'border-lime-400/45 bg-lime-400/10 text-lime-400'
                : isDark
                  ? 'border-transparent text-zinc-400 hover:border-white/10 hover:bg-white/[0.04] hover:text-zinc-100'
                  : 'border-transparent text-slate-500 hover:border-black/10 hover:bg-white/80 hover:text-slate-900'
            }`}
          >
            <item.icon size={20} strokeWidth={1.5} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className='mt-auto'>
        <button
          type='button'
          className={panelClass(
            isDark,
            'flex w-full items-center gap-3 rounded-[24px] p-3 text-left',
          )}
        >
          <span className='relative h-10 w-10 overflow-hidden rounded-full bg-zinc-900'>
            <Image
              src={WednesdayImage}
              alt='Dr. Elara Voss'
              fill
              sizes='40px'
              className='object-cover'
            />
          </span>
          <span className='min-w-0 flex-1'>
            <span
              className={`block text-[11px] font-semibold ${
                isDark ? 'text-zinc-100' : 'text-slate-950'
              }`}
            >
              Dr. Elara Voss
            </span>
            <span className='block text-[10px] text-zinc-500'>Lead Botanist</span>
          </span>
          <ChevronDown size={16} className='text-zinc-500' />
        </button>
      </div>
    </aside>
  );
}

function Header({
  isDark,
  onToggleTheme,
}: {
  isDark: boolean;
  onToggleTheme: () => void;
}) {
  return (
    <header
      className={`sticky top-0 z-40 border-b px-5 py-6 backdrop-blur-2xl transition-colors sm:px-8 lg:px-12 ${
        isDark
          ? 'border-transparent bg-[#05090D]/78'
          : 'border-black/5 bg-[#F2F0E8]/80'
      }`}
    >
      <div className='mx-auto flex max-w-[1060px] items-center justify-between gap-5'>
        <nav className='hidden items-center gap-10 md:flex'>
          {['Design System', 'Guides', 'Articles', 'Updates'].map((link) => (
            <a
              key={link}
              href='#'
              className={`relative text-sm transition-colors ${
                link === 'Articles'
                  ? isDark
                    ? 'text-white'
                    : 'text-slate-950'
                  : isDark
                    ? 'text-zinc-400 hover:text-zinc-100'
                    : 'text-slate-500 hover:text-slate-950'
              }`}
            >
              {link}
              {link === 'Articles' && (
                <span className='absolute -bottom-5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-lime-400 shadow-[0_0_16px_rgba(166,226,46,0.8)]' />
              )}
            </a>
          ))}
        </nav>

        <div className='flex min-w-0 flex-1 items-center justify-end gap-3'>
          <label className='relative block w-full max-w-[276px]'>
            <span className='sr-only'>Search articles</span>
            <Search
              size={16}
              className='absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500'
            />
            <input
              type='search'
              placeholder='Search...'
              className={`h-11 w-full rounded-full border py-2 pl-11 pr-14 text-sm outline-none transition-colors ${
                isDark
                  ? 'border-lime-200/15 bg-white/[0.04] text-zinc-200 placeholder:text-zinc-500 focus:border-lime-400/55'
                  : 'border-black/10 bg-white/70 text-slate-900 placeholder:text-slate-400 focus:border-lime-500'
              }`}
            />
            <span className='absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-1 text-[10px] text-zinc-500'>
              <Command size={11} />K
            </span>
          </label>

          <button
            type='button'
            onClick={onToggleTheme}
            aria-label='Toggle color theme'
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors ${
              isDark
                ? 'border-lime-200/15 bg-white/[0.04] text-zinc-400 hover:text-lime-300'
                : 'border-black/10 bg-white/80 text-slate-500 hover:text-lime-700'
            }`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroCopy({ isDark }: { isDark: boolean }) {
  return (
    <div className='pt-3'>
      <nav className='mb-12 flex flex-wrap items-center gap-3 text-xs'>
        <a href='#' className='text-lime-400'>
          Home
        </a>
        <span className='text-zinc-600'>/</span>
        <a href='#' className='text-lime-400'>
          Articles
        </a>
        <span className='text-zinc-600'>/</span>
        <span className={isDark ? 'text-zinc-400' : 'text-slate-500'}>
          Design Philosophy
        </span>
      </nav>

      <div className='mb-6 inline-flex rounded-full border border-lime-400/30 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-lime-400'>
        Design Philosophy
      </div>

      <h1
        className={`font-display max-w-[620px] text-[3.7rem] leading-[0.98] tracking-normal sm:text-[4.7rem] lg:text-[4.95rem] ${
          isDark ? 'text-zinc-50' : 'text-slate-950'
        }`}
      >
        Designing with Nature, Building for Life
        <span className='text-lime-400'>.</span>
      </h1>

      <p
        className={`mt-7 max-w-[520px] text-base leading-7 ${
          isDark ? 'text-zinc-400' : 'text-slate-600'
        }`}
      >
        At MiaSys, we believe software should feel grown and living. Our design
        philosophy merges botanical intelligence with engineered precision to
        create digital experiences that breathe.
      </p>

      <div className='mt-9 flex flex-wrap items-center gap-8'>
        <div className='flex items-center gap-4'>
          <span className='relative h-12 w-12 overflow-hidden rounded-full bg-zinc-900'>
            <Image
              src={WednesdayImage}
              alt='Dr. Elara Voss'
              fill
              sizes='48px'
              className='object-cover'
            />
          </span>
          <span>
            <span
              className={`block text-sm ${isDark ? 'text-zinc-100' : 'text-slate-950'}`}
            >
              By Dr. Elara Voss
            </span>
            <span className='block text-xs text-zinc-500'>Lead Botanist</span>
          </span>
        </div>
        <span
          className={`hidden h-12 w-px sm:block ${
            isDark ? 'bg-white/10' : 'bg-black/10'
          }`}
        />
        <div className='text-sm'>
          <p className={isDark ? 'text-zinc-200' : 'text-slate-800'}>
            May 24, 2024
          </p>
          <p className='text-xs text-zinc-500'>8 min read</p>
        </div>
      </div>
    </div>
  );
}

function HeroVisual({ isDark }: { isDark: boolean }) {
  return (
    <div className='relative hidden min-h-[440px] lg:block'>
      <div className='absolute -right-4 top-2 h-[415px] w-[370px] rounded-full border border-lime-400/35 opacity-70' />
      <div
        className={`article-hero-blob absolute right-0 top-2 h-[430px] w-[360px] overflow-hidden border ${
          isDark ? 'border-lime-400/25 bg-lime-400/5' : 'border-lime-700/20 bg-lime-100'
        }`}
      >
        <Image
          src={EvaImage}
          alt='Botanical leaves for the MiaSys article'
          fill
          priority
          sizes='360px'
          className={`object-cover ${
            isDark ? 'brightness-[0.48] contrast-125 saturate-125' : 'brightness-95'
          }`}
        />
        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-[radial-gradient(circle_at_78%_35%,rgba(166,226,46,0.24),transparent_18%),linear-gradient(160deg,rgba(5,9,13,0.08),rgba(5,9,13,0.82)_78%)]'
              : 'bg-[linear-gradient(160deg,rgba(242,240,232,0),rgba(242,240,232,0.45)_78%)]'
          }`}
        />
      </div>
      <div className='absolute right-10 top-20 h-28 w-28 rounded-full bg-lime-400/10 blur-3xl' />
    </div>
  );
}

function ArticleBody({ isDark }: { isDark: boolean }) {
  return (
    <article className='min-w-0'>
      <div
        className={`mb-11 h-px w-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`}
      />

      <section className='space-y-7'>
        <h2
          className={`font-display text-4xl leading-tight ${
            isDark ? 'text-zinc-50' : 'text-slate-950'
          }`}
        >
          The Philosophy of Organic Logic
        </h2>
        <p
          className={`max-w-[570px] text-base leading-7 ${
            isDark ? 'text-zinc-400' : 'text-slate-600'
          }`}
        >
          MiaSys is built on the principle of Organic Logic - the belief that
          systems should mimic nature&apos;s intelligence: adaptive, efficient, and
          in harmony with its environment.
        </p>

        <div className={panelClass(isDark, 'rounded-[28px] p-5 sm:p-7')}>
          <div className='flex items-center gap-6'>
            <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-[18px] border border-lime-400/25 bg-lime-400/10 text-lime-400'>
              <Leaf size={30} strokeWidth={1.5} />
            </div>
            <p
              className={`font-display text-3xl leading-snug ${
                isDark ? 'text-zinc-50' : 'text-slate-950'
              }`}
            >
              We don&apos;t just design interfaces.
              <br />
              We <span className='italic text-lime-400'>cultivate</span>{' '}
              experiences.
            </p>
          </div>
        </div>

        <p
          className={`pt-3 text-base ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}
        >
          Our approach blends three core ideals:
        </p>

        <div className='space-y-9 pt-2'>
          {principles.map((principle) => (
            <div key={principle.title} className='flex gap-7'>
              <div className='flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[18px] border border-lime-400/35 bg-lime-400/10 text-lime-400 shadow-[0_0_28px_rgba(166,226,46,0.08)]'>
                <principle.icon size={30} strokeWidth={1.4} />
              </div>
              <div>
                <h3
                  className={`font-display text-2xl ${
                    isDark ? 'text-zinc-50' : 'text-slate-950'
                  }`}
                >
                  {principle.title}
                </h3>
                <p
                  className={`mt-2 max-w-[520px] text-sm leading-6 ${
                    isDark ? 'text-zinc-500' : 'text-slate-500'
                  }`}
                >
                  {principle.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className={`mt-12 space-y-7 border-t pt-9 ${
          isDark ? 'border-white/10' : 'border-black/10'
        }`}
      >
        <h2
          className={`font-display text-4xl leading-tight ${
            isDark ? 'text-zinc-50' : 'text-slate-950'
          }`}
        >
          Nature as a System
        </h2>
        <p
          className={`max-w-[600px] text-base leading-7 ${
            isDark ? 'text-zinc-400' : 'text-slate-600'
          }`}
        >
          Nature is our greatest engineer. From fractals to foliage, every
          pattern serves a purpose. MiaSys translates these patterns into a
          design language that is both beautiful and functional.
        </p>

        <button
          type='button'
          className={panelClass(
            isDark,
            'group flex w-full items-center gap-6 rounded-[24px] p-3 text-left sm:p-4',
          )}
        >
          <span className='relative hidden h-[72px] w-[126px] shrink-0 overflow-hidden rounded-[18px] sm:block'>
            <Image
              src={PriscillaImage}
              alt='Botanical reference'
              fill
              sizes='126px'
              className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                isDark ? 'brightness-[0.56] contrast-125' : ''
              }`}
            />
          </span>
          <span
            className={`min-w-0 flex-1 font-display text-2xl leading-snug ${
              isDark ? 'text-zinc-50' : 'text-slate-950'
            }`}
          >
            Biomimicry drives clarity.
            <br />
            Clarity drives <span className='text-lime-400'>trust.</span>
          </span>
          <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition-colors group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-black'>
            <ArrowUpRight size={21} />
          </span>
        </button>

        <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
          We study. We observe. We iterate. This is how we grow.
        </p>
      </section>

    </article>
  );
}

function ArticleRail({ isDark }: { isDark: boolean }) {
  return (
    <aside className='space-y-5 lg:sticky lg:top-28 lg:self-start'>
      <OnThisPage isDark={isDark} />
      <RelatedArticles isDark={isDark} />
      <CommunityCard isDark={isDark} />
    </aside>
  );
}

function OnThisPage({ isDark }: { isDark: boolean }) {
  return (
    <section className={panelClass(isDark, 'rounded-[32px] p-7')}>
      <h2 className='text-[11px] uppercase tracking-[0.12em] text-zinc-400'>
        On This Page
      </h2>
      <ul className='mt-5 space-y-5 border-l border-white/10 pl-4'>
        {anchorLinks.map((link, index) => (
          <li key={link} className='relative'>
            {index === 0 && (
              <span className='absolute -left-[17px] top-0 h-7 w-px bg-lime-400' />
            )}
            <a
              href='#'
              className={`text-sm transition-colors ${
                index === 0
                  ? 'text-lime-400'
                  : isDark
                    ? 'text-zinc-400 hover:text-zinc-100'
                    : 'text-slate-500 hover:text-slate-950'
              }`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function RelatedArticles({ isDark }: { isDark: boolean }) {
  return (
    <section className={panelClass(isDark, 'rounded-[32px] p-7')}>
      <h2 className='text-[11px] uppercase tracking-[0.12em] text-zinc-400'>
        Related Articles
      </h2>
      <div className='mt-5 divide-y divide-white/10'>
        {relatedArticles.map((article) => (
          <a
            key={article.title}
            href='#'
            className='group flex items-center gap-4 py-4 first:pt-0 last:pb-0'
          >
            <span className='relative h-[78px] w-[78px] shrink-0 overflow-hidden rounded-[18px] border border-white/10'>
              <Image
                src={article.img}
                alt={article.title}
                fill
                sizes='78px'
                className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                  isDark ? 'brightness-[0.55] contrast-125 saturate-110' : ''
                }`}
              />
            </span>
            <span className='min-w-0 flex-1'>
              <span
                className={`block font-display text-lg leading-tight ${
                  isDark ? 'text-zinc-50' : 'text-slate-950'
                }`}
              >
                {article.title}
              </span>
              <span
                className={`mt-1 block text-sm leading-5 ${
                  isDark ? 'text-zinc-400' : 'text-slate-500'
                }`}
              >
                {article.desc}
              </span>
            </span>
            <ArrowRight
              size={18}
              className='shrink-0 text-zinc-500 transition-colors group-hover:text-lime-400'
            />
          </a>
        ))}
      </div>
    </section>
  );
}

function CommunityCard({ isDark }: { isDark: boolean }) {
  return (
    <section className={panelClass(isDark, 'rounded-[32px] p-7')}>
      <div className='flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-400/25 bg-lime-400/10 text-lime-400'>
        <Sprout size={23} strokeWidth={1.5} />
      </div>
      <h2
        className={`mt-6 font-display text-2xl leading-tight ${
          isDark ? 'text-zinc-50' : 'text-slate-950'
        }`}
      >
        Have thoughts to share?
      </h2>
      <p className={`mt-2 text-sm leading-6 ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}>
        Join the conversation in our community forum.
      </p>
      <a
        href='#'
        className={`mt-6 flex h-11 items-center justify-between rounded-full border px-5 text-sm transition-colors ${
          isDark
            ? 'border-lime-200/15 text-zinc-300 hover:border-lime-400/40 hover:text-lime-300'
            : 'border-black/10 text-slate-700 hover:border-lime-500/50 hover:text-lime-700'
        }`}
      >
        Visit Community
        <ArrowUpRight size={18} />
      </a>
    </section>
  );
}
