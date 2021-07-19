import classes from './TaskItem.module.css';

const TaskItem = props => <li className={classes.task}><small>{props.date} </small>{props.children}</li>

export default TaskItem;
