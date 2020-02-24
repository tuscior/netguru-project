class CRUD {
  constructor(model) {
    this.model = model;
  }

  async create(doc) {
    // eslint-disable-next-line new-cap
    const newDoc = new this.model(doc);
    await newDoc.save();
    return newDoc;
  }

  // this function doesnt belong here, move it to different class
  async getAll() {
    const res = await this.model.find({});
    return res;
  }

  async getOne(lookup) {
    const res = await this.model.findOne(lookup);
    return res;
  }
  update() {}
  remove() {}
}

module.exports = CRUD;
