import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { safeFetch } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";

type SiteSettingsSanity = {
  phone?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  lineUrl?: string;
  footerDescription?: string;
  copyrightYear?: string;
  favicon?: { asset: { _ref: string; _type: string } };
};

type TopPageSeoSanity = {
  pageTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: { asset: { _ref: string; _type: string } };
};

const defaultMetadata: Metadata = {
  title: "VERDE FIT | 横手市の整体・パーソナルトレーニング・コーチングサロン",
  description:
    "2026年春、横手市にグランドオープン。整体×パーソナルトレーニング×コーチングで、カラダとココロを根本から整えるトータルケアサロンVERDE FIT。",
  keywords: ["横手市", "整体", "パーソナルトレーニング", "コーチング", "VERDE FIT"],
  openGraph: {
    title: "VERDE FIT | 横手市の整体・パーソナルトレーニング・コーチングサロン",
    description:
      "整体×パーソナルトレーニング×コーチングで、カラダとココロを根本から整えるトータルケアサロン",
    locale: "ja_JP",
    type: "website",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const [seo, settings] = await Promise.all([
    safeFetch<TopPageSeoSanity>(
      `*[_type == "topPageSeo"][0]{ pageTitle, metaDescription, keywords, ogTitle, ogDescription, ogImage }`
    ),
    safeFetch<Pick<SiteSettingsSanity, "favicon">>(
      `*[_type == "siteSettings"][0]{ favicon{ asset{ _ref, _type } } }`
    ),
  ]);

  const faviconUrl = settings?.favicon ? urlForImage(settings.favicon) : undefined;
  const icons = faviconUrl ? { icon: faviconUrl } : undefined;

  if (!seo) return { ...defaultMetadata, ...(icons ? { icons } : {}) };

  const ogImageUrl = seo.ogImage ? urlForImage(seo.ogImage) : undefined;

  return {
    title:
      seo.pageTitle ??
      "VERDE FIT | 横手市の整体・パーソナルトレーニング・コーチングサロン",
    description:
      seo.metaDescription ??
      "2026年春、横手市にグランドオープン。整体×パーソナルトレーニング×コーチングで、カラダとココロを根本から整えるトータルケアサロンVERDE FIT。",
    keywords: seo.keywords ?? ["横手市", "整体", "パーソナルトレーニング", "コーチング"],
    icons,
    openGraph: {
      title:
        seo.ogTitle ??
        seo.pageTitle ??
        "VERDE FIT | 横手市の整体・パーソナルトレーニング・コーチングサロン",
      description:
        seo.ogDescription ??
        seo.metaDescription ??
        "整体×パーソナルトレーニング×コーチングで、カラダとココロを根本から整えるトータルケアサロン",
      images: ogImageUrl ? [{ url: ogImageUrl }] : [],
      locale: "ja_JP",
      type: "website",
    },
  };
}

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await safeFetch<SiteSettingsSanity>(
    `*[_type == "siteSettings"][0]{ phone, instagramUrl, facebookUrl, lineUrl, footerDescription, copyrightYear, favicon{ asset{ _ref, _type } } }`
  );

  const phone = settings?.phone ?? undefined;
  const instagramUrl = settings?.instagramUrl ?? undefined;
  const facebookUrl = settings?.facebookUrl ?? undefined;
  const lineUrl = settings?.lineUrl ?? undefined;
  const footerDescription = settings?.footerDescription ?? undefined;
  const copyrightYear = settings?.copyrightYear ?? undefined;

  return (
    <>
      <Header phone={phone} />
      <main>{children}</main>
      <Footer
        phone={phone}
        instagramUrl={instagramUrl}
        facebookUrl={facebookUrl}
        lineUrl={lineUrl}
        footerDescription={footerDescription}
        copyrightYear={copyrightYear}
      />
      <FloatingButtons phone={phone} />
    </>
  );
}
