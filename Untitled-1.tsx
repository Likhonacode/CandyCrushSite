import React from "React";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Candy } from "lucide-react";
import { motion } from "framer-motion";

const candies = [
  {
    name: "Strawberry Swirl",
    description: "Sweet, fruity, and melt-in-your-mouth delicious.",
    price: "$3.99",
    img: "https://example.com/strawberry.png",
  },
  {
    name: "Chocolate Bomb",
    description: "Rich chocolate candy for chocoholics.",
    price: "$4.99",
    img: "https://example.com/chocolate.png",
  },
  {
    name: "Sour Power",
    description: "Tangy sour candy with a powerful punch.",
    price: "$2.99",
    img: "https://example.com/sour.png",
  },
];

export default function CandyCrushSite() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-pink-100 to-yellow-100 p-8">
      <motion.h1
        className="text-4xl font-bold text-center text-pink-700 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🍬 Welcome to Candy Crush Site 🍬
      </motion.h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
        {candies.map((candy, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-pink-400">
              <CardContent className="p-4">
                <img
                  src={candy.img}
                  alt={candy.name}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <h2 className="text-xl font-semibold text-pink-800">
                  {candy.name}
                </h2>
                <p className="text-gray-600 mb-2">{candy.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-pink-600">{candy.price}</span>
                  <Button className="bg-pink-500 hover:bg-pink-600 text-white">
                    <ShoppingCart className="mr-2 w-4 h-4" /> Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
