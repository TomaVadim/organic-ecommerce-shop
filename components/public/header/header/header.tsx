import { BottomSection } from "@/features/header/components/bottom-section/bottom-section";
import { TopSection } from "@/features/header/components/top-section/top-section";
import { MiddleSection } from "@/features/header/components/middle-section/middle-section";
import { Breadcrumbs } from "@/features/header/components/breadcrumbs/breadcrumbs";

export const Header = () => {
  return (
    <header>
      <TopSection />

      <MiddleSection />

      <BottomSection />

      <Breadcrumbs />
    </header>
  );
};
