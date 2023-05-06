import 'react-native-gesture-handler';
import Balloon from './components/Balloon';
import { NativeRouter , Route  , Routes} from 'react-router-native';
import BallonForm from './components/Form'
import { NativeBaseProvider } from 'native-base';
export default function App() {
  
  // const AnimatedBalloon = Animated.createAnimatedComponent(LOGO);
  // const animatedProps = useAnimatedProps()

  return (
    <NativeBaseProvider>
    <NativeRouter>
      <Routes>
      <Route path='/' element={<Balloon />} />
      <Route path='/form' element={<BallonForm />} />
      </Routes>
    </NativeRouter>
    </NativeBaseProvider>
  );
}

