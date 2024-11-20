export default function Profile() {
    return (
      <main className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Create Your Profile
        </h1>
        <form className="max-w-lg mx-auto bg-white shadow p-6 rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg"
              type="text"
              id="name"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="skills">
              Skills
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg"
              type="text"
              id="skills"
              placeholder="E.g., JavaScript, Project Management"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="experience">
              Years of Experience
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg"
              type="number"
              id="experience"
              placeholder="Enter your experience in years"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="interests">
              Career Interests
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg"
              id="interests"
              rows="3"
              placeholder="E.g., Software Development, Data Science"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save Profile
          </button>
        </form>
      </main>
    );
  }