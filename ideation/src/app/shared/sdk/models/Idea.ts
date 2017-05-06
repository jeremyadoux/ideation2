/* tslint:disable */
import {
  Workflow,
  Comment,
  Voting,
  Customer
} from '../index';

declare var Object: any;
export interface IdeaInterface {
  "title": string;
  "description": string;
  "id"?: any;
  "workflowId"?: any;
  "createdAt": Date;
  "updatedAt": Date;
  "customerId"?: any;
  workflow?: Workflow;
  comments?: Comment[];
  votings?: Voting[];
  customer?: Customer;
}

export class Idea implements IdeaInterface {
  "title": string;
  "description": string;
  "id": any;
  "workflowId": any;
  "createdAt": Date;
  "updatedAt": Date;
  "customerId": any;
  workflow: Workflow;
  comments: Comment[];
  votings: Voting[];
  customer: Customer;
  constructor(data?: IdeaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Idea`.
   */
  public static getModelName() {
    return "Idea";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Idea for dynamic purposes.
  **/
  public static factory(data: IdeaInterface): Idea{
    return new Idea(data);
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
      name: 'Idea',
      plural: 'Ideas',
      properties: {
        "title": {
          name: 'title',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "workflowId": {
          name: 'workflowId',
          type: 'any'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'Date'
        },
        "customerId": {
          name: 'customerId',
          type: 'any'
        },
      },
      relations: {
        workflow: {
          name: 'workflow',
          type: 'Workflow',
          model: 'Workflow'
        },
        comments: {
          name: 'comments',
          type: 'Comment[]',
          model: 'Comment'
        },
        votings: {
          name: 'votings',
          type: 'Voting[]',
          model: 'Voting'
        },
        customer: {
          name: 'customer',
          type: 'Customer',
          model: 'Customer'
        },
      }
    }
  }
}
