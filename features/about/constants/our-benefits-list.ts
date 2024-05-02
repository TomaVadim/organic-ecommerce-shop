import type { Benefit } from "@/features/about/shared/interfaces/benefit";
import leafIcon from "@/public/images/about/icons/leaf-icon.svg";
import supportIcon from "@/public/images/about/icons/support-icon.svg";
import feedbackIcon from "@/public/images/about/icons/feedback-icon.svg";
import paymentIcon from "@/public/images/about/icons/payment-icon.svg";
import deliveryIcon from "@/public/images/about/icons/delivery-icon.svg";
import boxIcon from "@/public/images/about/icons/box-icon.svg";

export const ourBenefitsList: Benefit[] = [
  {
    id: 1,
    image: leafIcon,
    alt: "Leaf icon image what show the food is organic",
    title: "100% Organic food",
    subtitle: "100% healthy & Fresh food.",
  },
  {
    id: 2,
    image: supportIcon,
    alt: "Icon where is mickro what shows that you can get support",
    title: "Great Support 24/7",
    subtitle: "Instant access to Contact",
  },
  {
    id: 3,
    image: feedbackIcon,
    alt: "Icon which shows we have many exelent feedbacks of our customers",
    title: "Customer Feedback",
    subtitle: "Our happy customer",
  },
  {
    id: 4,
    image: paymentIcon,
    alt: "Icon shows that we have secure payment",
    title: "100% Sucure Payment",
    subtitle: "We ensure your money is save",
  },
  {
    id: 5,
    image: deliveryIcon,
    alt: "Icon shows that your shopping can be delivered",
    title: "Free Shipping",
    subtitle: "Free shipping with discount",
  },
  {
    id: 6,
    image: boxIcon,
    alt: "Icon shows that we are wrapping food within eco-friendly packaging",
    title: "100% Organic Food",
    subtitle: "100% healthy & Fresh food.",
  },
];
