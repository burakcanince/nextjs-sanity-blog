import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

export const blogContent = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlForImage(value).url()}
        alt={value?.alt || "Post image"}
        width={1000}
        height={1000}
        style={{ width: "100%", height: "auto" }}
      />
    ),
  },
  block: {
    h1: ({ children }: any) => <h2 className="text-[32px] font-bold mb-5">{children}</h2>,
    h2: ({ children }: any) => <h2 className="text-[24px] font-bold mb-5">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-[18px] font-bold mb-5">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-[16px] font-bold mb-5">{children}</h4>,
    h5: ({ children }: any) => <h5 className="text-[13px] font-bold mb-5">{children}</h5>,
    h6: ({ children }: any) => <h6 className="text-[11px] font-bold mb-5">{children}</h6>,
    normal: ({ children }: any) => <p className="text-sm mb-5">{children}</p>,
  },
};
