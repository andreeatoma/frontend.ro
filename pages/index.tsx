import SEOTags from "~/components/SEOTags";
import {
  LandingHero,
  LandingStats,
  LandingHowItWorks,
  LandingSubscribe,
  LandingThanks,
} from "~/components/Landing";
import Footer from "~/components/Footer";
import { withClientMonitoring } from "~/services/Hooks";

export default function Home() {
  withClientMonitoring();

  return (
    <>
      <SEOTags
        url="https://FrontEnd.ro"
        title="FrontEnd.ro - Învață de la comunitatea open-source"
        description="Vrei să înveți FrontEnd? Aici ai parte de tutoriale gratuite și o comunitate de developeri care te vor ajuta să devii mai bun."
      />
      <>
        <LandingHero />
        <LandingStats
          participants={12}
          events={2}
          trainers={3}
          hoursOfTraining={7}
          slides={14}
          countFrontEndWord={2}
        />
        <LandingHowItWorks />
        <LandingThanks />
        <LandingSubscribe />
        <Footer />
      </>
    </>
  );
}
