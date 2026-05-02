import { HomeHeroSection } from "@/app/_components/marketing/home/home-hero-mockup-grid-section";
import { HomeFeatureGroupASection } from "@/app/_components/marketing/home/home-comprehensive-features-three-up-section";
import { HomeFeatureGroupBSection } from "@/app/_components/marketing/home/home-alternating-feature-rows-section";
import { HomeFinalCtaSection } from "@/app/_components/marketing/home/home-final-cta-radial-glow-section";

interface Props {
  params: Promise<{ locale: string }>;
}

// Homepage — Coronet-inspired flow: hero → bento features → alternating rows → final CTA.
export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  return (
    <>
      <HomeHeroSection locale={locale} />
      <HomeFeatureGroupASection locale={locale} />
      <HomeFeatureGroupBSection />
      <HomeFinalCtaSection locale={locale} />
    </>
  );
}
