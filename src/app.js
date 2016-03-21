import React from 'react'
import ReactDOM  from 'react-dom'
import LinkedStateMixin from 'react-addons-linked-state-mixin'

const ProductCategoryRow = ({category}) =>
  (<tr><th colSpan="2">{category}</th></tr>);

const ProductRow = ({product}) => (
    <tr>
      <td><span style={{color: product.stocked ? 'black': 'red'}}>{product.name}</span></td>
      <td>{product.price}</td>
    </tr>
);

var ProductTable = React.createClass({
  render: function() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    }.bind(this));
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

var SearchBar = React.createClass({
  render: function() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          valueLink={this.props.filterTextLink}
        />
        <p>
          <input
            type="checkbox"
            checkedLink={this.props.inStockOnlyLink}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
});

var FilterableProductTable = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      filterText: '',
      inStockOnly: false
    };
  },

  render: function() {

    return (
      <div>
        <SearchBar
          filterTextLink={this.linkState('filterText')}
          inStockOnlyLink={this.linkState('inStockOnly')}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
});


var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);
