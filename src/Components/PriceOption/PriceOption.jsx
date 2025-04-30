import Feature from "../Feature/Feature";


const PriceOption = ({option}) => {
   
    const{name,price,features}=option
    return (
        <div className="bg-[#EB5B00] p-12 text-white rounded-2xl flex flex-col">
          <h1><span className="text-7xl font-extrabold">{price}</span>
          <span className="text-3xl">/month</span></h1> 
          <h2 className="mt-6 text-4xl font-semibold">{name}</h2> 
        <div className="mt-4 flex-grow-1 pl-6">
        {
            features.map((feature,idx)=><Feature key={idx} feature={feature}></Feature>)
          }
        </div>

        <button className="btn border-none bg-[#D91656] w-full shadow-none">Buy Now</button> 


        </div>
    );
};

export default PriceOption;
