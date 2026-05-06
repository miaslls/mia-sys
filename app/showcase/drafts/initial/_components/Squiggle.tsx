'use client';

interface SquiggleProps {
  className?: string;
}

export function Squiggle({ className }: SquiggleProps) {
  return (
    <svg viewBox='0 0 100 20' className={className} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M0 10C10 10 15 2 25 2C35 2 40 18 50 18C60 18 65 2 75 2C85 2 90 10 100 10'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  );
}
