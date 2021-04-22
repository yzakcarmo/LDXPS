"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CostumerSchema extends Schema {
  up() {
    this.create("costumers", (table) => {
      table
        .string("cdcl", 36)
        .notNullable()
        .primary()
        .comment("Código do Cliente"),
        table.string("dsnome", 50).notNullable().comment("Nome do Cliente"),
        table
          .string("idtipo", 2)
          .notNullable()
          .defaultTo("PF")
          .comment("Tipo de cliente: PF - Pessoa Fisica; PJ - Pessoa Juridica"),
        table
          .string("cdvend", 36)
          .references("cdvend")
          .inTable("sellers")
          .comment("Código do Vendedor"),
        table
          .decimal("dslim", 15, 2)
          .notNullable()
          .comment("Limite de Crédito"),
        table.timestamps();
    });
  }

  down() {
    this.drop("costumers");
  }
}

module.exports = CostumerSchema;
