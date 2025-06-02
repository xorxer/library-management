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
    <div className="scale-30 -m-35">
      <div className="flex flex-row items-start">
        <BookSpine style={{ color: spineColor, marginRight: -2 }} />
        <Image
          src={cover}
          alt="Book Cover"
          width={width}
          height={height}
        />
      </div>
      <BookPages style={{ marginTop: -14 }} />
    </div>
  );
}