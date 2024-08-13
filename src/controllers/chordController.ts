import { Request, Response } from "express";
const chordsModel = require("../model/chordModel");

const chordsController = {
  select: async (req: Request, res: Response) => {
    try {
      const results = await chordsModel.selectAll();
      res.status(200);
      res.json(results);
    } catch {
      res.status(500);
    }
  },
  selectById: async (req: Request, res: Response) => {
    try {
      const id: number = Number(req.params.id);
      const results = await chordsModel.selectByID(id);
      res.status(200);
      res.json(results);
    } catch {
      res.status(500);
    }
  },
};

export default chordsController;
