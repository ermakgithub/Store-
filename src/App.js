import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            orders: [],
            currentItems: [],
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
                    category: 'wardrobe',
                    price: '849.00'
                },
                {
                    id: 7,
                    title: 'Люстра',
                    img: '.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    category: 'light',
                    price: '84.99'
                },
                {
                    id: 8,
                    title: 'Стол компьютерный',
                    img: '.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    category: 'tables',
                    price: '659.99'
                },
                {
                    id: 9,
                    title: 'Кресло игровое',
                    img: '.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    category: 'chairs',
                    price: '745.00'
                },
                {
                    id: 10,
                    title: 'Кровать двуспальная',
                    img: '.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    category: 'sofa',
                    price: '699.00'
                },
                {
                    id: 11,
                    title: 'Шкаф кухонный',
                    img: '.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    category: 'wardrobe',
                    price: '448.99'
                },
                {
                    id: 12,
                    title: 'Торшер',
                    img: '.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    category: 'light',
                    price: '39.99'
                }
            ]
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
    }
    render(){
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Categories chooseCategory={this.chooseCategory}/>
                <Items items={this.state.currentItems} onAdd={this.addToOrder}/>
                <Footer />
            </div>
        )
    }

    chooseCategory(category){
        if(category === 'all'){
            this.setState({currentItems: this.state.items })
            return
        }



        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

    deleteOrder(id){
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

 addToOrder(item){
        let isInArray = false
        this.state.orders.forEach(el => {
            if(el.id === item.id)
            isInArray = true
        })
        if(!isInArray)
            this.setState({orders: [...this.state.orders,item]
    })
 }

}

export default App;
