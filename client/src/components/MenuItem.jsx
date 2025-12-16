// export default function MenuItem({ item }) {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
//       {/* Image Container */}
//       <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
//         <img
//           src={item.image}
//           alt={item.name}
//           className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//           onError={e => {
//             e.target.src =
//               'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23e5e7eb" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="16" fill="%236b7280" text-anchor="middle" dy=".3em"%3EImage Not Found%3C/text%3E%3C/svg%3E';
//           }}
//         />
//       </div>

//       {/* Content Container */}
//       <div className="p-4 flex flex-col flex-grow">
//         {/* Item Name */}
//         <h3 className="text-lg font-bold text-gray-800 mb-2 text-right">
//           {item.name}
//         </h3>

//         {/* Ingredients */}
//         <p className="text-sm text-gray-600 mb-4 text-right flex-grow">
//           {item.ingredients}
//         </p>

//         {/* Price */}
//         <div className="flex items-center pt-3 border-t border-gray-200">
//           <span className="text-2xl font-bold text-amber-600">
//             {item.price}
//           </span>
//           <span className="text-sm pr-2 text-gray-500">تومان</span>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function MenuItem({ item }) {
  return (
    <div className="group relative bg-white/90 dark:bg-gray-800/80 rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-amber-100 dark:border-gray-700">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/60 via-transparent to-amber-100/60 dark:from-amber-500/10 dark:to-amber-200/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          onError={e => {
            e.target.src =
              'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%2327272a" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="16" fill="%23a1a1aa" text-anchor="middle" dy=".3em"%3EImage Not Found%3C/text%3E%3C/svg%3E';
          }}
        />
      </div>

      <div className="relative p-5 flex flex-col flex-grow gap-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-amber-50 text-right leading-snug">
            {item.name}
          </h3>
          <div className="text-right">
            <span className="text-xs text-gray-500 dark:text-gray-300">
              آماده‌سازی سریع
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-700 dark:text-gray-200 text-right flex-grow leading-relaxed">
          {item.ingredients}
        </p>

        <div className="flex items-center justify-between gap-3 pt-3 border-t border-amber-100 dark:border-gray-700">
          <div className="flex items-baseline gap-2 text-right">
            <span className="text-2xl font-extrabold text-amber-700 dark:text-amber-200">
              {item.price}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              تومان
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
