{
  // interface - generic

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper1: Developer< {
  brand: string;
  model: string;
  display: string;
} > = {
    name: "Person",
    computer: {
      brand: "Asus",
      model: "X-kw66",
      releaseYear: 2013,
    },
    smartWatch: { brand: "Emilab", model: "kw66", display: "OLED" },
  };

  const poorDeveloper2: Developer<EmilabWatch> = {
    name: "Person",
    computer: {
      brand: "Asus",
      model: "X-kw66",
      releaseYear: 2013,
    },
    smartWatch: { brand: "Emilab", model: "kw66", display: "OLED" },
  };

  const richDevelper: Developer<{
    brand: string;
    model: string;
  }> = {
    name: "person",
    computer: {
      brand: "HP",
      model: "x-25ur",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "something",
    },
  };
}
