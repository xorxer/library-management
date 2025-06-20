import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-6 sm:space-y-8">
        {/* Search header and description */}
        <div className="text-center space-y-4 sm:space-y-6">
          <h1 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Search Library
          </h1>
          <p className="mx-auto max-w-2xl text-base text-darkgray-100 sm:text-lg">
            Find books, authors, and resources in our collection
          </p>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-lightgray-100 pointer-events-none" />
            <Input
              type="text"
              placeholder="Search books, authors, topics..."
              className="pl-10 h-11 sm:h-12 text-base bg-blues-100 border-0 placeholder:text-lightgray-100 text-white focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none w-full"
              aria-label="Search library"
            />
          </div>
        </div>
      </div>
    </div>
  );
}