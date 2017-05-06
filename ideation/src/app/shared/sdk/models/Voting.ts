/* tslint:disable */
import {
  Idea,
  Customer
} from '../index';

declare var Object: any;
export interface VotingInterface {
  "up"?: boolean;
  "down"?: boolean;
  "id"?: any;
  "ideaId"?: any;
  "createdAt": Date;
  "updatedAt": Date;
  "customerId"?: any;
  idea?: Idea;
  customer?: Customer;
}

export class Voting implements VotingInterface {
  "up": boolean;
  "down": boolean;
  "id": any;
  "ideaId": any;
  "createdAt": Date;
  "updatedAt": Date;
  "customerId": any;
  idea: Idea;
  customer: Customer;
  constructor(data?: VotingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Voting`.
   */
  public static getModelName() {
    return "Voting";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Voting for dynamic purposes.
  **/
  public static factory(data: VotingInterface): Voting{
    return new Voting(data);
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
      name: 'Voting',
      plural: 'Votings',
      properties: {
        "up": {
          name: 'up',
          type: 'boolean'
        },
        "down": {
          name: 'down',
          type: 'boolean'
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
