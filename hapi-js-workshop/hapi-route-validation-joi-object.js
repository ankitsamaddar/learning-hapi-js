const Hapi = require("@hapi/hapi");
const Joi = require("joi");

(async () => {
  try {
    const server = Hapi.Server({
      host: "localhost",
      port: Number(process.argv[2] || 8080),
    });

    server.route({
      method: "POST",
      path: "/login",
      config: {
      handler: (request, h) => "login successful",
      validate: {
          payload: Joi.object({
            isGuest: Joi.boolean().required(),
            username: Joi.string().when("isGuest", {
              is: false,
              then: Joi.required(),
            }),
            password: Joi.string().alphanum(),
            accessToken: Joi.string().alphanum(),
          })
            .options({ allowUnknown: true }),
            // .without("password", "accessToken"),
            failAction: (request, h, error) => {
              return error.isJoi
                ? h.response(error.details[0]).takeover()
                : h.response(error).takeover();
            },
        },
      },
    });

    await server.start();
    console.log("Server running at:", server.info.uri);
  } catch (error) {
    console.log(error);
  }
})();
