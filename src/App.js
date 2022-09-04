
import './App.css';
import CardComponent from './component/cardcomponent';

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <CardComponent name="Oyun 1" imageUrl="img/img8.png" />
        <CardComponent name="Oyun 2" imageUrl="img/img7.webp" />
        <CardComponent name="Oyun 3" imageUrl="img/img9.jpeg" />
        <CardComponent name="Oyun 4" imageUrl="img/img4.jpeg" />
        <CardComponent name="Oyun 5" imageUrl="img/img5.jpg" />
        <CardComponent name="Oyun 6" imageUrl="img/img3.webp" />
      </div>
    </div>
  );
}

export default App;
