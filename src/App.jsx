import {useState} from 'react';
import './App.scss';
import {Canvas} from '@react-three/fiber';
import {Experience} from './components/Experience';

function App() {
  return (
    <div>
      <Canvas>
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
