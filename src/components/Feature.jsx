import React from "react";
const Feature = () => {
  return (
    <div className="bg-gray-100 py-10 my-20">
      <h2 className="text-center text-2xl bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent font-bold mb-12">
        Why Choose Our Library Management System
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 px-4 mt-10">
        {/* Feature 1 */}
        <div className="bg-white p-4 hover:bg-slate-200 rounded-lg shadow text-center mb-10">
          <div className="text-4xl mb-3">⏱️</div>
          <h3 className="text-xl font-semibold mb-2">Time-Saving</h3>
          <p className="text-gray-600">
            Automate routine library tasks to save time for both librarians and
            members.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-4 hover:bg-slate-200 rounded-lg shadow text-center mb-10">
          <div className="text-4xl mb-3">✨</div>
          <h3 className="text-xl font-semibold mb-2">User-Friendly</h3>
          <p className="text-gray-600">
            A simple and intuitive interface that makes managing the library
            easy for everyone.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-4 hover:bg-slate-200 rounded-lg shadow text-center mb-10">
          <div className="text-4xl mb-3">🔒</div>
          <h3 className="text-xl font-semibold mb-2">Data Security</h3>
          <p className="text-gray-600">
            Keep library data safe with robust security features and regular
            backups.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
