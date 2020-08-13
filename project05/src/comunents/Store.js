import React, { createContext, useState, useContext } from 'react';

export const listContext = createContext();



export const Store = ({ children }) => {

    function addNew(pd){
        let newList = appState.cart;
    
        const newItem = {
          count:1,
          id:pd.id,
          name:pd.name
        }
    
        const filtered = newList.filter(i =>{
          return i.id === pd.id;
        });

        /* if the product is already in the cart,
        update it's count otherwise add it to cart with 1 count */

    
        if(filtered.length > 0){
          const pos = newList.map(i => { return i.id; }).indexOf(pd.id);
          newList[pos].count += 1;
        }else{
          newList.push(newItem);
        }
        
        setState({...appState, cart:newList, cartCount:getCartCount()});

      }


      function removePd(indx){
        const cartList = appState.cart;
    
        cartList.splice(indx,1);
    
        setState({...appState, cart:cartList, cartCount:getCartCount()});
      }

      ////// function to set the number of products in cart

      function getCartCount(){

        let cnt = 0;
    
        if(appState.cart.length > 0){
    
          appState.cart.forEach(item => {
          cnt += item.count;
          });
          
        }

        return cnt;

      }

      

    const initstore = {
        cart:[],
        cartcount:0,
        addNew:addNew,
        removePd:removePd
    }

    const [ appState, setState] = useState(initstore);

    return (

        <listContext.Provider value={appState}>

            { children }
        </listContext.Provider>

       
    )
}