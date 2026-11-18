// Builds /ads.txt from the AdSense publisher ID in src/data/site.ts.
// No ID set → no ads.txt file at all (better than an empty or wrong one).
import type { APIRoute, GetStaticPaths } from 'astro';
import { adsensePubId } from '../data/site';

export const getStaticPaths: GetStaticPaths = () => {
  return adsensePubId() ? [{ params: { file: 'ads' } }] : [];
};

export const GET: APIRoute = () => {
  // f08c47fec0942fa0 is Google's fixed ID, the same for every AdSense site.
  const body = `google.com, ${adsensePubId()}, DIRECT, f08c47fec0942fa0\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
