//import Image from "next/image";
"use client";
import MyAccordion from "@/SHADCN/MyAccordion";
import MyAlert from "@/SHADCN/MyAlert";
import MyAlertDialog from "@/SHADCN/MyAlertDialog";
import MyAspectRatio from "@/SHADCN/MyAspectRatio";
import MyAvator from "@/SHADCN/MyAvator";
import MyBadge from "@/SHADCN/MyBadge";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const Params = useSearchParams();

  const balance = Params.get("balance");
  return (
    <>
      <div className="w-[200px]">
        <MyAccordion />
        {balance == "0" ? <MyAlert /> : ""}
        <MyAlertDialog
          trigger="coded ui"
          title="coded ui"
          content={<MyAccordion />}
        />
        <MyAlertDialog
          trigger="coded design"
          title="coded design"
          content={<MyAlert />}
        />
        <MyAspectRatio />
        <MyAvator />
        <MyBadge title="coded design" variant="destructive" />
      </div>
    </>
  );
}
