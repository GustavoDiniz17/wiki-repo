
import gitLogo from '../assets/github.svg'
import Input from '../components/input';

import {Container} from './styles'
function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='githu-logo'/>
      <Input />
    </Container>
  );
}

export default App;
