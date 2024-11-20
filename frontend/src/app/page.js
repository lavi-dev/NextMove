export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-600">NextMove</h1>
        <nav>
  <ul className="flex space-x-4">
    <li><a href="/" className="text-gray-700 hover:text-blue-500">Home</a></li>
    <li><a href="/profile" className="text-gray-700 hover:text-blue-500">Profile</a></li>
    <li><a href="#" className="text-gray-700 hover:text-blue-500">Get Started</a></li>
  </ul>
</nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-16 text-center bg-blue-100">
        <h2 className="text-4xl font-bold text-blue-700">
          Take the Next Step in Your Career!
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Personalized career guidance tailored to your skills and goals.
        </p>
        <button className="px-6 py-3 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="px-6 py-12">
        <h3 className="text-2xl font-bold text-center text-gray-800">Why Choose NextMove?</h3>
        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white shadow rounded-lg">
            <h4 className="text-xl font-semibold text-blue-600">Personalized Guidance</h4>
            <p className="mt-2 text-gray-700">Get career suggestions based on your unique skills and interests.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h4 className="text-xl font-semibold text-blue-600">Learning Pathways</h4>
            <p className="mt-2 text-gray-700">Discover courses and certifications to advance your career.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h4 className="text-xl font-semibold text-blue-600">Job Market Insights</h4>
            <p className="mt-2 text-gray-700">Stay updated with trends and opportunities in the job market.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-4 text-center bg-gray-200">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} NextMove. All rights reserved.
        </p>
      </footer>
    </main>
  );
} 