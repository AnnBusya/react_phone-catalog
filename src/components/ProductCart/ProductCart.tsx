import { Link } from 'react-router-dom';
import { Product } from '../../types/Product';
import style from './ProductCart.module.scss';
import { HeartButton } from '../HeartButton';
import { ButtonAddCart } from '../ButtonAddCart';
interface ProductCardProps {
  product: Product;
}
export const ProductCart: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <>
      <Link
        to={`/${product.category}/${product.itemId}`}
        className={style.picture}
      >
        <img src={product.image} alt={product.name} className={style.image} />
      </Link>
      <Link
        to={`/${product.category}/${product.itemId}`}
        className={style.name}
      >
        {product.name}
      </Link>
      <p className={style.price}>{`$${product.fullPrice}`}</p>
      <ul className={style.details}>
        <li className={style.item}>
          <p className={style.itemName}>Screen</p>
          <p className={style.itemParam}>{product.screen}</p>
        </li>
        <li className={style.item}>
          <p className={style.itemName}>Capacity</p>
          <p className={style.itemParam}>{product.capacity}</p>
        </li>
        <li className={style.item}>
          <p className={style.itemName}>RAM:</p>
          <p className={style.itemParam}>{product.ram}</p>
        </li>
      </ul>
      <div className={style.actions}>
        <ButtonAddCart productId={product.itemId} />
        <HeartButton productId={product.itemId} />
      </div>
    </>
  );
};
