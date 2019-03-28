import React from 'react';
import {Text, View,ScrollView,FlatList, StyleSheet} from 'react-native';

const ListaDatos =(props)=>{
    const {datos}=props;
    return(
        <View style={styles.view}>
         <Text/>
        <Text  style={{fontSize:25,color:'navy',width:450,textAlign:'center', backgroundColor:'#3681A1',borderRadius:5,padding:10}}>Lista de Datos</Text>
        <Text/>
        <FlatList  data={datos}
            renderItem={
              
                ({item})=>{                  
                    return(
                        <View style={styles.view3}>
                        <View style={styles.view2}>
                       
                            <Text style={{fontSize: 20,fontWeight:'bold'}}  >Titulo:</Text>
                            <Text style={{fontSize:17,color:'#167498'}} >
                              {item.title}
                            </Text>
                            <Text/>
                            <Text style={{fontSize: 20,fontWeight:'bold'}}  >Descripción:</Text>
                            <Text style={{fontSize:15,color:'#547A89'}}>
                              {item.body}
                            </Text>
                       </View>
                        </View>
                    )
                  
                }
            }>          
        </FlatList>       
            </View>
    );
}

const styles=StyleSheet.create({
    view3:{
      
        margin:5
    },

    view:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    paddingHorizontal: 10,
    backgroundColor:'#D9F3FE',
   
    },
    view2:{
        backgroundColor:'#BED0D7',
        justifyContent:'space-between',
        flexDirection:"column",
        padding:5,
        borderRadius:10,
        
        
          
    }
});

export default ListaDatos;

