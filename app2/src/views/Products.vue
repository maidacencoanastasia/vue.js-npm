<script>
import Product from "@/components/products/Product";
export default {
  components: {
    Product,
  },
  data: () => {
    return {
      products: [
        {
          id: 1,
          name: "Product 1",
          price: 123.45,
          description: "Product 1 Lorem ipsum dolor sit amet",
        },
        {
          id: 2,
          name: "Product 2",
          price: 123.45,
          description: "Product 2 Lorem ipsum dolor sit amet",
        },
        {
          id: 3,
          name: "Product 3",
          price: 123.45,
          description: "Product 3 Lorem ipsum dolor sit amet",
        },
        {
          id: 4,
          name: "Product 4",
          price: 123.45,
          description: "Product 4 Lorem ipsum dolor sit amet",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="about container">
    <h1>Products</h1>
    <div class="d-flex">
      <Product
        v-for="product of products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>


<style>
</style>