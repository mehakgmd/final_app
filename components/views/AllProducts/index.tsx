"use client"
import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import { oneProductType } from "@/components/utils/ProductsDataArrayAndType";
import CardAll from "../CardAll";

interface propsType {
  productArray: Array<oneProductType>;
}

interface StateType {
  items: Array<oneProductType>;
  hasMore: boolean;
}

export default class AllProductsCompo extends Component<
  { ProductData: propsType },
  StateType
> {
  start: number = 10;
  end: number = 20;

  constructor(props: { ProductData: propsType }) {
    super(props);
    this.state = {
      items: [...props.ProductData.productArray],
      hasMore: true,
    };
  }

  fetchDataFromApiGradually = async (start: number, end: number) => {
    try {
      const res = await fetch(
        `${BASE_PATH_FORAPI}/api/products?start=${start}&end=${end}`
      );
      const dataToCheckAndSend = await res.json();
      return dataToCheckAndSend;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  getData = async () => {
    try {
      let allTogether = await this.fetchDataFromApiGradually(
        this.start,
        this.end
      );
      if (allTogether.productArray !== "Not found") {
        this.setState((prevState) => ({
          items: [...prevState.items, ...allTogether.productArray],
        }));
      } else {
        this.setState({
          hasMore: false,
        });
      }
      this.start = this.start + 10;
      this.end = this.end + 10;
    } catch (error) {
      console.error("Error getting data:", error);
    }
  };

  render() {
    return (
      <InfiniteScroll
        dataLength={this.state.items.length}
        next={this.getData}
        hasMore={this.state.hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        className="content-center justify-center grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 gap-4"
      >
        {this.state.items.map((item: oneProductType, index: number) => (
          <CardAll key={index} singleProductData={item} />
        ))}
      </InfiniteScroll>
    );
  }
}
