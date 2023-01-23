import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useCartContext } from 'common/context/Cart';
import { useHistory } from 'react-router-dom';

export default function NavBar() {
  const { productQuantities } = useCartContext();
  const history = useHistory();
  return (
    <Nav>
      <Logo />
      <IconButton
        disabled={productQuantities === 0}
        onClick = {() => history.push('/carrinho')}
        aria-label="cart"
      >
        <Badge
          color="primary"
          overlap="rectangular"
          badgeContent={productQuantities}
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  )
}