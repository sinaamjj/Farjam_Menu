// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import MenuCategory from '@/components/MenuCategory';
// import { menuCategories } from '@/data/menuData';

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       <Header />
      
//       <main className="flex-grow container mx-auto px-4 py-12">
//         {menuCategories.map((category) => (
//           <MenuCategory key={category.id} category={category} />
//         ))}
//       </main>
      
//       <Footer />
//     </div>
//   );
// }
import { useEffect, useMemo, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuCategory from "@/components/MenuCategory";
import { menuCategories } from "@/data/menuData";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [activeCategory, setActiveCategory] = useState(
    menuCategories[0]?.id ?? ""
  );
  const [animatedCategory, setAnimatedCategory] = useState("");
  const categoryRefs = useRef({});

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(savedTheme || (prefersDark ? "dark" : "light"));
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const categoryShortcuts = useMemo(
    () =>
      menuCategories.map(category => ({
        id: category.id,
        label: category.name,
        icon: category.icon,
      })),
    []
  );

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveCategory(id);
          }
        });
      },
      { threshold: 0.45 }
    );

    Object.values(categoryRefs.current).forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [menuCategories.length]);

  const handleCategoryClick = id => {
    const element = categoryRefs.current[id];
    if (element) {
      setActiveCategory(id);
      setAnimatedCategory(id);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => setAnimatedCategory(""), 800);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50/80 via-white to-amber-100/60 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        categories={categoryShortcuts}
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />

      <main className="flex-grow container mx-auto px-4 py-12 space-y-16">
        {menuCategories.map((category, index) => (
          <MenuCategory
            key={category.id}
            category={category}
            isActive={activeCategory === category.id}
            isAnimated={animatedCategory === category.id}
            index={index}
            refCallback={el => {
              categoryRefs.current[category.id] = el;
            }}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

