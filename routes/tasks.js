const express = require('express');
const router = express.Router();
const {
    getAllTasks,
    postTask,
    getTask,
    updateTask,
    deleteTask
} = require('../controllers/tasks')

router.route("/").get(getAllTasks);
router.route("/").post(postTask);
router.route("/:id").get(getTask);
router.route("/:id").patch(updateTask);
router.route("/:id").delete(deleteTask);


module.exports = router;