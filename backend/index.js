const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

app.use(express.json());


app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);

    if (!parsePayload.success) {
        res.status(411).json({
            msg: "you send the wrong inputs"
        });
        return;
    }

    await createTodo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    });
});

app.get("/todos", async function (req, res) {
    const todos = await todo.find();

    res.json({
        todos
    });
});

app._router.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);

    if (!parsePayload.success) {
        res.status(411).json({
            msg: "you send the wrong inputs"
        });
        return;
    }

    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    });

    res.json({
        msg: "Todo marked as completed"
    });
});