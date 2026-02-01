import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { IoClose } from "react-icons/io5";
import { MdOutlineAddBox } from "react-icons/md";
import { FaRegMinusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

// Dummy Data
const categories = [
  {
    name: "Fashion",
    slug: "fashion",
    children: [
      {
        name: "Apparel",
        slug: "apparel",
        items: [
          "Smart Tablet",
          "Crepe T-shirt",
          "Leather Watch",
          "Rolling Diamond"
        ]
      }
    ]
  },
  {
    name: "Outerwear",
    slug: "outerwear",
    children: [
      {
        name: "Watch",
        slug: "watch",
        items: [
          "Smart Tablet",
          "Crepe T-shirt",
          "Leather Watch",
          "Rolling Diamond"
        ]
      }
    ]
  }
];

// Reusable button style
const menuButtonStyle = {
  justifyContent: "flex-start",
  width: "100%",
  color: "#4b5563", // gray-600
  textTransform: "capitalize",
  "&:hover": {
    color: "#ff5252",
    backgroundColor: "transparent"
  }
};

const CategoryPanel = ({ open, onClose }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openInnerMenu, setOpenInnerMenu] = useState({});

  /* Reset state when drawer closes */
  useEffect(() => {
    if (!open) {
      setOpenMenu(null);
      setOpenInnerMenu({});
    }
  }, [open]);

  const toggleMenu = (slug) => {
    setOpenMenu(prev => (prev === slug ? null : slug));
  };

  const toggleInnerMenu = (menuSlug, subSlug) => {
    setOpenInnerMenu(prev => ({
      ...prev,
      [menuSlug]: prev[menuSlug] === subSlug ? null : subSlug
    }));
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <Box sx={{ width: 260 }} role="presentation">

        {/* Header */}
        <h3 className="p-3 text-[16px] font-medium flex items-center justify-between">
          Shop By Categories
          <IoClose
            onClick={onClose}
            className="text-[20px] cursor-pointer hover:text-[#ff5252]"
          />
        </h3>

        <Divider />

        {/* Menu */}
        <div className="scroll">
          <ul className="w-full">

            {categories.map(category => (
              <li
                key={category.slug}
                className="relative group"
              >
                {/* Category */}
                <div className="flex items-center">
                  <Button sx={{ ...menuButtonStyle, px: 1.5 }}>
                    {category.name}
                  </Button>

                  {openMenu === category.slug ? (
                    <FaRegMinusSquare
                      className="absolute right-3 cursor-pointer text-gray-500 group-hover:text-[#ff5252]"
                      onClick={() => toggleMenu(category.slug)}
                    />
                  ) : (
                    <MdOutlineAddBox
                      className="absolute right-3 cursor-pointer text-gray-500 group-hover:text-[#ff5252]"
                      onClick={() => toggleMenu(category.slug)}
                    />
                  )}
                </div>

                {/* Subcategories */}
                {openMenu === category.slug && (
                  <ul className="pl-4">

                    {category.children.map(sub => (
                      <li
                        key={sub.slug}
                        className="relative group"
                      >
                        <div className="flex items-center">
                          <Button sx={{ ...menuButtonStyle, pl: 3 }}>
                            {sub.name}
                          </Button>

                          {openInnerMenu[category.slug] === sub.slug ? (
                            <FaRegMinusSquare
                              className="absolute right-3 cursor-pointer text-gray-500 group-hover:text-[#ff5252]"
                              onClick={() =>
                                toggleInnerMenu(category.slug, sub.slug)
                              }
                            />
                          ) : (
                            <MdOutlineAddBox
                              className="absolute right-3 cursor-pointer text-gray-500 group-hover:text-[#ff5252]"
                              onClick={() =>
                                toggleInnerMenu(category.slug, sub.slug)
                              }
                            />
                          )}
                        </div>

                        {/* Inner Items */}
                        {openInnerMenu[category.slug] === sub.slug && (
                          <ul className="pl-6">
                            {sub.items.map(item => (
                              <li key={item}>
                                <Button
                                  component={Link}
                                  to="/"
                                  onClick={onClose}
                                  sx={{ ...menuButtonStyle, pl: 3 }}
                                >
                                  {item}
                                </Button>
                              </li>
                            ))}
                          </ul>
                        )}

                      </li>
                    ))}

                  </ul>
                )}
              </li>
            ))}

          </ul>
        </div>
      </Box>
    </Drawer>
  );
};

export default CategoryPanel;
