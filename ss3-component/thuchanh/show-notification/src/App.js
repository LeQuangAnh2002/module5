import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import Hello from "./component/Hello";

class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            display:true
        }
    }
    delete = () =>{
        //method setState được gọi để cập nhật trạng thái Component
        this.setState({display:false})
    }
    render() {
        let comp;
        if (this.state.display){
            comp = <Hello />;
        }
        return(
            <div style={{textAlign:'center'}}>
                {comp}
                <button onClick={this.delete}>Delete the component</button>
            {/*
            1. Khi bạn nhấn Delete the component, method delete dc gọi và gọi setSate
            Khi trạng thái của componet App thay dổi, React sẽ kích hoạt quá trình cập nhật và render lại component
            2.Khi một component React bị unmount(bị gở khỏi DOM), React sẽ tư dộng gọi phương thức componentWillUnmount
            nếu được định nghĩa trong component đó ( cụ thể là Hello)
            3.Trong trường hợp này, khi component Hello bị unmount( do bị gỡ bỏ khi display được đặt thành false),
            phương thức componentWillUnmount được gọi và hiển thị thông báo trong alert
            */}
            </div>
        )
    }
}

export default App;
