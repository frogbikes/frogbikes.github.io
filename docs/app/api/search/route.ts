// This file intentionally left empty to prevent 404 errors
// Search is disabled for static export compatibility

export const dynamic = 'force-static';
export const revalidate = false;

export function GET() {
  return new Response('Search disabled', { status: 404 });
}

