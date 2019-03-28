import React,{Component} from 'react';
import ListaDatos from './../components/listaDatos';

class ListaDatosContainer extends Component{

    constructor(props){
        super(props);

        this.state={
            datos:[],
        };

    }

    render(){
          const {datos} = this.state;
          return (
              <ListaDatos
                  datos={datos}
              />
              )
          }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
              return response.json(); 
        })
        .then((datos)=>{
            //Aqui estan los datos 
            this.setState({
                datos:datos,
            })
        })
    }
}

export default ListaDatosContainer;