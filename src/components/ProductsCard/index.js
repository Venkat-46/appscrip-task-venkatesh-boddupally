import React from "react";
import { Helmet } from "react-helmet";
import { IoHeartOutline } from "react-icons/io5";
import "./index.css";

const ProductsCard = ({ product }) => {
  const { id, title, description, rating, price, image } = product;

  // Schema.org structured data for SEO
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: title,
    image: [image],
    description: description,
    sku: id,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: price,
      availability: "https://schema.org/InStock",
    },
  };

  const getTitle=()=>{
    if(title.length>20){
        const titleList=title.split(" ")
        return titleList.slice(0,2).join(" ")+"..."
    }
    return title
  }

  return (
    <li className="product-card-item">
      <Helmet>
        <title>{title} | MyStore</title>
        <meta name="description" content={description} />
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>
      <img src={image} alt={title} className="product-image" />
      <div className="product-title-container">
        <h2 className="product-title">{getTitle()}</h2>
        <IoHeartOutline className="heart-icon icons"/>
      </div>
      <p className="product-desc">{description.substr(0,30)}<button className="product-read-more"> ...read more</button></p>
    </li>
  );
};

export default ProductsCard;
