import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { commentsOperations, commentsSelectors } from '../../redux/comments';
import Spinner from '../Spinner/Spinner';
import s from './CommentsList.module.css';

const CommentList = () => {
  const comments = useSelector(commentsSelectors.getComments);
  const loading = useSelector(commentsSelectors.getLoading);
  const error = useSelector(commentsSelectors.getError);
  const dispatch = useDispatch();

  useEffect(() => dispatch(commentsOperations.fetchComments()), [dispatch]);

  return (
    <>
      {comments.length > 0 && (
        <ul className={s.list}>
          {comments.map(({ _id, name, comment }) => (
            <li key={_id} className={s.comment}>
              {name}: {comment}
            </li>
          ))}
        </ul>
      )}
      {loading && <Spinner />}
      <div>{error && <h1>{error.message}</h1>}</div>
    </>
  );
};

export default CommentList;
