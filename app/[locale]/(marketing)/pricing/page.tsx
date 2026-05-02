/**
 * Pricing page — pixel-perfect rebuild per ref/pricing/full.png.
 * Sections (top → bottom):
 *   01 hero + monthly/yearly toggle
 *   02 3 tier cards (Free / Standard / Premium)
 *   03 plan comparison table (3 grouped sections × 5 rows × 3 cols)
 *   04 "Supercharge Your Success" CTA band + dashboard mockup
 *   (footer is shared, rendered by marketing layout)
 */

import { PricingHeroAndTiers } from "@/app/_components/marketing/pricing/pricing-hero-and-tiers";
import { PricingPlanComparisonTable } from "@/app/_components/marketing/pricing/pricing-plan-comparison-table";
import { PricingSuperchargeCtaBand } from "@/app/_components/marketing/pricing/pricing-supercharge-cta-band";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function PricingPage({ params }: Props) {
  await params; // locale reserved for future i18n strings
  return (
    <>
      <PricingHeroAndTiers />
      <PricingPlanComparisonTable />
      <PricingSuperchargeCtaBand />
    </>
  );
}
