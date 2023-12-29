"use strict";
const axios = require("axios");

/**
 *  product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", {
  lifecycles: {
    async afterCreate(result, data) {
      axios.post(
        "https://api.vercel.com/v1/integrations/deploy/prj_kKGyjYCxsZ4jUbhkDMEWZUTYhlGZ/YphG1viGPJ"
      );
    },

    async afterUpdate(result, params, data) {
      axios.post(
        "https://api.vercel.com/v1/integrations/deploy/prj_kKGyjYCxsZ4jUbhkDMEWZUTYhlGZ/YphG1viGPJ"
      );
    },
  },
  count(ctx) {
    var { query } = ctx.request;
    return strapi.entityService.count("api::post.post", query);
  },
});
