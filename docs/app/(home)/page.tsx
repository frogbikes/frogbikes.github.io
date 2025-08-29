import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-4xl font-bold">Frog Bikes Documentation</h1>
      <p className="text-fd-muted-foreground mb-6 text-lg">
        Welcome to our comprehensive documentation hub. Find guides, tutorials, and resources to help you succeed.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/docs"
          className="bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/90 rounded-md px-6 py-2 font-semibold transition-colors"
        >
          Get Started
        </Link>
        <Link
          href="/docs/shopify-migration"
          className="border border-fd-border hover:bg-fd-muted rounded-md px-6 py-2 font-semibold transition-colors"
        >
          Shopify Migration
        </Link>
      </div>
    </main>
  );
}
