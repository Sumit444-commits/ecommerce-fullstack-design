import React from "react";

const SupplierRequest = () => {
  return (
    <div className="w-full max-w-7xl mx-auto font-sans mb-10">
      <div className="relative w-full rounded-xl overflow-hidden flex flex-col md:flex-row p-8 md:p-12">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bgs/warehouse-bg.png')",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2c7cf1]/90 to-[#60b6e8]/90" />

        {/* LEFT SIDE CONTENT */}
        <div className="relative z-10 flex-1 pr-0 md:pr-10 mb-10 md:mb-0 flex flex-col justify-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-5 leading-snug md:w-3/4">
            An easy way to send requests to all suppliers
          </h2>
          <p className="text-sm md:text-base opacity-90 md:w-3/4 leading-relaxed">
            Quickly send quote requests to multiple suppliers at once.
            Describe your product requirements and receive competitive offers.
          </p>
        </div>

        {/* RIGHT SIDE FORM CARD */}
        <div className="relative z-10 w-full md:w-[420px] bg-white rounded-xl p-6 shadow-2xl shrink-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-5">
            Send quote to suppliers
          </h3>

          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Inquiry sent!");
            }}
          >
            {/* Item Input */}
            <input
              type="text"
              placeholder="What item you need?"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />

            {/* Details */}
            <textarea
              placeholder="Type more details"
              rows={3}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition resize-none"
            ></textarea>

            {/* Quantity + Unit */}
            <div className="flex gap-3">
              <input
                type="number"
                placeholder="Quantity"
                required
                className="w-1/2 border border-gray-300 rounded-md px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              />
              <select
                className="w-1/2 border border-gray-300 rounded-md px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition bg-white cursor-pointer"
              >
                <option value="pcs">Pcs</option>
                <option value="kg">Kg</option>
                <option value="boxes">Boxes</option>
              </select>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-medium px-4 py-3 rounded-md text-sm transition-all mt-2 w-full"
            >
              Send inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SupplierRequest;