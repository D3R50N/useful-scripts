import model from "../models/$cnameModel.js";

export default {
  async index(req, res) {
    const $names = await model.find();
    return res.json($names);
  },
  async store(req, res) {
    const { body } = req;
    const $name = new model(body);
    try {
      const $name_created = await $name.save();
      return res.json($name_created);
    } catch (error) {
      return res.json({ error: error.message, code: error.code });
    }
  },
  async show(req, res) {
    const { id } = req.params;
    try {
      const $name_found = await model.findById(id);
      return res.json($name_found);
    } catch (error) {
      return res.json({ error: error.message, code: error.code });
    }
  },
  async showAttr(req, res) {
     const { id, attr } = req.params;
     try {
       const $name_found = await model.findById(id);
       return res.json($name_found.toObject()[attr]);
     } catch (error) {
       return res.json({ error: error.message, code: error.code });
     }
  },
  async update(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const $name_found = await model.findById(id);
      const $name_updated = await $name_found.update(body);
      return res.json($name_updated);
    } catch (error) {
      return res.json({ error: error.message, code: error.code });
    }
  },
  async destroy(req, res) {
    const { id } = req.params;
    try {
      await model.findByIdAndDelete(id);
      return res.json({ message: "Deleted" });
    } catch (error) {
      return res.json({ error: error.message, code: error.code });
    }
  },
};
