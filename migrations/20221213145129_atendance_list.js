/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("atendance_list", function (table) {
    table.increments();
    table.integer("nas");
    table.string("name");
    table.enu("status", ["in", "out"]);
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("atendance_list");
};
