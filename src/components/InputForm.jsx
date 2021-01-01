import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Note from './Note';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function MultilineTextFields() {
  const classes = useStyles();
  const [title,setTitle] = React.useState("");
  const [note, setNote] = React.useState("");
  const [item, setItem] = React.useState([]);
  const [toggle,setToggle]=React.useState(false);

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const day = today.toDateString();

const handleSubmit =(e)=>{
    e.preventDefault();
    setItem([...item,{
        id:timeElapsed,
        day:day,
        title:title,
        note:note,
    }])
   setTitle("");
   setNote("");
   setToggle(true);
}

//callback delete function
function handleDelete(value){
   setItem(item.filter((x)=>x.id !== value));
  console.log(value);
}
//callback edit function
function handleEdit(value) {
  setItem(item.filter((x)=>x.id !== value.id));
  setNote(value.note); 
  setTitle(value.title);
}



  return (
      <Container maxWidth="sm" >
    <form className={classes.root} validate="true" autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <TextField
          id="standard-multiline-flexible"
          label="Title"
          multiline
          rowsMax={4}
          value={title}
          autoFocus
          required
          onChange={(e)=>setTitle(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="filled-multiline-flexible"
          label="Note"
          fullWidth
          multiline
          rowsMax={4}
          value={note}
          required
          onChange={(e)=>setNote(e.target.value)}
          variant="filled"
        />
      </div>
      
      <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Add Note
          </Button>
    </form>
    <Note list={item} callBack={handleDelete} callBackEdit={handleEdit}  switchValue={toggle}/>
    </Container> 
  );
}

export default MultilineTextFields;