// src/app/head.tsx
export default function Head() {
  const title = "VendorConnect — Curated Collections, Trusted Vendors";
  const description = "VendorConnect — discover unique products from independent sellers. Curated collections, AI product recommendations, and a smooth shopping experience.";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://vendor-connect-three.vercel.app/" />
      <meta property="og:image" content="/og-image.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/og-image.png" />

      {/* Favicon & manifest */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
    </>
  );
}
