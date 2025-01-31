const express = require("express");
const router = express.Router();
const {getAllTasks,
    getAllInfo,
    postNewTasks,
    getSingleTask,
    patchTask,
    deleteTask} = require("../controllers/controllerTask")


router.route('/').get(getAllTasks).post(postNewTasks)
router.route("/info").get(getAllInfo)

router.route("/:id").get(getSingleTask).patch(patchTask).delete(deleteTask);



module.exports = router