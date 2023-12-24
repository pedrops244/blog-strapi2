"use strict";

/**
 *  product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", {
  count(ctx) {
    var { query } = ctx.request;
    return strapi.entityService.count("api::post.post", query);
  },
});
