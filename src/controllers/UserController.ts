import { Request, Response } from 'express';
import knex from '../database/connection';

class UserController {
    async update(req: Request, res: Response){
        const { name, email } = req.body;
        const { id } = req.params;
        
        try {
            await knex('users')
                .where('id', id)
                .update({
                    name,
                    email
                });

            return res.status(200).json({
                name,
                email
            });
        } catch (error) {
            return res.status(400).json(error);
        }

    }

    async index(req: Request, res:Response){
        try {
            const users = await knex('users')
                .select('*');
            return res.status(200).json(users);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async create(req: Request, res:Response){
        const { name, email } = req.body;

        try {
            await knex('users').insert({
                name,
                email                
            });

            return res.status(200).json({
                name,
                email    
            });

        } catch (error) {
            return res.status(400).json(error);
        }


    }
}

export default UserController;