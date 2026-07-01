import getCategories from "@/actions/get-categories";
import NavbarContent from "./navbar-content";
import { Category } from "@/types";

const Navbar = async () => {
  // Gracefully handle if getCategories fails during development
  let categories: Category[] = [];
  try {
    categories = await getCategories();
  } catch (error) {
    console.error("Error fetching categories:", error);
  }

  return (
    <>
      <NavbarContent categories={categories} />
      {/* Spacer to prevent content from hiding under the fixed navbar */}
      <div className="h-[80px]" />
    </>
  );
};

export default Navbar;
