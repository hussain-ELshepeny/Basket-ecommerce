import { useState } from "react";

export function useHeaderActions() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  return {
    menuOpen,
    setMenuOpen,
    categoriesOpen,
    setCategoriesOpen,
    searchFocused,
    setSearchFocused,
    languageOpen,
    setLanguageOpen,
    currencyOpen,
    setCurrencyOpen,
  };
}
