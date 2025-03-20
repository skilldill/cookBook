import { SomeModel } from "./SomeModel";

export function initSomeController(api) {
    api.get("/some", async (req, res) => {
        try {
            const someData = await SomeModel.find({ userKey: req.userKey });
            res.json(someData);
        } catch (error) {
            res.status(500).json({ error: "Error for fetch some data" });
        }
    });

    api.post("/some", async (req, res) => {
        try {
            const someData = new SomeModel({ ...req.body, userKey: req.userKey });
            await someData.save();
            res.status(201).json(someData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
}
