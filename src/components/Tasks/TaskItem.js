import classes from './TaskItem.module.css';

const TaskItem = props => <li className={classes.task}>{props.children}</li>

export default TaskItem;
