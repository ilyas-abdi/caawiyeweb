import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
      <p className="text-2xl font-semibold mb-6 text-gray-700">
        Oops! The page you're looking for doesn't exist 😢
      </p> 
      <Link
        to="/"
        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      >
        Go back Home
      </Link>
    </div>
  );
}
