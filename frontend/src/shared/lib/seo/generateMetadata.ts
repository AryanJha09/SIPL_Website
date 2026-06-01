import { Metadata } from "next";

interface GenerateMetadataProps {
  title: string;
  description: string;
  path: string;
}

export function generateSeoMetadata({ title, description, path }: GenerateMetadataProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://lifeback.sipl.com";
  const url = `${baseUrl}${path}`;

  return {
    title: "SIPL",
    applicationName: "SIPL",
    description,
    icons: {
      icon: [
        { url: "/sipl-icon.png?v=sipl-wordmark", type: "image/png", sizes: "512x512" },
        { url: "/favicon.ico", sizes: "32x32" },
      ],
      shortcut: [{ url: "/sipl-icon.png?v=sipl-wordmark", type: "image/png", sizes: "512x512" }],
      apple: [{ url: "/sipl-icon.png", sizes: "512x512", type: "image/png" }],
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "LifeBack",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    }
  };
}
