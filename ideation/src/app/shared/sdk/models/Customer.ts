/* tslint:disable */
import {
  Comment,
  Idea,
  Voting
} from '../index';

declare var Object: any;
export interface CustomerInterface {
  "realm"?: string;
  "username"?: string;
  "password": string;
  "email": string;
  "emailVerified"?: boolean;
  "verificationToken"?: string;
  "id"?: any;
  "createdAt": Date;
  "updatedAt": Date;
  accessTokens?: any[];
  comments?: Comment[];
  ideas?: Idea[];
  votings?: Voting[];
}

export class Customer implements CustomerInterface {
  "realm": string;
  "username": string;
  "password": string;
  "email": string;
  "emailVerified": boolean;
  "verificationToken": string;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  accessTokens: any[];
  comments: Comment[];
  ideas: Idea[];
  votings: Voting[];
  constructor(data?: CustomerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Customer`.
   */
  public static getModelName() {
    return "Customer";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Customer for dynamic purposes.
  **/
  public static factory(data: CustomerInterface): Customer{
    return new Customer(data);
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
      name: 'Customer',
      plural: 'Customers',
      properties: {
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "verificationToken": {
          name: 'verificationToken',
          type: 'string'
        },
        "id": {
          name: 'id',
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
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: ''
        },
        comments: {
          name: 'comments',
          type: 'Comment[]',
          model: 'Comment'
        },
        ideas: {
          name: 'ideas',
          type: 'Idea[]',
          model: 'Idea'
        },
        votings: {
          name: 'votings',
          type: 'Voting[]',
          model: 'Voting'
        },
      }
    }
  }
}
