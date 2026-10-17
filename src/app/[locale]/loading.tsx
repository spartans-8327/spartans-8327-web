export default function Loading() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8" aria-hidden="true">
      <div className="h-9 w-2/3 animate-pulse rounded bg-[var(--color-surface)]" />
      <div className="mt-4 h-5 w-full max-w-md animate-pulse rounded bg-[var(--color-surface)]" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="h-32 animate-pulse rounded-lg bg-[var(--color-surface)]" />
        <div className="h-32 animate-pulse rounded-lg bg-[var(--color-surface)]" />
      </div>
    </div>
  );
}
