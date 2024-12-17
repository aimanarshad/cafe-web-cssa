"use client";
import Image from "next/image";
import { useState } from "react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrinkOpen, setIsDrinkOpen] = useState(false);

  const EatFood = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const DrinkFood = () => {
    setIsDrinkOpen(!isDrinkOpen);
  };
  return (
    <>
      {/* Header */}
      <h1
        style={{
          backgroundColor: "#475569",
          color: "white",
          fontSize: "60px",
          textAlign: "center",
          marginTop: "36px",
        }}
      >
        THE MENU
      </h1>

      {/* Eat Button */}
      <button
        onClick={EatFood}
        style={{
          backgroundColor: "#1e293b",
          marginLeft: "400px",
          color: "white",
          width: "200px",
          height: "50px",
          padding: "8px 0",
          marginBottom: "32px",
          marginTop: "32px",
          borderRadius: "8px",
          textAlign: "center",
          fontSize: "24px",
          cursor: "pointer",
        }}
       
      >
        Eat
      </button>

      {/* Eat Menu */}
      {isMenuOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginLeft: "400px",
            marginTop: "32px",
            marginBottom: "32px",
            justifyContent: "center",
            textAlign: "center",
            border: "4px solid #475569",
            fontSize: "20px",
            backgroundColor: "#d1d5db",
            height: "600px",
            width: "800px",
          }}
        >
          <h5 style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "8px" }}>
            Bread Basket
          </h5>
          <p style={{ color: "#1e40af", marginBottom: "16px" }}>
            Assortment of fresh baked fruit breads and muffins 5.50
          </p>

          <h5 style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "8px" }}>
            Honey Almond Granola with Fruits
          </h5>
          <p style={{ color: "#1e40af", marginBottom: "16px" }}>
            Natural cereal of honey toasted oats, raisins, almonds and dates 7.00
          </p>

          <h5 style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "8px" }}>
            Belgian Waffle
          </h5>
          <p style={{ color: "#1e40af", marginBottom: "16px" }}>
            Vanilla flavored batter with malted flour 7.50
          </p>

          <h5 style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "8px" }}>
            Scrambled Eggs
          </h5>
          <p style={{ color: "#1e40af", marginBottom: "16px" }}>
            Scrambled eggs, roasted red pepper and garlic, with green onions 7.50
          </p>

          <h5 style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "8px" }}>
            Blueberry Pancakes
          </h5>
          <p style={{ color: "#1e40af" }}>
            With syrup, butter and lots of berries 8.50
          </p>
        </div>
      )}

      {/* Drink Button */}
      <button
        onClick={DrinkFood}
        style={{
          backgroundColor: "#1e293b",
          marginLeft: "200px",
          color: "white",
          width: "200px",
          height: "50px",
          padding: "8px 16px",
          borderRadius: "8px",
          textAlign: "center",
          fontSize: "24px",
          cursor: "pointer",
        }}
       
      >
        Drink
      </button>

      {/* Drink Menu */}
      {isDrinkOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginLeft: "400px",
            marginTop: "32px",
            marginBottom: "32px",
            justifyContent: "center",
            textAlign: "center",
            border: "4px solid #475569",
            fontSize: "20px",
            backgroundColor: "#d1d5db",
            height: "600px",
            width: "800px",
          }}
        >
          <h5 style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "8px" }}>
            Coffee
          </h5>
          <p style={{ color: "#1e40af", marginBottom: "16px" }}>Regular coffee 2.50</p>

          <h5 style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "8px" }}>
            Chocolato
          </h5>
          <p style={{ color: "#1e40af", marginBottom: "16px" }}>
            Chocolate espresso with milk 4.50
          </p>

          <h5 style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "8px" }}>
            Corretto
          </h5>
          <p style={{ color: "#1e40af", marginBottom: "16px" }}>Whiskey and coffee 5.00</p>

          <h5 style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "8px" }}>
            Iced Tea
          </h5>
          <p style={{ color: "#1e40af", marginBottom: "16px" }}>Hot tea, except not hot 3.00</p>

          <h5 style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "8px" }}>
            Soda
          </h5>
          <p style={{ color: "#1e40af" }}>Coke, Sprite, Fanta, etc. 2.50</p>
        </div>
      )}

      {/* Image */}
      <Image
        src="/menu1.png" // Path to the image
        alt="cafe" // Alternative text
        width={1300} // Width of the image
        height={200} // Height of the image
        style={{ marginBottom: "32px", marginTop: "36px" }}
      />
    </>
  );
}
