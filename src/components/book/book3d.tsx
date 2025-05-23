import Image from "next/image";
import BookSpine from "@/components/book/book-spine.svg";
import BookPages from "@/components/book/book-pages.svg";


interface Book3DProps {
  cover: string;
  width?: number;
  height?: number;
  spineColor: string;
}

export default function Book3D({ cover, width = 323, height = 425.4, spineColor="white" }: Book3DProps) {
    return (
        <>
            <div className="flex flex-row">
                <BookSpine style={{ color: spineColor }}/>
                <Image
                    src={cover}
                    alt="Book Cover"
                    width={width}
                    height={height}
                />
            </div>
            <BookPages />
        </>
    )
}