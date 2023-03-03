import {
  AboutSection,
  ContactSection,
  HeroSection,
  PopularSection,
  Screen,
  TrendSection,
} from "../components";

export default function Home() {
  return (
    <Screen>
      <HeroSection />
      <AboutSection />
      <PopularSection />
      <TrendSection />
      <ContactSection />
    </Screen>
  );
}
