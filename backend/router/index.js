import { apiPersonal } from "./personal";
import { apiDepartment } from "./department";

export default function routes (app, db) {
    apiPersonal(app, db);
    apiDepartment(app, db);
}