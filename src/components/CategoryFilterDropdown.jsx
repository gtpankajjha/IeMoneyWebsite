import React, { useState, useEffect, useRef } from "react";

const categoryList = ["Carbon", "Water", "Soil"];

function CategoryFilterDropdown({ selectedCategory, setSelectedCategory }) {
  // const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  //   const [categoryList, setCategoryList] = useState();

  const filteredCategories = categoryList.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    // get menu category list for particular restaurant
    // getMenuCategoryListByRestaurantId();

    // close dropdown when clicked outside
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //   //   get category list by restaurant id
  //   const getMenuCategoryListByRestaurantId = () => {
  //     const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/category/category-list-by-restaurantId/6515ae3d0fd9e4dd4a6c85aa`;

  //     // Make an Axios GET request to fetch the data
  //     axios
  //       .get(apiUrl)
  //       .then((response) => {
  //         setCategoryList(response.data[0]);
  //       })
  //       .catch((error) => {
  //         // Handle any errors that occurred during the request
  //         console.error("Error fetching data:", error);
  //       });
  //   };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
    setSearchTerm("");
  };

  const handleCategoryRemove = () => {
    setSelectedCategory("");
  };

  return (
    <div className="sm:flex relative" ref={dropdownRef}>
      <input
        type="text"
        placeholder="Filter by category"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsDropdownOpen(true)}
      />
      {isDropdownOpen && (
        <div className="absolute z-10 sm:mt-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          {filteredCategories.map((category, index) => (
            <div
              key={index}
              className="cursor-pointer px-4 py-2 hover:bg-blue-100"
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </div>
          ))}
        </div>
      )}
      {selectedCategory && (
        <div className="sm:mx-2 mt-2 w-full">
          {/* <p className="text-gray-600">Selected Category:</p> */}
          <p className="font-semibold px-2 py-1 bg-blue-500 text-white rounded-full sm:w-full sm:text-center w-1/2">
            {selectedCategory}
            <button
              className="ml-2 focus:outline-none"
              onClick={() => handleCategoryRemove()}
            >
              &times;
            </button>
          </p>
        </div>

        // <div className="px-2 py-1 bg-blue-500 text-white rounded-full flex items-center">
        //   {selectedCategory}
        //   <button
        //     className="ml-2 focus:outline-none"
        //     onClick={() => handleCategoryRemove}
        //   >
        //     &times;
        //   </button>
        // </div>
      )}
    </div>
  );
}

export default CategoryFilterDropdown;
