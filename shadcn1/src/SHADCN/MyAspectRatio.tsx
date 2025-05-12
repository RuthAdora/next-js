import React from "react";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

const MyAspectRatio = () => {
  return (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <Image
          fill
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTuDxd2uTyf05mEA-pwdkg0902L5ebPXgj6Wz84hmgFI5CwmOqR_6NX_pMbwh9ssF_7IxcZCQ"
          alt="Image"
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  );
};

export default MyAspectRatio;
