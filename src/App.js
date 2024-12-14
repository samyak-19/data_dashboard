import React, { useState } from "react";
import "./App.css";
import mockData from "./data/mockData";
import ItemCard from "./components/ItemCard";
import Modal from "./components/Modal";
import FilterSortControls from "./components/FilterSortControls";

function App() {
  const [items, setItems] = useState(mockData);
  const [filters, setFilters] = useState({
    category: "All",
    engagementScore: { min: 0, max: Infinity }
  });
  const [sortType, setSortType] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  // Handle filters
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // Handle sorting
  const handleSortChange = (type) => {
    setSortType(type);
  };

  // Filter logic
  const filteredItems = items.filter((item) => {
    const engagementScore = item.likes + item.shares + item.comments;
    return (
      (filters.category === "All" || item.category === filters.category) &&
      engagementScore >= filters.engagementScore.min &&
      engagementScore <= filters.engagementScore.max
    );
  });

  // Sort logic
  const sortedItems = [...filteredItems].sort((a, b) => {
    const aEngagement = a.likes + a.shares + a.comments;
    const bEngagement = b.likes + b.shares + b.comments;
    const aReach = (a.followers * aEngagement) / 100;
    const bReach = (b.followers * bEngagement) / 100;

    if (sortType === "engagement-asc") return aEngagement - bEngagement;
    if (sortType === "engagement-desc") return bEngagement - aEngagement;
    if (sortType === "reach-asc") return aReach - bReach;
    if (sortType === "reach-desc") return bReach - aReach;

    return 0;
  });

  const handleViewDetails = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="App">
      <header>
        <h1>Data Dashboard</h1>
      </header>
      <FilterSortControls
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      <div className="item-list">
        {sortedItems.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onViewDetails={() => handleViewDetails(item)}
          />
        ))}
      </div>

      {selectedItem && (
        <Modal item={selectedItem} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
