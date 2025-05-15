import React from "react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "lucide-react";

function MyButton({ title }: { title: string }) {
  return (
    <div>
      <Button variant="outline">{title}</Button>

      <Link className={buttonVariants({ variant: "outline" })}>Adora</Link>
    </div>
  );
}

export default MyButton;
