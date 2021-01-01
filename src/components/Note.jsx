import React from "react";
import './style.css';
import {Card,Button} from "react-bootstrap";


const Note = ({list,callBack,callBackEdit,switchValue}) => {
    // Supply a default empty array to avoid mapping an undefined.
    const lists = list || [];
    const [style,setStyle]=React.useState('unset');

    return (
        <div>
          <div>{
          switchValue?<Button style={{margin:"20px"}} onClick={()=>setStyle('row-reverse')}>Sort by Newest</Button>:null
          }</div>
            <ul style={{margin:"25px",padding:"20px",flexDirection:`${style}`}}>
            {
                lists.map((item)=>(
                  <Card key={item.id} style={{margin:"25px"}}>
                  <Card.Header as="h5">{item.title}</Card.Header>
                  <Card.Body>
                    <Card.Text style={{color:"GrayText"}}>{item.day}</Card.Text>
                    <Card.Text>
                     {item.note}
                    </Card.Text>
                    <Button style={{margin:"10px"}} variant="primary" onClick={callBackEdit.bind(callBackEdit,item)}>Edit</Button>
                    <Button variant="danger" onClick={callBack.bind(callBack,item.id)}>Delete</Button>
                  </Card.Body>
                </Card>
                ))
            }
            </ul>
            </div>
    )
          }

          export default Note;


