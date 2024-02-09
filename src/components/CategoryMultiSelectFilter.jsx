import React from "react";

const categoryList = [
  "Carbon",
  "Water",
  "Biodiversity",
  "Sustainability",
  "Impact Investment",
  "Technology",
  "Leadership",
];

function CategoryMultiSelectFilter({
  selectedCategories,
  setSelectedCategories,
}) {
  const handleCategoryToggle = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="w-full">
      <div className="border border-gray-300 rounded-lg p-2">
        {categoryList.map((category) => (
          <label
            key={category}
            className="sm:inline-flex flex items-center mr-4 cursor-pointer"
          >
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryToggle(category)}
              className="form-checkbox h-5 w-5 text-blue-500 cursor-pointer"
            />
            <span className="ml-2">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default CategoryMultiSelectFilter;
