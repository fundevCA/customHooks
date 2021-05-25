import { useState } from "react";

// Put initial index in first param and array in second param
// This will return current Item and the new Item when Event is triggered
export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) return;
  return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
};
