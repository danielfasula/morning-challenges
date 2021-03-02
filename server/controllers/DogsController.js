import express from "express";
import BaseController from "../utils/BaseController";
import { FAKEDB } from "../db/FAKEDB";
import { dogsService } from '../services/DogsService';

export class DogsController extends BaseController {
    constructor() {
        super('api/dogs')
        this.router
            .get('', this.getAll)
    }

    async getAll(req, res, next) {
        try {
            const dogs = dogsService.getAll()
            res.send(dogs)
        } catch (error) {
            next(error)
        }
    }
}