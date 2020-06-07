import Knex from "knex";

export async function up(knex: Knex) { // irá servir para realizar as alterações necessárias no banco
    // CRIAR A TABELA
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();

    });

}

export async function down(knex: Knex) { // irá fazer sempre o contrario do que foi feito no up
    // VOLTAR ATRAS (DELETAR A TABELA)

   return knex.schema.dropTable('points');
}