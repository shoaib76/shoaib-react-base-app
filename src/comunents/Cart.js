import React, { useContext } from 'react'
import { listContext } from './Store'

export const Cart = () => {
    const { cart } = useContext(listContext);
    //let cartList = 
        
        return (
            
              <table className='c'>
                
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>AGE</th>
                  
                </tr>
                {cart.map((v,i) => {
        return (
            
                    <tr>
                    <td>{i}</td>
                    <td>{v.name}</td>
                    <td>{v.age}</td>
                    
                    </tr>
                )
            })}
              </table>
              
            
            

        )
        }
    
        
            
        
    
    

    

