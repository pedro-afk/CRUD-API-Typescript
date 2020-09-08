import { Request, Response } from 'express';
import knex from '../database/connection';

interface Projects{
    user:number
}

class ProjectController {
    async del(req: Request, res: Response){
        const { id } = req.params;
        try {
            await knex('projects')
                .where('id', id)
                .del()
            
            return res.status(200).json({message:"Post deletado!"});
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async update(req:Request, res:Response){
        const { id } = req.params;
        const {
            projectName, 
            projectDesc,             
            projectTechs 
        } = req.body;
        
        try {
            await knex('projects')
                .where('id', id)
                .update({
                    projectName, 
                    projectDesc,
                    projectTechs 
                });

            return res.status(200).json({
                projectName, 
                projectDesc,
                projectTechs 
            });
        } catch (error) {
            return res.status(401);
        }
    }

    async index(req:Request, res:Response){
        try {
            const projects = await knex('projects')
            .select('*');

            //.join('users', 'projects.user', '=', 'users.id')
            //query pra trazer os usuarios relacionados com os projetos
            
            return res.status(200).json(projects);  
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async create(req:Request, res:Response){
        const { id } = req.params;
        const { projectName, 
                projectTechs, 
                projectDesc 
            } = req.body;
        
        const user = await knex('users')
            .where('id', id)
            .first();
        
        if(!user){
            return res.status(400).json({ error: "Usuário não encontrado!" });
        }

        try {
            await knex('projects').insert({
                projectName,
                projectTechs,
                projectDesc,
                user: id
            }); 
            
           return res.status(201).json({
                projectName,
                projectTechs,
                projectDesc,
           });
        } catch (error) {
            return res.status(400).json(error);
        }

    }
}

export default ProjectController;