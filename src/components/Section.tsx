import { cn } from "@/lib/utils";

export default function Section({
  title,
  subtitle,
  children,
  className,
}: {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-14", className)}>
      <div className="mx-auto w-full max-w-6xl px-4">
        {(title || subtitle) && (
          <div className="mb-8">
            {title && (
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-2 text-base text-black/60 max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
