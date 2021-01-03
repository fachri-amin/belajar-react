import React, { Component, useEffect, useState } from 'react';

//! ini menggunakan class Component untuk membuat component yang statefull
// class Hooks extends Component {
//     state = {
//         count: 0
//     }

//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     render() {
//         return (
//             <div className="container">
//                 <p>Nilai : {this.state.count}</p>
//                 <button className="btn btn-danger" onClick={this.onUpdate}>Tambah Nilai</button>
//             </div>
//         )
//     }
// }


//! ini cara menggunakan Hooks pada react
const Hooks = () => {

    const [count, setCount] = useState(0) //parameternya sebagai nilai awal dari state
    //count sebagai state dan setCount sebagai fungsi yang dapat mengganti nilai count

    useEffect(() => {
        // useEffect seperti menggabungkan semua lifeCycle pada stateful component
        document.title = `Hitung ${count}`;

        return () => {
            // return disini seperti method componentWillUnmount
            document.title = `React App`;
        }
    })

    return (
        <div className="container">
            <p>Nilai : {count}</p>
            <button className="btn btn-info" onClick={() => setCount(count + 1)}>Tambah Nilai</button>
            <button className="btn btn-danger" onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Hooks;