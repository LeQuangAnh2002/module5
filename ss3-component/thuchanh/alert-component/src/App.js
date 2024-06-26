
import './App.css';
import Alert from "./components/Alert";
import {useState} from "react";

function App() {
    // const alertContents = {
    //     success: 'This is a success alert',
    //     info: 'This is an info alert',
    //     warning: 'This is a warning alert',
    //     danger: 'This is a danger alert',
    // };
    // const [alertType, setAlertType] = useState('info');
    //
    // const handleButtonClick = (type) => {
    //     setAlertType(type);
    // };
  return (
      // <div>
      //     <button onClick={() => handleButtonClick('success')}>Success</button>
      //     <button onClick={() => handleButtonClick('info')}>Info</button>
      //     <button onClick={() => handleButtonClick('warning')}>Warning</button>
      //     <button onClick={() => handleButtonClick('danger')}>Danger</button>
      //
      //     <Alert text={alertContents[alertType]} type={alertType} />
      // </div>
    <div className="alert alert-warning" role="alert">
        <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại."></Alert>
    </div>
  );
}

export default App;
