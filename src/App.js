import React from 'react';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

const App = () => {
    const [tasks, setTasks] = React.useState([]);

    const { isLoading, error, sendRequest: fetchTasks } = useHttp();
    React.useEffect(() => {
        const transformTasks = tasksObj => {
            const loadedTasks = [];
            for (const taskKey in tasksObj)
                loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
            setTasks(loadedTasks);
        };
        fetchTasks(
            { url: 'https://section-15-35028-default-rtdb.firebaseio.com/tasks.json' },
            transformTasks
        );
    }, [fetchTasks]);
    const taskAddHandler = task => setTasks(prevTasks => prevTasks.concat(task));

    return <React.Fragment>
        <NewTask onAddTask={taskAddHandler} />
        <Tasks items={tasks} loading={isLoading} error={error} onFetch={fetchTasks}/>
    </React.Fragment>
};

export default App;
