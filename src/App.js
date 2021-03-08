import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';

import Todo from './components/Todo';

function App() {
  return (
    <Container>
      <Todo />
    </Container>
  );
}

export default App;
