import { AiFillRead } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import Book3D from "@/components/book/book3d";

const book = {
    title: "Automate the Boring Stuff with Python",
    author: "Al Sweigart",
    category: "Programming",
    total_books: 20,
    available_books: 20,
    description: "If you've ever spent  hours renaming files or updating spreadsheet cells, you know how tedious tasks like these can be. But what if you could have your computer do  them for you? Automate the Boring Stuff with Python, 2nd Edition teaches even the technically uninclined how to write programs that do in  minutes what would take hours to do by hand—no prior coding experience  required!"
}


export default function HomePage() {
  return (
    <>
      <div className="flex flex-row items-center gap-x-20 px-4 pl-20 items-start">
        {/* Book info section */}
        <div className="max-w-2xl w-full">
          <h1 className="font-figtree font-bold text-4xl text-white mb-2">{book.title}</h1>
          <div className="flex flex-row items-center gap-x-8 mb-2">
            <div>
              <span className="font-inter font-medium text-1xl text-lightgray-100">By </span>
              <span className="font-inter font-medium text-1xl text-lightgold-100">{book.author}</span>
            </div>
            <div>
              <span className="font-inter font-medium text-1xl text-lightgray-100">Category: </span>
              <span className="font-inter font-medium text-1xl text-lightgold-100">{book.category}</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-x-8 mb-2">
            <div>
              <span className="font-inter font-medium text-1xl text-lightgray-100">Total Books: </span>
              <span className="font-inter font-medium text-1xl text-lightgold-100">{book.total_books}</span>
            </div>
            <div>
              <span className="font-inter font-medium text-1xl text-lightgray-100">Available Books: </span>
              <span className="font-inter font-medium text-1xl text-lightgold-100">{book.available_books}</span>
            </div>
          </div>
          <p className="font-inter font-medium text-1xl text-lightgray-100 mb-4">{book.description}</p>
          {/* Details button */}
          <Button className="flex justify-center items-center bg-lightgold-100 w-32 md:w-48 lg:w-64">
            <AiFillRead className="!size-5"/>
            <span className="font-figtree font-bold text-xl">Details</span>
          </Button>
        </div>
        {/* 3D Book on display */}
        <div>
          {/* Faded out display book */}
          <div className="absolute transform rotate-14 opacity-30 pl-20 pt-8">
            <Book3D cover={"/automate book.jpg"} spineColor={"#F7E479"} />
          </div>
          {/* Display book on top */}
          <div className="relative z-10">
            <Book3D cover={"/automate book.jpg"} spineColor={"#F7E479"}/>
          </div>
        </div>
      </div>

    </>
  );
}
