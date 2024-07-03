import Image from "next/image";
import React from "react";

export type AvatarImageProps = {
  src: string;
  altDescription: string;
};

export const AvatarImage = ({ src, altDescription }: AvatarImageProps) => {
  return (
    <div>
      <Image
        src={src}
        alt={altDescription}
        width={100}
        height={100}
        className="rounded-full"
      />
    </div>
  );
};
