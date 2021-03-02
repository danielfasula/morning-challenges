import express from "express";
import BaseController from "../utils/BaseController";
import { FAKEDB } from "../db/FAKEDB";
import { catsService } from "../services/CatsService";


export class CatsController extends BaseController {
    constructor() {
        super('api/cats')
        this.router
            .get('', this.getAll)
    }

    async getAll(req, res, next) {
        try {
            const cats = catsService.getAll()
            res.send(cats)
        } catch (error) {
            next(error)
        }
    }
}