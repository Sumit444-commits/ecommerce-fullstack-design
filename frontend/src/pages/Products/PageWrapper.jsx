import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom"; // <-- NEW: Imported to read URL from Navbar

// Assuming you have saved these components in the same folder or adjust paths accordingly
import Breadcrumb from "../../components/Products utils/Breadcrumb";
import Sidebar from "../../components/Products utils/Sidebar";
import TopControls from "../../components/Products utils/TopControls";
import ProductCardList from "../../components/Products utils/ProductCardList";
import ProductCardGrid from "../../components/Products utils/ProductCardGrid";
import Pagination from "../../components/Products utils/Pagination";
import Newsletter from "../Home/Newsletter";
import { useStore } from "../../store/AppContext";

const PageWrapper = () => {
  const { Api } = useStore();

  // --- NEW: Read URL Search Params from Navbar ---
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  const urlCategory = searchParams.get("category") || "";

  // 1. Data & Loading State
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. View Mode
  const [viewMode, setViewMode] = useState("list");

  // 3. Filter State (The Single Source of Truth)
  const [filters, setFilters] = useState({
    category: "All", 
    brands: [],
    features: [],
    price: { min: "", max: "" },
    condition: "Any",
    ratings: [],
  });

  // 4. State for Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // --- Sync Navbar Category with Sidebar State ---
  // If the user selects a category in the Navbar, we update the Sidebar automatically!
  useEffect(() => {
    if (urlCategory && urlCategory !== "All category") {
      setFilters((prev) => ({ ...prev, category: urlCategory }));
    }
  }, [urlCategory]);

  // --- Fetch Data from Backend ---
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${Api}/api/data/products`);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [Api]);

  // --- FILTERING LOGIC ---
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      
      // NEW: 0. Text Search Filter (from Navbar Input)
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = product.title?.toLowerCase().includes(query);
        const matchesDesc = product.shortDescription?.toLowerCase().includes(query);
        
        if (!matchesTitle && !matchesDesc) {
          return false;
        }
      }

      // 1. Category Filter
      if (filters.category !== "All" && product.category !== filters.category) {
        return false;
      }

      // 2. Brand Filter
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
        return false;
      }

      // 3. Condition Filter
      if (filters.condition !== "Any" && product.condition !== filters.condition) {
        return false;
      }

      // 4. Price Filter 
      const prodPrice = product.price || (product.tieredPricing && product.tieredPricing[0]?.price) || 0;
      if (filters.price.min && prodPrice < Number(filters.price.min)) return false;
      if (filters.price.max && prodPrice > Number(filters.price.max)) return false;

      // 5. Ratings Filter
      if (filters.ratings.length > 0) {
        const prodRating = Math.round((product.rating/2) || 0); 
        
        if (!filters.ratings.includes(prodRating)) {
          return false;
        }
      }

      return true; 
    });
  }, [products, filters, searchQuery]); // <-- Added searchQuery as a dependency

  // Reset to page 1 whenever filters or search terms change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, searchQuery]);

  // --- Dynamic Pagination Logic ---
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <>
      <div className="min-h-screen bg-[#f7f9fa] pb-10 font-sans">
        <div className="max-w-7xl mx-auto px-4 pt-4">
          <Breadcrumb items={["Home", "Products", filters.category !== "All" ? filters.category : "All Categories"]} />

          <div className="flex flex-col lg:flex-row gap-6 mt-4">
            
            {/* Left Sidebar */}
            <div className="w-full lg:w-[240px] shrink-0">
              <Sidebar filters={filters} setFilters={setFilters} />
            </div>

            {/* Right Main Content */}
            <main className="flex-1 flex flex-col gap-4">
              
              {/* Show the user what they searched for if a query exists */}
              {searchQuery && (
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm text-gray-800">
                  Showing search results for: <span className="font-bold text-blue-600">"{searchQuery}"</span>
                </div>
              )}

              <TopControls
                viewMode={viewMode}
                setViewMode={setViewMode}
                activeFilters={filters.brands}
                totalItems={filteredProducts.length}
                onClearFilter={(brandToRemove) => {
                  setFilters((prev) => ({
                    ...prev,
                    brands: prev.brands.filter((b) => b !== brandToRemove),
                  }));
                }}
                onClearAll={() => {
                  setFilters({
                    category: "All",
                    brands: [],
                    features: [],
                    price: { min: "", max: "" },
                    condition: "Any",
                    ratings: [],
                  });
                }}
              />

              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : filteredProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm gap-3">
                  <span className="text-lg font-medium text-gray-800">No products found.</span>
                  <span>Try adjusting your filters or searching for something else!</span>
                </div>
              ) : (
                <>
                  {viewMode === "list" ? (
                    <div className="flex flex-col gap-4">
                      {currentProducts.map((product) => (
                        <ProductCardList key={product._id} product={product} />
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {currentProducts.map((product) => (
                        <ProductCardGrid key={product._id} product={product} />
                      ))}
                    </div>
                  )}

                  {filteredProducts.length > 0 && (
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages || 1}
                      onPageChange={(page) => setCurrentPage(page)}
                      itemsPerPage={itemsPerPage}
                      onItemsPerPageChange={(limit) => {
                        setItemsPerPage(limit);
                        setCurrentPage(1);
                      }}
                    />
                  )}
                </>
              )}
            </main>
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  );
};

export default PageWrapper;