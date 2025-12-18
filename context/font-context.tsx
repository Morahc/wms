"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { fonts } from "@/config/fonts";

type Font = (typeof fonts)[number];

interface FontContextType {
  font: Font;
  setFont: (font: Font) => void;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

export const FontProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [font, _setFont] = useState<Font>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("font") as Font;
    }
    return fonts[0];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      _setFont(localStorage.getItem("font") as Font);
    }
  }, []);

  useEffect(() => {
    const applyFont = (font: string) => {
      const root = window.document.body;
      root.classList.forEach((cls) => {
        if (cls.startsWith("font-")) root.classList.remove(cls);
      });
      root.classList.add(`font-${font}`);
    };

    applyFont(font);
  }, [font]);

  const setFont = (font: Font) => {
    localStorage.setItem("font", font);
    _setFont(font);
  };

  return <FontContext value={{ font, setFont }}>{children}</FontContext>;
};

export const useFont = () => {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
};
