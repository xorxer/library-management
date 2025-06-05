import Image from "next/image";
import BookSpine from "@/components/book/book-spine.svg";
import BookPages from "@/components/book/book-pages.svg";

interface Book3DProps {
  cover: string;
  width?: number;
  height?: number;
  spineColor: string;
  // The three below are required because they determine flex size
  spineClassName: string;
  coverClassName: string;
  pagesClassName: string;
}

export default function Book3D({
  cover,
  width = 320, // Original book cover width
  height = 425, // Original book cover height
  spineColor = "white", // Default spine color
  spineClassName = "",
  coverClassName = "",
  pagesClassName = ""
}: Book3DProps) {
  return (
    <div className="flex justify-center">
        <div className="flex flex-col">
          <div className="flex flex-row items-start">
              <BookSpine className={spineClassName} style={{color: spineColor, marginRight: -1}}/>
              <Image
                src={cover}
                alt="Book Cover"
                width={320}
                height={425}
                className={coverClassName}
                />
          </div>
          <BookPages className={pagesClassName} />
        </div>
    </div>
  );
}