import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldAlert } from "lucide-react";

const MyAlert = () => {
  return (
    <Alert variant="destructive">
      <ShieldAlert className="h-4 w-4" />
      <AlertTitle>Bank balance</AlertTitle>
      <AlertDescription>Bank balance cannot be 0</AlertDescription>
    </Alert>
  );
};

export default MyAlert;
