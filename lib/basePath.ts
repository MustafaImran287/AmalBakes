/**
 * Base path for GitHub Pages (e.g. /Amal-Bakes-Website). Empty when running locally.
 * Set NEXT_PUBLIC_BASE_PATH in the GitHub Actions workflow so assets load correctly.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function assetUrl(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return basePath ? `${basePath}${p}` : p;
}
