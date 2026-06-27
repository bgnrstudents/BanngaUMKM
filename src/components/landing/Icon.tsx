import React from "react";
import type { LucideIcon } from "lucide-react";

type Props = {
  Icon: LucideIcon;
  className?: string;
};

export default function Icon({ Icon, className }: Props) {
  return <Icon className={className ?? "h-5 w-5"} aria-hidden="true" />;
}

