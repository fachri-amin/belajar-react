import React, {Component} from 'react';

class LifeCycleComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        // ketika component dipanggil method ini yang akan pertama kali di execute
    }

    // static getDerivedStateFromProps(props, state){
    //     // kedua di eksekusi
    // }

    // componentDidMount(){
    //     // keempat dieksekusi karena sebelum ini method ini dieksekusi method render lebih dulu di eksekusi
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     // ini dieksekusi ketika props atau state mengalami perubahan
    //     // dengan method ini bisa kita bisa melakukan sesuatu sebelum mengupdate component meskipun state dan props telah berubah
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     // ini dieksekusi ketika rendering dari component setelah update dilakukan
    //     // jadi kita bisa mendapatkan props dan state ketika keadaan component belum diupdate
    // }

    // componentDidUpdate(prevProps, prevState, snapshot){
    //     // dieksekusi ketika component berhasil diupdate
    // }

    // componentWillMount(){
    //     // dieksekusi ketika component akan dihilangkan
    // }

    render(){
        // method wajib yang digunakan untuk rendering component
        return (
            <p>Something</p>
        );
    }

    //? diagram life cycle component = https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
}

export default LifeCycleComponent;