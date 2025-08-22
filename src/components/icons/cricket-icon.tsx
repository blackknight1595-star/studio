import type { SVGProps } from 'react';

export function CricketIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.54 12.54l-1.42 1.42" />
      <path d="M12.02 10.02l2.12 2.12" />
      <path d="m1.21 12.63 2.12-2.12 11.31 11.31-2.12 2.12-11.31-11.31Z" />
      <path d="m13.06 11.06 2.12-2.12a2.5 2.5 0 0 0-3.54-3.54l-2.12 2.12" />
      <path d="M11.64 12.48l-1.42-1.42" />
      <path d="m3.34 20.66 11.31-11.31" />
      <path d="M17.61 3.41a2.5 2.5 0 0 0-3.54 0l-2.12 2.12 3.54 3.54 2.12-2.12a2.5 2.5 0 0 0 0-3.54Z" />
      <circle cx="18" cy="18" r="3" />
    </svg>
  );
}
