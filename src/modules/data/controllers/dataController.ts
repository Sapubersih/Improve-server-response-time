import { Request, Response } from "express";
import { DataService } from "../services/dataService";

const dataService = new DataService();

export const getDataController = async (req: Request, res: Response) => {
  try {
    const data = await dataService.getHeavyData();
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
