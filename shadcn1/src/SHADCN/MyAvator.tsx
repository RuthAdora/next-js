import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MyAvator = () => {
  return (
    <Avatar className="w-20 h-20">
      <AvatarImage src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTuDxd2uTyf05mEA-pwdkg0902L5ebPXgj6Wz84hmgFI5CwmOqR_6NX_pMbwh9ssF_7IxcZCQ" />
      <AvatarFallback>Riri</AvatarFallback>
    </Avatar>
  );
};

export default MyAvator;
