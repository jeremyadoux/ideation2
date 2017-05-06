/* tslint:disable */
import {
  Idea,
  Customer
} from '../index';

declare var Object: any;
export interface CommentInterface {
  "title"?: string;
  "description": string;
  "id"?: any;
  "ideaId"?: any;
  "createdAt": Date;
  "updatedAt": Date;
  "customerId"?: any;
  idea?: Idea;
  customer?: Customer;
}

export class Comment implements CommentInterface {
  "title": string;
  "description": string;
  "id": any;
  "ideaId": any;
  "createdAt": Date;
  "updatedAt": Date;
  "customerId": any;
  idea: Idea;
  customer: Customer;
  constructor(data?: CommentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Comment`.
   */
  public static getModelName() {
    return "Comment";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Comment for dynamic purposes.
  **/
  public static factory(data: CommentInterface): Comment{
    return new Comment(data);
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
      name: 'Comment',
      plural: 'Comments',
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
        "ideaId": {
          name: 'ideaId',
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
        idea: {
          name: 'idea',
          type: 'Idea',
          model: 'Idea'
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
