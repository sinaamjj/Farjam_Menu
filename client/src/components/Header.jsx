// export default function Header() {
//   return (
//     <header className="bg-gradient-to-b from-amber-50 to-white shadow-md z-50">
//       <div className="flex items-center container justify-center mx-auto px-4 py-8 text-center">
//         {/* Café Name */}
//         <h1 className="text-5xl font-bold text-amber-900 mb-2 text-right">
//           کافه فرجام
//         </h1>
//       </div>
//     </header>
//   );
// }

import { Moon, Sparkles, Sun } from "lucide-react";

export default function Header({
  theme = "light",
  onToggleTheme,
  categories = [],
  activeCategory,
  onCategoryClick,
}) {
  return (
    <header className="sticky top-0 bg-white/85 dark:bg-gray-900/85 backdrop-blur-lg shadow-md z-50 border-b border-amber-100/60 dark:border-gray-800">
      <div className="container mx-auto px-4 py-6 space-y-5">
        {/* <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-right space-y-2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-amber-900 dark:text-amber-100 leading-tight">
              کافه فرجام
            </h1>
          </div>

          <button
            onClick={onToggleTheme}
            className="self-end inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-200 dark:border-gray-700 text-amber-900 dark:text-amber-100 hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-200 shadow-sm"
            aria-label="تغییر حالت نمایش"
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-4 h-4" />
                حالت روشن
              </>
            ) : (
              <>
                <Moon className="w-4 h-4" />
                حالت تیره
              </>
            )}
          </button>
        </div> */}

        <div className="flex items-center justify-between gap-6">
          <h1 className="text-3xl md:text-7xl font-black tracking-tight text-amber-950 dark:text-amber-100 leading-none drop-shadow-sm">
            کافه فرجام
          </h1>

          <button
            onClick={onToggleTheme}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-200/80 dark:border-gray-700/80 bg-white/60 dark:bg-gray-900/50 text-amber-950 dark:text-amber-100 hover:bg-amber-50/70 dark:hover:bg-gray-800/60 hover:border-amber-400/80 dark:hover:border-amber-500/70 transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98]"
            aria-label="تغییر حالت نمایش"
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-4 h-4" />
                حالت روشن
              </>
            ) : (
              <>
                <Moon className="w-4 h-4" />
                حالت تیره
              </>
            )}
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800/80 border border-amber-100 dark:border-gray-700 rounded-2xl p-4 shadow-sm">
          <div className="mt-4 flex gap-3 pt-1 overflow-x-auto pb-4">
            {categories.map(category => (
              <button
                key={category.id}
                type="button"
                onClick={() => onCategoryClick?.(category.id)}
                className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 hover:-translate-y-0.5 ${
                  activeCategory === category.id
                    ? "border-amber-400 dark:border-amber-300 bg-amber-200/70 dark:bg-amber-500/20 text-amber-900 dark:text-amber-50 shadow-md shadow-amber-200/60"
                    : "border-amber-200 dark:border-gray-700 bg-amber-50/80 dark:bg-gray-900/60 text-amber-800 dark:text-amber-100 hover:border-amber-400 dark:hover:border-amber-500"
                }`}
              >
                <span aria-hidden>{category.icon}</span>
                <span className="font-semibold text-sm">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
