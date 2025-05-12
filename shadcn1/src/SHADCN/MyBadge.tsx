import React from "react";
import { Badge } from "@/components/ui/badge";
import { badgeVariants } from "@/components/ui/badge";
import { Link } from "lucide-react";

const MyBadge = ({
  title,
  className,
  variant,
}: {
  title: string;
  className?: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
}) => {
  return (
    <>
      <Badge>Badge</Badge>
      <Badge variant="outline">Badge</Badge>
      <Badge className={className} variant={variant}>
        {title}
      </Badge>
      <Badge variant="secondary">Badge</Badge>
      <Link className={badgeVariants({ variant: "outline" })}>Badge</Link>
    </>
  );
};

export default MyBadge;
