import React,{Component} from 'react';
import Album from './../components/album';

class AlbumContainer extends Component{

    constructor(props){
        super(props);

        this.state={
            datos:[],
        };

    }

    render(){
          const {datos} = this.state;
          return (
              <Album
                  datos={datos}
              />
              )
          }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos')
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

export default AlbumContainer;
