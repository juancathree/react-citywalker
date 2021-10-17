import AppRouter from 'routers/AppRouter';
import { IKContext } from 'imagekitio-react';
import { ToastContainer } from 'react-toastify';
import Container from 'components/Container/Container';
import 'styles/toast.scss';

function App() {
   return (
      <IKContext urlEndpoint={process.env.REACT_APP_IK}>
         <Container>
            <AppRouter />
            <ToastContainer
               position="top-center"
               autoClose={2000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover={false}
               className="toast"
            />
         </Container>
      </IKContext>
   );
}

export default App;
