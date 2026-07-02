interface BadgeProps {
  label: string;
}

export default function Badge({ label }: BadgeProps) {
  return (
    <span className="rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-300 transition-colors duration-300 hover:border-violet-500/50 hover:text-white">
      {label}
    </span>
  );
}