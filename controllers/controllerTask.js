const Task = require("../models/taskModel");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks =asyncWrapper (async (req, res) => {
  
    const tasks = await Task.find({});
    res.status(200).json({ tasks: tasks });
    // res.status(200).json({ tasks,amount:tasks.length });
    // res.status(200).
    // json({ status : 'success', data: {tasks,nbHits: tasks.length} });
   
});
const getAllInfo = (req, res) => {
  res.send("All Items information");
};
const postNewTasks =asyncWrapper (async (req, res) => {
  
    const task = await Task.create(req.body);
    res.status(200).json({ task });
  
});
const getSingleTask =asyncWrapper (async (req, res,next) => {
  
    const { id: taskID } = req.params;
    const task = await Task.findOne({
      _id: taskID,
    });
    if (!task) {
      return next(createCustomError(`No task with id : ${taskID}`,404 )) 
    }
    res.status(200).json({ task });
 
});

const deleteTask =asyncWrapper (async (req, res) => {
  
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
      return next(createCustomError(`No task with id : ${taskID}`,404 )) 
    }
    res.status(200).json({ task });
    //res.status(200).send()
    //res.status(200).json({task:null, status : 'success'})
  
});

const patchTask =asyncWrapper (async (req, res) => {
  
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate(
      {
        _id: taskID,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!task) {
      return next(createCustomError(`No task with id : ${taskID}`,404 )) 
    }
    res.status(200).json({task})
  
});

module.exports = {
  getAllTasks,
  getAllInfo,
  postNewTasks,
  getSingleTask,
  patchTask,
  deleteTask,
};
