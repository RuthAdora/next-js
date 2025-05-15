import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BreadCrumbList } from "@/DEFAULTS/BreadCrumbList";
import { Slash } from "lucide-react";

const MyBreadCrumb = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {BreadCrumbList.map((item, index) => (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={item.link}>{item.title}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default MyBreadCrumb;
