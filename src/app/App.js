import { BrowserRouter, Redirect, Route} from 'react-router-dom';
import Todo from './components/lista-tareas/Todo';
function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Todo} />
      <Route path='/todo' component={Todo} />
      {/* <Redirect from='' to='/' /> */}
    </BrowserRouter>
  );
}
export default App;