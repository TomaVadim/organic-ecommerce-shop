import {
  MY_ACCOUNT_NAV_COLUMN,
  HELPS_NAV_COLUMN,
  PROXY_NAV_COLUMN,
  CATEGORIES_NAV_COLUMN,
} from "@/features/footer/constants/navigation-items";
import { Navigation } from "@/features/footer/components/navigation/navigation";
import { PrivacyPolicy } from "@/features/footer/components/privacy-policy/privacy-policy";
import { SubscribeOurNewletters } from "@/features/footer/components/subscribe-our-newletters/subscribe-our-newletters";

export const Footer = (): JSX.Element => {
  return (
    <footer className="flex flex-col tracking-wide">
      <SubscribeOurNewletters />

      <Navigation
        myAccountNavColumn={MY_ACCOUNT_NAV_COLUMN}
        helpsNavColumn={HELPS_NAV_COLUMN}
        proxyNavColumn={PROXY_NAV_COLUMN}
        categoriesNavColumn={CATEGORIES_NAV_COLUMN}
      />

      <PrivacyPolicy />
    </footer>
  );
};
