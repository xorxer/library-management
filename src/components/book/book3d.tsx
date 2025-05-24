import Image from "next/image";
import BookSpine from "@/components/book/book-spine.svg";
import BookPages from "@/components/book/book-pages.svg";


interface Book3DProps {
  cover: string;
  width?: number;
  height?: number;
  spineColor: string;
}

export default function Book3D({ cover, width = 320, height = 425, spineColor="white" }: Book3DProps) {
    return (
        <>
                {/* Book spine and cover side by side, top-aligned */}
                <div className="flex flex-row items-start">
                    <BookSpine
                        style={{ color: spineColor }}
                    />
                    <Image
                    src={cover}
                    alt="Book Cover"
                    width={width}
                    height={height}
                    />
                </div>
                {/* Adjust marginTop to match the overlap amount */}
                <BookPages
                    style={{ marginTop: -13 }}
                />
        </>
    )
}