/* tslint:disable */
import { Injectable } from '@angular/core';
import { Workflow } from '../../models/Workflow';
import { Idea } from '../../models/Idea';
import { Comment } from '../../models/Comment';
import { Voting } from '../../models/Voting';
import { Customer } from '../../models/Customer';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Workflow: Workflow,
    Idea: Idea,
    Comment: Comment,
    Voting: Voting,
    Customer: Customer,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
