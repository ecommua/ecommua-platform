import { HomeHeroSection } from "@/app/_components/marketing/home/home-hero-mockup-grid-section";
import { HomeTrustStripSection } from "@/app/_components/marketing/home/home-trust-partners-strip-section";
import { HomeFeatureGroupASection } from "@/app/_components/marketing/home/home-comprehensive-features-three-up-section";
import { HomeIntegrationsGridSection } from "@/app/_components/marketing/home/home-integrations-platform-grid-section";
import { HomeFeatureGroupBSection } from "@/app/_components/marketing/home/home-alternating-feature-rows-section";
import { HomeStatQuoteBandSection } from "@/app/_components/marketing/home/home-big-stat-customer-quote-band-section";
import { HomeFinalCtaSection } from "@/app/_components/marketing/home/home-final-cta-radial-glow-section";

interface Props {
  params: Promise<{ locale: string }>;
}

// Homepage — pixel-match Comoret ref. Sections in order per redesign-brief-pixel-perfect.md.
export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  return (
    <>
      <HomeHeroSection locale={locale} />
      <HomeTrustStripSection />
      <HomeFeatureGroupASection locale={locale} />
      <HomeIntegrationsGridSection />
      <HomeFeatureGroupBSection />
      <HomeStatQuoteBandSection />
      <HomeFinalCtaSection locale={locale} />
    </>
  );
}
