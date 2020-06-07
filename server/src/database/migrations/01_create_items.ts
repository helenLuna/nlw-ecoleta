import Knex from "knex";

export async function up(knex: Knex) { // irá servir para realizar as alterações necessárias no banco
    // CRIAR A TABELA
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();

    });

}

export async function down(knex: Knex) { // irá fazer sempre o contrario do que foi feito no up
    // VOLTAR ATRAS (DELETAR A TABELA)

   return knex.schema.dropTable('items');
}