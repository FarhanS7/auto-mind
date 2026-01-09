export const FeaturedSkeleton = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-6">
            <div className="w-1.5 h-16 bg-gray-200 rounded-full animate-pulse"></div>
            <div>
              <div className="h-8 w-40 bg-gray-200 rounded-xl mb-4 animate-pulse"></div>
              <div className="h-10 w-64 bg-gray-200 rounded-xl animate-pulse"></div>
            </div>
          </div>
          <div className="h-12 w-32 bg-gray-200 rounded-2xl animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-[400px] w-full bg-gray-100 rounded-2xl animate-pulse border border-gray-200"></div>
          ))}
        </div>
      </div>
    </section>
  );
};
