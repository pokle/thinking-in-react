import React from 'react'
import ReactDOM  from 'react-dom'
import {createValueSource,ValueSourcedInput} from './value-source'

function ProductCategoryRow({category}){
  return  <tr>
            <th colSpan="2">{category}</th>
          </tr>;
}

function ProductRow({product}) {
  return  <tr>
            <td><span style={{color: product.stocked ? 'black': 'red'}}>{product.name}</span></td>
            <td>{product.price}</td>
          </tr>;
}

function ProductTable({products, filterText, inStockOnly}) {
    var rows = [];
    var lastCategory = null;

    products.forEach(function(product) {
      if (product.name.indexOf(filterText) === -1 || (!product.stocked && inStockOnly)) {
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

function SearchBar({filterTextValueSource,inStockOnlyValueSource}) {
    return (
      <form>
        <ValueSourcedInput
          type="text"
          placeholder="Search..."
          valueSource={filterTextValueSource}
        />
        <p>
          <ValueSourcedInput
            id="stockcheck"
            type="checkbox"
            checkedSource={inStockOnlyValueSource}
          />
          <label htmlFor="stockcheck">Only show products in stock</label>
        </p>
      </form>
    );
}

class FilterableProductTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        filterText: '',
        inStockOnly: false
    };
  }

  render() {
    return (
      <div>
        <SearchBar
          filterTextValueSource={createValueSource(this, 'filterText')}
          inStockOnlyValueSource={createValueSource(this, 'inStockOnly')}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

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
