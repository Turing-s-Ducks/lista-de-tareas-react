import { BrowserRouter, Redirect, Route} from 'react-router-dom';
import Login from './components/login/Login';
import Todo from './components/lista-tareas/Todo'
function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Login} />
      <Route path='/analytics' component={Login} />
      <Route path='/notes' component={Login} />
      <Route path='/todo' component={Todo} />
      {/* <Redirect from='' to='/' /> */}
    </BrowserRouter>
  );
}
export default App;