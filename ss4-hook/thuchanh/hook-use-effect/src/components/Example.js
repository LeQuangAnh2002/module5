import React, { useState, useEffect } from 'react';
const Example = () => {
    const [count, setCount] = useState(0);

    // Tương tự như componentDidMount và componentDidUpdate:
    // useEffect chạy sau tất cả những lần render đầu tiền và mỗi lần update
    //Thay vì nghĩ theo hướng mounting và updating bạn sẽ thấy dễ hiểu hơn nếu nghĩa theo kiểu
    // sau khi render.
    useEffect(() => {
        // Cập nhập document title sử dụng browser API
        document.title = `You clicked ${count} times`;  });
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
// class Example extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }
//     //componentDidMount phương thức được gọi sau khi component đã được render lần đầu tiên
//     // trong DOM. Nó thường được sử dụng để thực hiện các tác vụ khởi tạo,như gọi API,
//     // thiết lập kết nối WebSocket, hoặc đăng ký các sự kiện DOM
//     componentDidMount() {
//         document.title = `You clicked ${this.state.count} times`;
//         console.log(document.title);
//
//     }
//     // componentDidUpdate phương thức này được gọi sau khi component đã được cập nhật và render
//     // lại trong DOM. Nó thường được sử dụng để xử lý các tác vụ mới sau khi props hoặc state
//     // của các component thay đổi.
//     componentDidUpdate() {
//         document.title = `You clicked ${this.state.count} times`;
//         console.log(document.title);
//     }
//
//     render() {
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//                     Click me
//                 </button>
//             </div>
//         );
//     }
// }
export default Example;