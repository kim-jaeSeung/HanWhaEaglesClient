import type { Category } from "../../types/community";

interface CategoryTabsProps {
  categories: Category[];
  active: Category;
  onSelect: (category: Category) => void;
}

function CategoryTabs({ categories, active, onSelect }: CategoryTabsProps) {
  return (
    <nav className="flex flex-wrap items-center gap-3 py-4">
      {categories.map((category) => {
        const selected = category === active;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelect(category)}
            className={
              "rounded-full px-3 py-1 text-sm transition-colors border " +
              (selected
                ? "bg-white text-main-orange border-main-orange"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100 border-gray-200")
            }
          >
            {category}
          </button>
        );
      })}
    </nav>
  );
}

export default CategoryTabs;
