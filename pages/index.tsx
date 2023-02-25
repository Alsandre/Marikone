import {
  AboutSection,
  ContactSection,
  HeroSection,
  PopularSection,
  Screen,
  StyleSection,
  HeroSectionMobile
} from "../components";

export default function Home() {
  return (
    <Screen>
      {/* <HeroSection /> */}
      <HeroSectionMobile />
      <AboutSection />
      <PopularSection />
      <StyleSection />
      <ContactSection />
    </Screen>
  );
}
