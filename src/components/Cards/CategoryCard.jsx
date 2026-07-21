function CategoryCard({transactions}) {
  return (
    <div className="border rounded-2xl p-2">
      <div className="flex items-center justify-between ">
        <p>{transactions.amount}$</p>

        <p className="rounded-3xl">Icon</p>
      </div>
      <h1>{transactions.category}</h1>
    </div>
  );
}
export default CategoryCard;
