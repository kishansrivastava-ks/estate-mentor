import AdvantagesSection from "../components/Tenants/AdvantagesSection";
import TenantHero from "../components/Tenants/TenantHero";
import PageTransition from "../utils/PageTransition";

function Tenants() {
  return (
    <PageTransition>
      <TenantHero />
      <AdvantagesSection />
    </PageTransition>
  );
}

export default Tenants;
