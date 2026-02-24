import Head from "next/head";
import { siteConfig } from "@/config/siteConfig";

interface SEOProps {
  title?: string;
  description?: string;
}

export default function SEO({ title, description }: SEOProps) {
  const seoTitle = title 
    ? `${title} | ${siteConfig.global.shortName}` 
    : siteConfig.seo.defaultTitle;
  
  const seoDescription = description || siteConfig.seo.defaultDescription;

  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={siteConfig.seo.keywords.join(", ")} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      
      {/* Open Graph */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.global.name} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
    </Head>
  );
}
