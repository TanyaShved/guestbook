import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { commentsOperations } from '../../redux/comments';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiTextField-root': {
      width: '25ch',
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 15,
    },
  },
}));

const GuestBook = ({ toggleModal }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const classes = useStyles();

  const dispatch = useDispatch();

  const handeleSubmit = e => {
    e.preventDefault();

    dispatch(commentsOperations.addComment({ name, comment }));
    setName('');
    setComment('');
    toggleModal();
  };

  return (
    <div>
      <form onSubmit={handeleSubmit} className={classes.root}>
        <TextField
          id="name"
          label="name"
          value={name}
          name="name"
          onChange={e => setName(e.currentTarget.value)}
          variant="outlined"
          color="secondary"
        />

        <TextField
          id="text"
          label="comment"
          value={comment}
          name="comment"
          onChange={e => setComment(e.currentTarget.value)}
          variant="outlined"
          color="secondary"
        />
        <Button type="submit" variant="contained" color="secondary">
          Add comment
        </Button>
      </form>
    </div>
  );
};

export default GuestBook;
