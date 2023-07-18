import CourseList from './CourseList';
import './App.css';
import Clock from './Clock';
import Contact from './Contact';
import ContactForm from './ContactForm';

function App() {
  return (
    <div className="App">
      <Clock/>
      {/* <h2>React Session.</h2> */}
      <CourseList/>
      {/* <Contact/> */}
      {/* <ContactForm/> */}
    </div>
  );
}

export default App;
