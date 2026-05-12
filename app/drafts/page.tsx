import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drafts | MiaSys Design System',
  description: 'Index of active MiaSys draft routes.',
};

const draftRoutes = [
  {
    href: '/drafts/showcase',
    title: 'Showcase',
    eyebrow: 'System preview',
    description: 'A botanical interface sample covering theme, hero, cards, and brand expression.',
  },
  {
    href: '/drafts/component-system',
    title: 'Component System',
    eyebrow: 'UI foundations',
    description:
      'Controls, iconography, tokens, and reusable interface states for the design system.',
  },
  {
    href: '/drafts/layout-patterns',
    title: 'Layout Patterns',
    eyebrow: 'Structure',
    description: 'Spacing, card anatomy, lists, navigation, and responsive layout examples.',
  },
  {
    href: '/drafts/article',
    title: 'Article',
    eyebrow: 'Content format',
    description: 'Editorial page draft for long-form design-system content and related resources.',
  },
];

export default function DraftsIndexPage() {
  return (
    <main className="min-h-screen bg-[#090D10] px-4 py-6 text-[#F7F6F2] sm:px-6 md:px-12 md:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="flex flex-col gap-5 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A6E22E]">
              MiaSys drafts
            </p>
            <h1 className="font-display mt-3 text-4xl leading-none text-white sm:text-5xl md:text-6xl">
              Draft route index
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
              Active child routes for reviewing interface explorations, design system sections, and
              content drafts.
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-[#A6E22E]" />
            <span>{draftRoutes.length} drafts</span>
          </div>
        </header>

        <section aria-label="Draft routes" className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {draftRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="group flex min-h-72 flex-col justify-between rounded-[8px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition hover:-translate-y-1 hover:border-[#A6E22E]/50 hover:bg-white/[0.055] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A6E22E]"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A6E22E]">
                  {route.eyebrow}
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-white">{route.title}</h2>
                <p className="mt-4 text-sm leading-6 text-zinc-400">{route.description}</p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                <span className="font-mono text-xs text-zinc-500">{route.href}</span>
                <span
                  aria-hidden="true"
                  className="text-lg leading-none text-[#A6E22E] transition group-hover:translate-x-1"
                >
                  -&gt;
                </span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
