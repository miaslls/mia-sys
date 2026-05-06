import { tokens } from '../../_lib/constants';
import { ColorCard } from '../color-card';
import { SectionHeader } from '../section-header';

interface FoundationsTabProps {
  isDarkMode: boolean;
}

export function FoundationsTab({ isDarkMode }: FoundationsTabProps) {
  return (
    <div className='space-y-40 animate-in fade-in slide-in-from-bottom-12 duration-1000'>
      <SectionHeader
        title='Foundations.'
        sub='The technical DNA that stabilizes the visual environment.'
        hexColor={tokens.colors.brand.rose}
        blobVariant='B'
        isDarkMode={isDarkMode}
      />
      <section className='space-y-16'>
        <div className='flex items-end justify-between border-b border-zinc-200 dark:border-[#232D3D] pb-10'>
          <h3 className='text-xs font-black uppercase text-rose-500 tracking-[0.4em]'>Pigment Standards</h3>
          <p className='text-sm font-mono text-zinc-400'>Locked Tones: 04</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
          <ColorCard
            name='Amber'
            hex='#FFCA3A'
            desc='Primary anchor for user focus and brand presence.'
            isDarkMode={isDarkMode}
          />
          <ColorCard
            name='Rose'
            hex='#FF595E'
            desc='State signaling for alerts and primary highlights.'
            isDarkMode={isDarkMode}
          />
          <ColorCard
            name='Lime'
            hex='#8AC926'
            desc='Success confirmation and organic progress.'
            isDarkMode={isDarkMode}
          />
          <ColorCard
            name='Azure'
            hex='#1982C4'
            desc='Supportive structural depth and safe navigation.'
            isDarkMode={isDarkMode}
          />
        </div>
      </section>
    </div>
  );
}
