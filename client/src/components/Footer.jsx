export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between gap-8 text-right">
          {/* Café Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">آدرس :</h3>
            <p className="text-gray-300 mb-2">کرج - جهانشهر - نبش یکم غربی</p>
          </div>

          {/* Contact */}
          {/* <div>
            <h3 className="text-xl font-bold mb-4">تماس با ما</h3>
            <a
              href="tel:026-34449251"
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              026-34449251
            </a>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>کلیه حقوق برای "کافه فرجام" محفوظ است</p>
        </div>
      </div>
    </footer>
  );
}
