import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";
import { useTheme } from "../context/ThemeContext";

const Categories = ({ selectedCategory, setSelectedCategory }) => {

  const { themeMode } = useTheme();
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: themeMode === "dark" ?  "black" : "white"
          }}
          key={category.name}
        >
          <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
              color: category.name === selectedCategory ? "inherit" :  (themeMode === "dark" ? "white" : "black"),
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  )
}


export default Categories;