
import PropTypes from 'prop-types'

export default function ShoppingList(props) {

    const listItems = props.products.map(product =>
        <li key={product.id} style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}>
          {product.title}
        </li>
      );
  return (
    <ul>{listItems}</ul>
  )
}
//props validation
ShoppingList.propTypes = {
  products: PropTypes.array.isRequired
}
