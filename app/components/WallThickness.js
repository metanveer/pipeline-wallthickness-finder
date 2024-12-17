"use client";
import React, { useState, useEffect } from "react";
import styles from "./WallThickness.module.css";

// Import the JSON file
import wallThicknessData from "../data/wallThicknessData.json";

const WallThickness = () => {
  const [npsOptions, setNpsOptions] = useState([]); // For NPS dropdown
  const [headerOptions, setHeaderOptions] = useState([]); // For Headers dropdown
  const [selectedNps, setSelectedNps] = useState(""); // Selected NPS value
  const [selectedHeader, setSelectedHeader] = useState(""); // Selected Header value
  const [displayValue, setDisplayValue] = useState(""); // Value to display

  // Extract NPS and Header options on mount
  useEffect(() => {
    if (wallThicknessData.length > 0) {
      const headers = Object.keys(wallThicknessData[0]); // Extract headers
      const nps = wallThicknessData.map((row) => row["NPS"]); // Extract NPS values

      setNpsOptions([...new Set(nps)]); // Unique NPS values
      setHeaderOptions(
        headers.filter((header) => header !== "NPS" && header !== "OD")
      ); // Exclude 'NPS' from headers
    }
  }, []);

  // Update display value when selection changes
  useEffect(() => {
    if (selectedNps && selectedHeader) {
      const matchedRow = wallThicknessData.find(
        (row) => row.NPS === selectedNps
      );
      setDisplayValue(matchedRow ? matchedRow[selectedHeader] || "N/A" : "N/A");
    }
  }, [selectedNps, selectedHeader]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Pipeline Wall Thickness Finder</h2>

      <div className={styles.inputSection}>
        {/* NPS Dropdown */}
        <div className={styles.dropdown}>
          <label className={styles.label}>Select NPS</label>
          <select
            className={styles.select}
            value={selectedNps}
            onChange={(e) => setSelectedNps(e.target.value)}
          >
            <option value="" disabled>
              Choose NPS
            </option>
            {npsOptions.map((nps, index) => (
              <option key={index} value={nps}>
                {nps}
              </option>
            ))}
          </select>
        </div>

        {/* Header Dropdown */}
        <div className={styles.dropdown}>
          <label className={styles.label}>Select Schedule</label>
          <select
            className={styles.select}
            value={selectedHeader}
            onChange={(e) => setSelectedHeader(e.target.value)}
          >
            <option value="" disabled>
              Choose Schedule
            </option>
            {headerOptions.map((header, index) => (
              <option key={index} value={header}>
                {header}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Display Section */}
      <div className={styles.displaySection}>
        <h3>Wall Thickness:</h3>
        <p className={styles.displayValue}>
          {displayValue === "-"
            ? "Not available"
            : displayValue === ""
            ? "Select options to view value"
            : `${displayValue} mm`}
        </p>
      </div>
    </div>
  );
};

export default WallThickness;
