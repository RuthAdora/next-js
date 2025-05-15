//import Image from "next/image";
"use client";
import { CardDemo } from "@/SHADCN/CardDemo";
import MyAccordion from "@/SHADCN/MyAccordion";
import MyAlert from "@/SHADCN/MyAlert";
import MyAlertDialog from "@/SHADCN/MyAlertDialog";
import MyAspectRatio from "@/SHADCN/MyAspectRatio";
import MyAvator from "@/SHADCN/MyAvator";
import MyBadge from "@/SHADCN/MyBadge";
import MyBreadCrumb from "@/SHADCN/MyBreadCrumb";
import { MyBreadcrumbDropdown } from "@/SHADCN/MyBreadcrumbDropdown";
import MyButton from "@/SHADCN/MyButton";
import MyCalender from "@/SHADCN/MyCalender";
import MyCard from "@/SHADCN/MyCard";
import MyCarousel from "@/SHADCN/MyCarousel";
import { Component } from "@/SHADCN/MyChart";
import { CheckboxWithText } from "@/SHADCN/MyCheckbox";
import MyCollapsible from "@/SHADCN/MyCollapsible";
import { ComboboxDemo } from "@/SHADCN/MyCombobox";
import MyCommand from "@/SHADCN/MyCommand";
import MyContextMenu from "@/SHADCN/MyContextMenu";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const Params = useSearchParams();

  const balance = Params.get("balance");
  return (
    <>
      <div className="w-[350px]">
        <MyAccordion />

        {balance == "0" ? <MyAlert /> : ""}
        <br />
        <br />
        <MyAlertDialog
          trigger="coded ui"
          title="coded ui"
          content={<MyAccordion />}
        />
        <br />
        <br />
        <MyAlertDialog
          trigger="coded design"
          title="coded design"
          content={<MyAlert />}
        />
        <br />
        <br />
        <MyAspectRatio />
        <br />
        <br />
        <MyAvator />
        <br />
        <br />
        <MyBadge title="coded design" variant="destructive" />
        <br />
        <br />
        <MyBreadCrumb />
        <br />
        <br />

        <MyBreadcrumbDropdown />
        <br />
        <br />
        <MyButton title="Save" />
        <br />
        <br />
        <MyCalender />
        <br />
        <br />
        <MyCard />
        <br />
        <br />
        <CardDemo />
        <br />
        <br />
        <MyCarousel />
        <br />
        <br />
        <Component />
        <br />
        <br />
        <CheckboxWithText />
        <br />
        <br />
        <MyCollapsible />
        <br />
        <br />
        <ComboboxDemo />
        <br />
        <br />
        <MyCommand />
        <br />
        <br />
        <MyContextMenu />
      </div>
    </>
  );
}
