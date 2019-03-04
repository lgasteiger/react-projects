/*******************************************************************
 * Description: index.js - This JS file will contain all the React 
 *              components that'll be used to render the Product Table 
 *              Web app.
 * Date: 2019-02-27
 * Author: ReactJS.org
 * Revised: 2019-03-03  (Leo Gasteiger)
 *******************************************************************/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    ); //end return
  } //end render
} //end ProductCategoryRow

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? product.name : 
      <span style={{color : 'red'}}>
        {product.name}
      </span>

    return (
      <tr>
        <td>
          {name}
        </td>
        <td>
          {product.price}
        </td>
      </tr>
    ); //end return
  } //end render
} //end ProductRow

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    const rows = [];
    let lastCategory = null;

    const products = this.props.products;
    products.forEach (
      (product) => {
        if (product.name.indexOf(filterText) === -1) {
          return;
        } //end if

        if (inStockOnly && !product.stocked) {
          return;
        } //end if

        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow category={product.category}
                                key={product.category}
            />
          ); //end row.push
        } //end if

        rows.push(
          <ProductRow product={product}
                      key={product.name}
          />
        ); //end rows.push

        lastCategory = product.category;
      } //end forEach
    );

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    ); //end return
  } //end render
} //end ProductTable

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  } //end constructor

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  } //end handleFilterTextChange

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  } //end handleInStockChange

  render() {
    return (
      <form>
        <input type="text"
               placeholder="Search..."
               value={this.props.filterText}
               onChange={this.handleFilterTextChange}
        />
        <p>
          <input type="checkbox"
                 checked={this.props.inStockOnly}
                 onChange={this.handleInStockChange} 
          />
          {' '}
          Only show products in stock.
        </p>
      </form>
    ); //end return
  } //end render
} //end SearchBar

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.handleFileChange = this.handleFileChange.bind(this);
  } //end constructor

  handleFileChange() {
    this.props.onFileChange(this.fileInput.current.files[0].name);
  } //end handleFileChange

  render() {
    return (
      <fieldset>
        <legend>Please select products file</legend>
        <label htmlFor="uploadFile">
          Upload filename:
        </label>
        <input type="file"
               className="uploadFile"
               ref={this.fileInput}
               onChange={this.handleFileChange}
        />
      </fieldset>
    ); //end return
  } //end render
} //end FileInput

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
      ,inStockOnly: false
      ,filename: ''
    }; //end this.state

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  } //end constructor

  //componentDidMount() {
  //  fetch('./products.txt')
  //    .then(response => response.json())
  //    .then(jsonData => this.setState({ jsonData }))
  //    .catch(error => console.log(error.text()))
  //} //end componentDidMount

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    }); //end this.setState
  } //end handleFilterTextChange

  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    }); //end this.setState
  } //end handleInStockChange

  handleFileChange(filename) {
    this.setState({
      filename: filename
    }); //end this.setState

    //console.log('Products filename: ' + filename);
  } //end handleFileChange

  render() {
    return (
      <div>
        <section id="heading">
          <h1>
            Product Table Example
          </h1>
          <p>
            This Webpage will show a React example involving a product
            table.
          </p>
        </section>
        <section className="content">
          <FileInput onFileChange={this.handleFileChange} />
          <SearchBar filterText={this.state.filterText}
                     inStockOnly={this.state.inStockOnly}
                     onFilterTextChange={this.handleFilterTextChange}
                     onInStockChange={this.handleInStockChange}
          />
          <ProductTable products={this.props.products}
                        filterText={this.state.filterText} 
                        inStockOnly={this.state.inStockOnly}
          />
        </section>
        <footer>
          <p className="reactInfo">
            <a href="https://reactjs.org">
              React JS Info
            </a>
          </p>
          <p className="lastUpdated">
            Last Updated: {(new Date()).toLocaleString()}
          </p>
        </footer>
      </div>
    ); //end return
  } //end render
} //end FilterableProductTable

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
]; //end PRODUCTS

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />
  ,document.getElementById('root')
); //end ReactDOM.render