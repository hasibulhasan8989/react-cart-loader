import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, Tooltip } from "recharts";
import { ColorRing } from 'react-loader-spinner'


const Axios = () => {
  const [phone, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phones = data.data.data;

        const fakePhone = phones.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: phone.slug.split("-")[1],
          };

          return obj;
        });
         
        setPhones(fakePhone);
        setLoading(false)
      });
  }, []);

  return (
    <div>
      {
        loading && <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
      }

      <h1>Phone :{phone.length}</h1>
      <BarChart width={1500} height={300} data={phone}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name"></XAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Axios;
