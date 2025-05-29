import { AiFillRead } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import Book3D from "@/components/book/book3d";

// Array of 20 identical book objects for grid later on
const books = Array(20).fill({
  title: "Automate the Boring Stuff with Python",
  author: "Al Sweigart",
  category: "Programming",
  total_books: 20,
  available_books: 20,
  description: "If you've ever spent hours renaming files or updating spreadsheet cells, you know how tedious tasks like these can be. But what if you could have your computer do them for you? Automate the Boring Stuff with Python, 2nd Edition teaches even the technically uninclined how to write programs that do in minutes what would take hours to do by hand—no prior coding experience required!"
});

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 px-4 lg:px-20 py-8">
        {/* Book info section */}
        <div className="max-w-2xl w-full flex flex-col gap-4">
          <h1 className="font-figtree font-bold text-3xl md:text-4xl text-white mb-2">{books[0].title}</h1>
          <div className="flex flex-wrap gap-x-8 gap-y-2 mb-2">
            <div>
              <span className="font-inter font-medium text-1xl text-lightgray-100">By </span>
              <span className="font-inter font-medium text-1xl text-lightgold-100">{books[0].author}</span>
            </div>
            <div>
              <span className="font-inter font-medium text-1xl text-lightgray-100">Category: </span>
              <span className="font-inter font-medium text-1xl text-lightgold-100">{books[0].category}</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-x-8 mb-2">
            <div>
              <span className="font-inter font-medium text-1xl text-lightgray-100">Total Books: </span>
              <span className="font-inter font-medium text-1xl text-lightgold-100">{books[0].total_books}</span>
            </div>
            <div>
              <span className="font-inter font-medium text-1xl text-lightgray-100">Available Books: </span>
              <span className="font-inter font-medium text-1xl text-lightgold-100">{books[0].available_books}</span>
            </div>
          </div>
          <p className="font-inter font-medium text-base text-lightgray-100 mb-4">{books[0].description}</p>
          {/* Details button */}
          <Button className="flex justify-center items-center gap-2 bg-lightgold-100 w-32 md:w-48 lg:w-64 hover:bg-lightgold-200 transition-colors">
            <AiFillRead className="!size-5"/>
            <span className="font-figtree font-bold text-lg md:text-xl">Details</span>
          </Button>
        </div>
        {/* 3D Books on display */}
        <div className="relative flex items-center justify-center w-full lg:w-auto pr-4 md:pr-8 lg:pr-12">
          {/* Faded out display book */}
          <div className="absolute transform rotate-12 opacity-30 pl-4 md:pl-8 lg:pl-20 pt-4 md:pt-8">
            <Book3D
              cover="/automate book.jpg"
              spineColor="#F7E479"
              width={320}
              height={425}
            />
          </div>
          {/* Display book on top */}
          <div className="relative z-10">
            <Book3D
              cover="/automate book.jpg"
              spineColor="#F7E479"
              width={320}
              height={425}
            />
          </div>
        </div>
      </div>
    </>
  );
}
