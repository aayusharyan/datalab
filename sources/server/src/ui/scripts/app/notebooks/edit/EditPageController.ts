/*
 * Copyright 2014 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */


/// <reference path="../../common/Interfaces.ts" />
import constants = require('app/common/Constants');
import app = require('app/App');

console.log('Loading edit controller function');
export class EditPageController {
  /**
   * The ID of the notebook to edit
   */
  notebookId: string;

  /**
   * Constructor and arguments for Angular to inject
   */
  static $inject: string[] = ['$routeParams'];
  constructor (routeParams: ng.route.IRouteParamsService) {
    this.notebookId = routeParams['notebookId'];
    // TODO(bryantd): Add controller logic
  }
}

app.registrar.controller(constants.notebooks.edit.pageControllerName, EditPageController);