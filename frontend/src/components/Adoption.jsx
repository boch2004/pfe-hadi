import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import { ProductService } from "./service/ProductService";
import { useDispatch, useSelector } from "react-redux";
import { getanimal } from "../JS/userSlice/animalSlice";
import Cardanimal from "./Cardanimal";

export default function NumScrollDemo() {
  const [products, setProducts] = useState([]);

  const responsiveOptions = [
    { breakpoint: "1400px", numVisible: 2, numScroll: 1 },
    { breakpoint: "1199px", numVisible: 3, numScroll: 1 },
    { breakpoint: "767px", numVisible: 2, numScroll: 1 },
    { breakpoint: "575px", numVisible: 1, numScroll: 1 },
  ];

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";
      case "LOWSTOCK":
        return "warning";
      case "OUTOFSTOCK":
        return "danger";
      default:
        return null;
    }
  };

  useEffect(() => {
    ProductService.getProductsSmall()
      .then((data) => setProducts(data.slice(0, 9)))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const productTemplate = (product) => (
    <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
      <div style={{ display: "flex", justifyContent: "center" }} className="mb-3">
        <img src={product.image} alt={product.name} className="w-6 shadow-2" />
      </div>
      <div>
        <h4 className="mb-1">{product.name}</h4>
        <h6 className="mt-0 mb-3">${product.price}</h6>
        <Tag value={product.inventoryStatus} severity={getSeverity(product)} />
        <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
          <Button icon="pi pi-search" className="p-button p-button-rounded" />
          <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
        </div>
      </div>
    </div>
  );

  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getanimal()); // جلب البيانات عند تحميل الصفحة
    }, [dispatch]);
  

  // ✅ استخدم optional chaining لتجنب الأخطاء
  const Animals = useSelector((state) => state.animal?.animalList || []);
  console.log(Animals)


  return (
    <>
      <div style={{ padding: "0 200px" }} className="card">
        <Carousel
          autoplayInterval={5000}
          circular={true}
          value={products}
          numScroll={1}
          numVisible={4}
          responsiveOptions={responsiveOptions}
          itemTemplate={productTemplate}
        />
      </div>

      {Animals.length > 0 ? (
        Animals.map((el) => <Cardanimal key={el.id} product={el} />)
      ) : (
        <p>No animals available</p>
      )}
    </>
  );
}
