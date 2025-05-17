
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
      <div className="flex-col">
        <div className="flex-row">
          <div>{book.title}</div>
          <div className="flex flex-row items-center gap-x-8 mb-2">
            <div>
              <span>By </span>
              <span>{book.author}</span>
            </div>
            <div>
              <span>Category: </span>
              <span>{book.category}</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-x-8 mb-2">
            <div>
              <span>Total Books: </span>
              <span>{book.total_books}</span>
            </div>
            <div>
              <span>Available Books: </span>
              <span>{book.available_books}</span>
            </div>
          </div>
          <p>{book.description}</p>
          {/* Insert details button */}
        </div>
        {/* Insert book */}
      </div>
    </>
  );
}
