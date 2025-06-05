import Image from "next/image";
import BookSpine from "@/components/book/book-spine.svg";
import BookPages from "@/components/book/book-pages.svg";

interface Book3DProps {
  cover: string;
  width?: number;
  height?: number;
  spineColor: string;
}

export default function Book3D({
  cover,
  width = 320, // Original book cover width
  height = 425, // Original book cover height
  spineColor = "white", // Default spine color
}: Book3DProps) {
  return (
    <div className="flex justify-center">
        <div className="flex flex-col">
          <div className="flex flex-row items-start">
              <BookSpine className="w-4" style={{color: spineColor, marginRight: -1}}/>
              <Image
                src={cover}
                alt="Book Cover"
                width={320}
                height={425}
                className="w-49.25"
                />
          </div>
          <BookPages className="w-53" style={{ marginTop: -8 }} />
        </div>
    </div>
  );
}