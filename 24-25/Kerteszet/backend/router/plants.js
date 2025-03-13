import express from 'express';
import { dbQuery, dbRun } from '../database.js';

const router =express.Router();

router.get("/", async (req,res,next) =>{
    try{
        const plants = await dbQuery("SELECT * FROM plants;");
        res.status(200).json(plants)
    }catch(err){
        next(err);
    }
});

router.post("/", async (req,res,next) =>{
    try{
        const result = await dbRun("INSERT INTO plants (nev, evelo, kategoria, ar) VALUES (?, ?, ?, ?);", [req.body.nev, req.body.evelo, req.body.kategoria, req.body.ar]);
        res.status(201).json({ id: result.lastID });
    }
    catch(err){
        next(err);
    }
});

router.put("/:id", async (req,res,next) =>{
    try{
        await dbRun("UPDATE plants SET nev = ?, evelo = ?, kategoria = ?, ar = ? WHERE id = ?;", [req.body.nev, req.body.evelo, req.body.kategoria, req.body.ar, req.params.id]);
        res.status(200).json({ id: req.params.id });
    }
    catch(err){
        next(err);
    }
});

router.delete("/:id", async (req,res,next) =>{
    try{
        await dbRun("DELETE FROM plants WHERE id = ?;", [req.params.id]);
        res.status(200).json({ id: req.params.id });
    }
    catch(err){
        next(err);
    }
});
