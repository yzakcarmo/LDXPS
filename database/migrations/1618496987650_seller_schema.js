"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SellerSchema extends Schema {
  up() {
    this.create("sellers", (table) => {
      table
        .string("cdvend", 36)
        .notNullable()
        .primary()
        .comment("Código do Vendedor");
      table.string("dsnome", 50).notNullable().comment("Nome do Vendedor");
      table
        .integer("cdtab")
        .notNullable()
        .comment("Código da tabela de preços");
      table.date("dtnasc").comment("Data de nascimento");
      table.timestamps();
    });
  }

  down() {
    this.drop("sellers");
  }
}

module.exports = SellerSchema;
