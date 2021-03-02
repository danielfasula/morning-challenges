import { FAKEDB } from "../db/FAKEDB";


class CatsService {

    getAll() {
        return FAKEDB.cats
    }
}

export const catsService = new CatsService();