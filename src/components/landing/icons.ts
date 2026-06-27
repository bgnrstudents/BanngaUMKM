import type { LucideIcon } from "lucide-react";
import {
  Apple,
  ClipboardList,
  CreditCard,
  FileChartLine,
  Fingerprint,
  HandCoins,
  LineChart,
  MessageSquareText,
  Shield,
  Store,
  Sparkles,
  TrendingUp,
  Wallet,
  Zap,
} from "lucide-react";

// Central mapping of premium-looking, SaaS-relevant icons.
// Note: still using lucide-react, but selection is curated and consistent.
export const premiumIcons: {
  // Navbar / brand
  sparkles: LucideIcon;

  // Problems
  manualBookkeeping: LucideIcon;
  insights: LucideIcon;
  consulting: LucideIcon;
  financing: LucideIcon;

  // Solutions
  oneClick: LucideIcon;
  aiAssistant: LucideIcon;
  trustScore: LucideIcon;

  // Features
  dashboard: LucideIcon;
  aiConsultant: LucideIcon;
  aiAuditor: LucideIcon;
  trust: LucideIcon;

  // Trust stats
  users: LucideIcon;
  transactions: LucideIcon;
  satisfaction: LucideIcon;

  // Contact
  mail: LucideIcon;
  phone: LucideIcon;
  location: LucideIcon;

  // Pricing check / x / actions
  check: LucideIcon;
  x: LucideIcon;
  chevronRight: LucideIcon;
  arrowRight: LucideIcon;
} = {
  // brand
  sparkles: Sparkles,

  // problems
  manualBookkeeping: ClipboardList,
  insights: LineChart,
  consulting: MessageSquareText,
  financing: CreditCard,

  // solutions
  oneClick: FileChartLine,
  aiAssistant: Zap,
  trustScore: Shield,

  // features
  dashboard: TrendingUp,
  aiConsultant: Apple,
  aiAuditor: Fingerprint,
  trust: Wallet,

  // trust stats
  users: Store,
  transactions: HandCoins,
  satisfaction: FileChartLine,

  // contact
  mail: Sparkles,
  phone: Sparkles,
  location: Sparkles,

  // pricing/actions
  check: Shield,
  x: Shield,
  chevronRight: Shield,
  arrowRight: Shield,
};

// The above placeholders (mail/phone/location/check/x/chevrons) will be finalized
// once we align the exact lucide icon set used throughout the landing.

