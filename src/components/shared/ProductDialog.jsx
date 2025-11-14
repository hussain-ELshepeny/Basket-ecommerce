"use client"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react"

export default function ProductDialog({ open, product }) {
  const [quantity, setQuantity] = useState(1)
  console.log("rendered")
  return (
    <Dialog open={open}>
      <DialogContent className="max-w-[900px] max-h-[90vh] overflow-y-auto p-6 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={product?.Image.url}
              alt={product?.name}
              className="w-full rounded-xl border"
            />

            <div className="flex gap-3 mt-4">
              {[1, 2, 3, 4, 5, 6].images?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-20 h-20 object-cover rounded-lg border cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* RIGHT: INFO + ACTIONS */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold">{product?.name}</h2>
              <p className="text-xl mt-2 font-medium">${product?.price}</p>

              {/* Variants */}
              <div className="mt-4">
                <p className="font-medium mb-2">Available In:</p>
                <div className="flex gap-2">
                  {product.sizes?.map((s, i) => (
                    <button
                      key={i}
                      className="px-4 py-1 rounded-full border hover:bg-primary hover:text-white transition"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mt-6">
                <button
                  className="border w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  –
                </button>

                <span className="text-xl font-medium">{quantity}</span>

                <button
                  className="border w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>

              {/* Add to Cart */}
              <button className="bg-primary text-white w-full py-3 rounded-full mt-6 font-semibold hover:bg-primary/90 transition">
                Add to Cart
              </button>

              {/* Wishlist + Share */}
              <div className="flex items-center gap-4 mt-4">
                <button className="border rounded-full px-6 py-2 hover:bg-gray-100">
                  Wishlist
                </button>
                <button className="border rounded-full px-6 py-2 hover:bg-gray-100">
                  Share
                </button>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6">
              <div className="flex gap-2 flex-wrap">
                {product.tags?.map((t, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ---------- DETAILS SECTION ---------- */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Product Details:</h3>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* ---------- RELATED PRODUCTS ---------- */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-4">Related products</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {product.related?.map((p, i) => (
              <div
                key={i}
                className="border rounded-xl p-3 hover:shadow transition cursor-pointer"
              >
                <img
                  src={p.image}
                  className="w-full h-28 object-cover rounded-lg"
                />
                <p className="mt-2 font-medium text-sm">{p.title}</p>
                <p className="text-primary font-semibold text-sm">${p.price}</p>
                <button className="mt-2 bg-primary text-white w-full py-1 rounded-full text-sm">
                  +
                </button>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
