import { Button, Snackbar, InputLabel, Select, MenuItem } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useCartContext } from 'common/context/Cart';
import { UsePaymentContext } from 'common/context/Payment';
import { UserContext } from 'common/context/User';
import Produto from 'components/Produto';
import { useContext, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Voltar, TotalContainer, PagamentoContainer} from './styles';

function Carrinho() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { balance = 0 } = useContext(UserContext);
  const { cart, totalValue, makePurchase } = useCartContext();
  const { paymentType, handlePaymentType, typesOfPayment } = UsePaymentContext();
  const history = useHistory();
  const totalPayment = useMemo(() => {
    return balance - totalValue;
  }, [balance, totalValue]);
  return (
    <Container>
      <Voltar onClick={() => history.goBack()}/>
      <h2>
        Carrinho
      </h2>
      {cart.map((item) => (
        <Produto
        {...item}
        key={item.id}
        />
      ))}
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
        <Select
          value={paymentType.id}
          onChange={(event) => handlePaymentType(event.target.value)}
        >
          {typesOfPayment.map((type) => (
            <MenuItem value={type.id} key={type.id}>
              {type.name}
            </MenuItem>
          ))}
        </Select>
      </PagamentoContainer>
      <TotalContainer>
          <div>
            <h2>Total no Carrinho: </h2>
            <span>R$ {totalValue.toFixed(2)}</span>
          </div>
          <div>
            <h2> Saldo: </h2>
            <span> R$ {Number(balance).toFixed(2)}</span>
          </div>
          <div>
            <h2> Saldo Total: </h2>
            <span> R$ {totalPayment.toFixed(2)}</span>
          </div>
        </TotalContainer>
        {cart.length === 0 && <h3>Seu carrinho está vazio</h3>}
      <Button
        onClick={() => {
          makePurchase();
          setOpenSnackbar(true);
        }}
        color="primary"
        variant="contained"
        disabled={totalPayment < 0 || cart.length === 0}
      >
         Comprar
       </Button>
        <Snackbar
          anchorOrigin={
            { 
              vertical: 'top',
              horizontal: 'right'
            }
          }
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
        >
           <MuiAlert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
          >
            Compra feita com sucesso!
          </MuiAlert>
        </Snackbar>
    </Container>
  )
}

export default Carrinho;