import * as express from 'express';
import { UserController } from '../controllers/UserController';
import { request } from 'http';

type Request = express.Request;
type Response = express.Response;

/*  Note:   This class is subject to later abstraction via passing
            {method, path, callee} vectors. Hence the warning 
            below.
*/
export default class {

    public router: express.Router;
    public userController: UserController = new UserController();

    constructor() {
        this.router = express.Router();
        this.config();
    }

    // requests not handled here
    // dispatched to appropriate files

    private config(): void {
        this.router
            // get all users
            // .get('/', this.userController.getProduct)

            // create a new user
            .post('/', this.userController.addNewUser)

            //get all users
            .get('/', this.userController.getUsers)

            // get a specific user
            .get('/:username', this.userController.getUserWithId)

            // update a specific user
            .put('/:id', this.userController.updateUser)

            // update only one field of a specific user
            .patch('/:id', this.userController.partialUpdateUser)

            // delete a specific user
            .delete('/:id', this.userController.deleteUser)
    }

}