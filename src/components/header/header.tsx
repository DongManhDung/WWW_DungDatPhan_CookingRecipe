import React from "react";

const header: React.FC = () => {
  return (
    <header className="shadow-md">
      <div className="bg-white text-white py-3 px6">
        <div className="container mx-auto flex justify-between item-center px-4">
          {/* Logo, phải sửa lại màu chữ */}
          <div className="text-2xl font-semibold text-orange-600">
            DDP Cooking
          </div>

          {/* Thanh tìm kiếm center */}
          <div className="flex-1 mx-6 flex justify-center">
            <div className="relative w-full w-[400px]">
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 text-gray-500 rounded-full pl-10 focus:outline-none"
                placeholder="Search food"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
                ></path>
              </svg>
            </div>
          </div>

          {/* Menu */}
          <nav className="flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-orange-600">
              Recipes
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-600">
              +Add Your Recipe
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14c-4.418 0-8-2.686-8-6 0-3.314 3.582-6 8-6s8 2.686 8 6c0 3.314-3.582 6-8 6zm0 0c-3.313 0-6 1.791-6 4s2.687 4 6 4 6-1.791 6-4-2.687-4-6-4z"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-green-700 py-2">
        <div className="container mx-auto flex justify-center space-x-12">
          <a href="#" className="text-white hover:text-orange-600">
            Article
          </a>
          <a href="#" className="text-white hover:text-orange-600">
            Chefs
          </a>
          <a href="#" className="text-white hover:text-orange-600">
            Diets
          </a>
          <a href="#" className="text-white hover:text-orange-600">
            Ingredients
          </a>
        </div>
      </div>
    </header>
  );
};

export default header;
