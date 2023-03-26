import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id, number } = useParams();

  return (
    <div>
      <h1>ProductDetailPage {id} {number}</h1>
    </div >
  )
}

export default ProductDetailPage