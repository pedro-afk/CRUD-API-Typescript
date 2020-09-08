import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('projects', table => {
        table.increments('id').primary();
        table.integer('user')
            .notNullable()
            .references('id')
            .inTable('users');
        
        table.string('projectName').notNullable();
        table.string('projectDesc').notNullable();
        table.string('projectTechs').notNullable();

        table
            .timestamp('created_at')
            .defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('projects');
}