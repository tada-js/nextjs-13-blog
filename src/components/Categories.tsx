interface Props {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
}

const Categories = ({ categories, selected, onClick }: Props) => {
  return (
    <section>
      <h2>카테고리</h2>
      <ul></ul>
    </section>
  );
};

export default Categories;
