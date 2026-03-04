import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  variant?: "gold" | "navy" | "ghost";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  href,
  variant = "gold",
  className,
  children,
  onClick,
  type = "button",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 active:translate-y-[1px]";

  const variants: Record<string, string> = {
    gold:
      "bg-[color:var(--tsa-gold)] text-[color:var(--tsa-ink)] shadow-sm hover:shadow-md hover:brightness-[0.98] focus:ring-[color:var(--tsa-ring)]",
    navy:
      "bg-[color:var(--tsa-navy)] text-white shadow-sm hover:shadow-md hover:brightness-[1.03] focus:ring-[color:var(--tsa-navy)]",
    ghost:
      "border border-black/10 bg-white/70 text-black hover:bg-black/5 shadow-sm focus:ring-black/20",
  };

  if (href) {
    return (
      <Link href={href} className={cn(base, variants[variant], className)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </button>
  );
}
