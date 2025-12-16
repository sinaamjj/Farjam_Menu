// import MenuItem from "./MenuItem";

// export default function MenuCategory({ category }) {
//   return (
//     <section className="mb-12">
//       {/* Category Header */}
//       <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-amber-600">
//         <span className="text-3xl">{category.icon}</span>
//         <h2 className="text-4xl font-bold text-gray-800 text-right">
//           {category.name}
//         </h2>
//       </div>

//       {/* Items Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {category.items.map(item => (
//           <MenuItem key={item.id} item={item} />
//         ))}
//       </div>
//     </section>
//   );
// }

import MenuItem from "./MenuItem";

export default function MenuCategory({
  category,
  isActive,
  isAnimated,
  refCallback,
  index = 0,
}) {
  const backgroundVariants = [
    "bg-gradient-to-br from-amber-50/70 via-white to-amber-100/40 dark:from-gray-900/60 dark:via-gray-900/50 dark:to-amber-500/5",
    "bg-gradient-to-br from-white via-amber-50/60 to-white/80 dark:from-gray-900/70 dark:via-amber-500/10 dark:to-gray-900/60",
    "bg-gradient-to-br from-amber-100/60 via-white to-amber-50/60 dark:from-gray-950/70 dark:via-gray-900/60 dark:to-amber-500/10",
  ];

  const toneClass = backgroundVariants[index % backgroundVariants.length];

  return (
    <section className="mb-12 scroll-mt-40" id={category.id} ref={refCallback}>
      <div
        className={`rounded-3xl p-6 md:p-8 border border-amber-100 dark:border-gray-800 shadow-sm transition-all duration-500 ${toneClass} ${
          isActive
            ? "scale-[1.01] shadow-lg shadow-amber-200/40 dark:shadow-amber-500/20"
            : ""
        } ${isAnimated ? "animate-pulse" : ""}`}
      >
        <div
          className={`flex items-center justify-between flex-wrap gap-4 mb-6 pb-3 border-b border-amber-200 dark:border-gray-700 ${
            isActive
              ? "bg-amber-50/70 dark:bg-amber-500/10 rounded-xl px-4 py-3 shadow-inner"
              : ""
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl" aria-hidden>
              {category.icon}
            </span>
            <div className="text-right">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-amber-50">
                {category.name}
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-transform duration-500">
          {category.items.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
