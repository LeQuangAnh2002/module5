import {Component} from "react";

class Calculator extends Component{
    constructor(props) {
        super(props);
        this.state = {
            input1: '',
            input2: '',
            operator: '',
            result: 0
        }
    };

    handleOperatorClick = (operator) =>{
        const {input1,input2}= this.state;

        const  num1 = parseInt(input1);
        const  num2 =parseInt(input2);

        let calculatorResult = '';
        switch (operator) {
            case '+':
                calculatorResult = (num1 + num2).toString();
                break;
            case '-':
                calculatorResult = (num1 - num2).toString();
                break;
            case '*':
                calculatorResult = (num1 * num2).toString();
                break;
            case '/':
                calculatorResult = (num1 / num2).toString();
                break;
        };

        this.setState({
            // operator : operator,
            result : calculatorResult
        });

    }
    render() {
        const {input1,input2,result} = this.state;
        return(
            <div>
                <h1>Calculator</h1>
                {/*
                    1.value={input1}: Tham số value xác định giá trị hiển thị trong input. Trong trường hợp này, giá trị của input1 trong state được sử dụng để hiển thị trong input.
                    2.(e) => this.setState({ input1: e.target.value }), chúng ta đang sử dụng một hàm lambda (arrow function) để xử lý sự kiện onChange của input.
                    3. sử dụng e.target.value để truy cập giá trị hiện tại của input. Bằng cách này, chúng ta có thể lấy giá trị mới của input mỗi khi người dùng thay đổi nó.

                */}
                <input value={input1}
                onChange={(e) => this.setState({ input1: e.target.value })}/>
                <br/>
                <input value={input2}
                       onChange={(e) => this.setState({ input2: e.target.value })}/>
                <br/>
                <button onClick={(e)=>this.handleOperatorClick('+')}>+</button>
                <button onClick={(e)=>this.handleOperatorClick('-')}>-</button>
                <button onClick={(e)=>this.handleOperatorClick('*')}>*</button>
                <button onClick={(e)=>this.handleOperatorClick('/')}>/</button>
                <br/>
                <h2>Result: {result}</h2>
            </div>



        )
    }

}

export default Calculator;