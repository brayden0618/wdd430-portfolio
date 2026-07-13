export default function Loading() {
  return (
    <main className="max-w-5xl mx-auto p-8 animate-pulse">
      {/* Page Title */}
      <div className="h-10 w-48 bg-gray-300 rounded mb-6"></div>

      {/* Project Cards */}
      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="border rounded-lg p-4"
          >
            <div className="h-6 w-1/3 bg-gray-300 rounded mb-3"></div>

            <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded mb-3"></div>

            <div className="h-4 w-20 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    </main>
  );
}