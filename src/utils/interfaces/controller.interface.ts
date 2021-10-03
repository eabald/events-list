// External
import { Router } from 'express';

/**
 * Interface with all necessary fields to form application controller.
 * @author Maciej Krawczyk
 * @interface Controller
 */
interface Controller {
  path: string;
  router: Router;
}

export default Controller;
