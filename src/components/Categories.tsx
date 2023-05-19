interface Props {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
}

const Categories = ({ categories, selected, onClick }: Props) => {
  return (
    <section className="p-4 text-center">
      <h2 className="mb-2 border-b-2 border-orange-300 text-lg font-semibold">
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:text-orange-500 ${
              category === selected && 'text-orange-300'
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
