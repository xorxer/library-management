export default function SearchPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-8">
            {/* Search header and description  */}
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-white sm:text-4xl">
                Search Library
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-darkgray-100">
                Find books, authors, and resources in our collection
                </p>
            </div>
        </div>
    </div>
  );
}