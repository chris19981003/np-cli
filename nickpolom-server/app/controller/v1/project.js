const { Controller } = require('egg');

class ProjectController extends Controller {
  // 全部项目模板
  async index() {
    const { ctx } = this;
    const res = await ctx.model.Project.find({});
    ctx.body = res;
  }

  // 项目模板查询
  async show() {
    const { ctx } = this;
    const id = ctx.params.id;
    const res = await ctx.model.Project.find({ value: id });

    if (res.length > 0) {
      ctx.body = res[0];
    } else {
      ctx.body = '{}';
    }
  }

  // 项目模板更新
  create() {
    console.log(this.ctx.request.body);
  }

  update() {}

  destroy() {}
}

module.exports = ProjectController;
