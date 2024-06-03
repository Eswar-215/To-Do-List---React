import React from "react"

class App extends React.Component{
    state={
        itemName : "",
        item : [],
    }

    addItem = ()=>{
    let itemCopy = [...this.state.item]
    itemCopy.push(this.state.itemName)
    this.setState({item : itemCopy, itemName : ""})
    }

    itemChange =(e)=>{
    this.setState({itemName : e.target.value})
    }

    deleteMethod = (index)=>{
    let itemCopy = [...this.state.item]
     itemCopy.splice(index,1)
     this.setState({item : itemCopy})
    }

    updateName =(index)=>{
    console.log(`update name with index ${index}`)
    let itemCopy = [...this.state.item]
    itemCopy.splice(index,1,document.getElementById(`id${index}`).value)
    this.setState({item : itemCopy})

    }

     
    render(){
        // console.log(this.state)
        return(
            <>
            <h2>To do list</h2>
            <input placeholder='enter your item' onChange={this.itemChange} value= {this.state.itemName}/>
            <button onClick={this.addItem}>Additem</button>
            <ol>
                {this.state.item.map((item,i)=>{
                 return <li>{item} 
                 <input 
                 id={`id${i}`}
                  onChange={(e)=>{
                    console.log(`update item name ${e.target.value }`)
                  }}
                  placeholder="eneter your item"/>
                 <button onClick={()=>{this.updateName(i)}}>Update</button> 

                 <button onClick={()=>{this.deleteMethod(i)}} >Delete</button></li>
                })}
            </ol>
            </>
        )
    }
}
export default App
