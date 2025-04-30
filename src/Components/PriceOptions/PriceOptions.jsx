import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const [priceOptions, setPriceOptions] = useState([]);

  useEffect(() => {
    fetch("gym.json")
      .then((res) => res.json())
      .then((data) => setPriceOptions(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl mb-16">Get Your Best Price Here...</h2>
      <div className="grid md:grid-cols-3 gap-4 ">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
