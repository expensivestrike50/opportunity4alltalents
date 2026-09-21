import logoImage from "@/assets/brand/opportunities-for-all-talent.png";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  markClassName?: string;
  textClassName?: string;
};

const BrandLogo = ({ className, markClassName, textClassName }: BrandLogoProps) => (
  <span className={cn("flex min-w-0 items-center gap-2.5", className)}>
    <img
      src={logoImage}
      alt=""
      aria-hidden="true"
      className={cn("h-9 w-11 shrink-0 object-contain", markClassName)}
    />
    <span className={cn("whitespace-nowrap text-sm font-bold text-primary-foreground", textClassName)}>
      Opportunity 4 All Talents
    </span>
  </span>
);

export default BrandLogo;