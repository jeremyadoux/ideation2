/* tslint:disable */
import {
  Idea
} from '../index';

declare var Object: any;
export interface WorkflowInterface {
  "name": string;
  "options"?: any;
  "id"?: any;
  ideas?: Idea[];
}

export class Workflow implements WorkflowInterface {
  "name": string;
  "options": any;
  "id": any;
  ideas: Idea[];
  constructor(data?: WorkflowInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Workflow`.
   */
  public static getModelName() {
    return "Workflow";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Workflow for dynamic purposes.
  **/
  public static factory(data: WorkflowInterface): Workflow{
    return new Workflow(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Workflow',
      plural: 'Workflows',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "options": {
          name: 'options',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        ideas: {
          name: 'ideas',
          type: 'Idea[]',
          model: 'Idea'
        },
      }
    }
  }
}
