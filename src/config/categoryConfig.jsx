import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LiaCarSideSolid } from "react-icons/lia";
import { IoWalletOutline } from "react-icons/io5";
import { GoGift } from "react-icons/go";

// Category Names By Type
export const expenseCategories = [
  "Groceries",
  "Shopping",
  "Car",
  "Coffee",
  "Health",
];
export const incomeCategories = [
  "Salary",
  "Bonus",
  "Social Media",
  "Freelancing",
];

// Category Colors
export const categoryColors = {
  Groceries: "bg-green-200",
  Shopping: "bg-blue-200",
  Car: "bg-yellow-200",
  Salary: "bg-purple-200",
  Bonus: "bg-pink-200",
};

// Category Icons
export const categoryIcons = {
  Groceries: <MdOutlineLocalGroceryStore />,
  Shopping: <HiOutlineShoppingBag />,
  Car: <LiaCarSideSolid />,
  Salary: <IoWalletOutline />,
  Bonus: <GoGift />,
};
