import { Navigation } from "@/features/footer/components/navigation/navigation";
import { PrivacyPolicy } from "@/features/footer/components/privacy-policy/privacy-policy";
import { SubscribeOurNewletters } from "@/features/footer/components/subscribe-our-newletters/subscribe-our-newletters";

export const Footer = () => {
  return (
    <footer className="flex flex-col tracking-wide">
      <SubscribeOurNewletters />

      <Navigation />

      <PrivacyPolicy />
    </footer>
  );
};
