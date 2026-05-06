import { tokens } from '../_lib/constants';

interface ColorCardProps {
  name: string;
  hex: string;
  desc: string;
  isDarkMode: boolean;
}

export function ColorCard({ name, hex, desc, isDarkMode }: ColorCardProps) {
  return (
    <div
      className={`p-4 border ${
        isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100'
      } ${tokens.radius} shadow-sm group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500`}
    >
      <div
        className={`h-32 w-full mb-4 shadow-inner border border-black/5 ${tokens.radius}`}
        style={{ backgroundColor: hex }}
      />
      <div className='flex justify-between items-center mb-1'>
        <h4 className='font-bold text-sm dark:text-white uppercase'>{name}</h4>
        <code className='text-[10px] text-rose-500 font-mono font-black'>{hex}</code>
      </div>
      <p className='text-[11px] text-zinc-400 leading-tight'>{desc}</p>
    </div>
  );
}
