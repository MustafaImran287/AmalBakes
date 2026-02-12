/**
 * Root-only deployment (amalbakes.com). No basePath/subpath.
 * assetUrl() normalizes paths for use at site root.
 */
export const basePath = '';

export function assetUrl(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return p;
}
