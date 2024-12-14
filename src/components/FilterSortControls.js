import React from "react";
import "./FilterSortControls.css";

function FilterSortControls({ onFilterChange, onSortChange }) {
  // Engagement score ranges for the filter
  const engagementRanges = [
    { label: "0 - 1000", min: 0, max: 1000 },
    { label: "1001 - 5000", min: 1001, max: 5000 },
    { label: "5001 - 10000", min: 5001, max: 10000 },
    { label: "10000+", min: 10001, max: Infinity }
  ];

  return (
    <div className="controls">
      {/* Category Filter */}
      <select onChange={(e) => onFilterChange("category", e.target.value)}>
        <option value="All">All Categories</option>
        <option value="Tech">Tech</option>
        <option value="Fashion">Fashion</option>
        <option value="Sports">Sports</option>
      </select>

      {/* Engagement Score Filter */}
      <select
        onChange={(e) => {
          const selectedRange = engagementRanges[parseInt(e.target.value)];
          if (selectedRange) {
            onFilterChange("engagementScore", {
              min: selectedRange.min,
              max: selectedRange.max,
            });
          }
        }}
      >
        <option value="">Select Engagement Score Range</option>
        {engagementRanges.map((range, index) => (
          <option key={index} value={index}>
            {range.label}
          </option>
        ))}
      </select>

      {/* Sort Options */}
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="">No Sorting</option>
        <option value="engagement-asc">Engagement Ascending</option>
        <option value="engagement-desc">Engagement Descending</option>
        <option value="reach-asc">Reach Ascending</option>
        <option value="reach-desc">Reach Descending</option>
      </select>
    </div>
  );
}

export default FilterSortControls;
