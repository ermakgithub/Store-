import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            items:[
                {
                    id: 1,
                    title: 'Стул серый',
                    img: 'chair-grey.jpeg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 2,
                    title: 'Стол',
                    img: 'table.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    category: 'tables',
                    price: '149.00'
                },
                {
                    id: 3,
                    title: 'Диван',
                    img: 'sofa.jpeg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    category: 'sofa',
                    price: '549.99'
                },
                {
                    id: 4,
                    title: 'Лампа',
                    img: 'wall-light.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    category: 'light',
                    price: '25.80'
                },
                {
                    id: 5,
                    title: 'Стул белый',
                    img: 'chair-white.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 6,
                    title: 'Шкаф',
                    img: 'Wardrobe.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    category: 'Wardrobe',
                    price: '849.0'
                }
            ]
        }
    }
    render(){
        return (
            <div className="wrapper">
                <Header />
                <Items items={this.state.items}/>
                <Footer />
            </div>
        )
    }
}

export default App;
