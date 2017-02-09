import {Injectable} from '@angular/core';

@Injectable()
export class MappingService{
    constructor(){}

    //duplicate typings
    //use exclude property in typings.config
    private extractUsersFromResult(object:any){
        return Array.from(object.values);
    }
    getOperationalMapImage(){
        return 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Gis.jpg';
    }
    getOperationalMaps(){
        var thing = 
{"start":50,"limit":50,"length":32,"total":82,"values":[{"id":"auth0|56e10439384510786b16f1b2","email":"f9c9255e-da42-412e-bbf7-1988ea72fe06@apikey.arcfmsolution.com","groups":["HostedWorkflow"],"roles":[],"alias":"ApiKey for hosted workflow: GasValveInspectionWFOneConditionAuth0ApiKey","username":null,"picture":"https://s.gravatar.com/avatar/38e2e8dff4f90aeea29d4b1852b2bc5d?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Ff9.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56e10439384510786b16f1b2","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56e10439384510786b16f1b2","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56e10439384510786b16f1b2","verb":"Delete"}],"updated_at":"2016-03-10T05:20:57.844Z","created_at":"2016-03-10T05:20:57.844Z"},{"id":"auth0|570fbd7e2c778e8035d33249","email":"6b29d362-9ca5-407f-bcb1-22183e9f24f9@apikey.arcfmsolution.com","groups":["HostedWorkflow"],"roles":[],"alias":"ApiKey for hosted workflow: DesignFollowUp","username":"6b29d362-9ca5-407f-bcb1-22183e9f24f9@apikey.arcfmsolution.com","picture":"https://s.gravatar.com/avatar/5150c58a23a43df4d5c793c0f75bf878?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2F6b.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C570fbd7e2c778e8035d33249","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C570fbd7e2c778e8035d33249","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C570fbd7e2c778e8035d33249","verb":"Delete"}],"nickname":"6b29d362-9ca5-407f-bcb1-22183e9f24f9","updated_at":"2016-04-14T15:57:00.887Z","created_at":"2016-04-14T15:55:42.139Z","last_ip":"40.114.13.33","last_login":"2016-04-14T15:57:00.886Z","logins_count":6},{"id":"auth0|56e104edda713a9a5c3e2500","email":"e1cf5996-9169-4833-be1d-6b1960aee825@apikey.arcfmsolution.com","groups":["HostedWorkflow"],"roles":[],"alias":"ApiKey for hosted workflow: GasValveInspectionWFOneConditionAuth0ApiKey","username":"e1cf5996-9169-4833-be1d-6b1960aee825@apikey.arcfmsolution.com","picture":"https://s.gravatar.com/avatar/20e8f4def80b1ef46f58527c98ff3e8d?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fe1.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56e104edda713a9a5c3e2500","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56e104edda713a9a5c3e2500","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56e104edda713a9a5c3e2500","verb":"Delete"}],"nickname":"e1cf5996-9169-4833-be1d-6b1960aee825","updated_at":"2016-03-10T23:18:32.019Z","created_at":"2016-03-10T05:23:57.377Z","last_login":"2016-03-10T23:18:32.019Z","logins_count":4},{"id":"auth0|56cf72588e564dda29f6d1a8","email":"acab989a-cbff-4162-acbf-30103b70441c@apikey.arcfmsolution.com","groups":["HostedWorkflow"],"roles":[],"alias":"ApiKey for hosted workflow: PoleInspectionFollowUpMS","username":"acab989a-cbff-4162-acbf-30103b70441c@apikey.arcfmsolution.com","picture":"https://s.gravatar.com/avatar/10b9aa040951059f7daa91c0f74f1e69?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fac.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56cf72588e564dda29f6d1a8","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56cf72588e564dda29f6d1a8","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56cf72588e564dda29f6d1a8","verb":"Delete"}],"nickname":"acab989a-cbff-4162-acbf-30103b70441c","updated_at":"2016-02-25T21:31:43.499Z","created_at":"2016-02-25T21:30:00.522Z","last_login":"2016-02-25T21:31:43.498Z","logins_count":6},{"id":"auth0|56cf6f2f9a1fc6826fa2537c","email":"2f0514e0-f8a0-427a-9a03-b0ef9693c5ab@apikey.arcfmsolution.com","groups":["HostedWorkflow"],"roles":[],"alias":"ApiKey for hosted workflow: FollowUpOnPoleInspection","username":"2f0514e0-f8a0-427a-9a03-b0ef9693c5ab@apikey.arcfmsolution.com","picture":"https://s.gravatar.com/avatar/e6ba275fc7a962e4109ef2fae64221c3?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2F2f.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56cf6f2f9a1fc6826fa2537c","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56cf6f2f9a1fc6826fa2537c","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56cf6f2f9a1fc6826fa2537c","verb":"Delete"}],"nickname":"2f0514e0-f8a0-427a-9a03-b0ef9693c5ab","updated_at":"2016-02-25T21:24:10.58Z","created_at":"2016-02-25T21:16:31.986Z","last_login":"2016-02-25T21:24:10.58Z","logins_count":18},{"id":"auth0|56cf1d6d8e564dda29f6ae46","email":"813a551b-4baf-4442-bf5e-292e2f3586d0@apikey.arcfmsolution.com","groups":["HostedWorkflow"],"roles":[],"alias":"ApiKey for hosted workflow: Kevin2","username":"813a551b-4baf-4442-bf5e-292e2f3586d0@apikey.arcfmsolution.com","picture":"https://s.gravatar.com/avatar/e49ec3a17159e10d51841dc06c056ace?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2F81.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56cf1d6d8e564dda29f6ae46","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56cf1d6d8e564dda29f6ae46","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56cf1d6d8e564dda29f6ae46","verb":"Delete"}],"nickname":"813a551b-4baf-4442-bf5e-292e2f3586d0","updated_at":"2016-02-25T15:30:27.305Z","created_at":"2016-02-25T15:27:41.91Z","last_login":"2016-02-25T15:30:27.304Z","logins_count":6},{"id":"auth0|56cecd8a9a1fc6826fa2208c","email":"1a74b892-7e9e-4314-9d38-239c41fc7067@apikey.arcfmsolution.com","groups":["HostedWorkflow"],"roles":[],"alias":"ApiKey for hosted workflow: Kevin1","username":"1a74b892-7e9e-4314-9d38-239c41fc7067@apikey.arcfmsolution.com","picture":"https://s.gravatar.com/avatar/2ad4d8e4421f796a26092d1ec93b68f7?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2F1a.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56cecd8a9a1fc6826fa2208c","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56cecd8a9a1fc6826fa2208c","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56cecd8a9a1fc6826fa2208c","verb":"Delete"}],"nickname":"1a74b892-7e9e-4314-9d38-239c41fc7067","updated_at":"2016-02-25T09:54:43.988Z","created_at":"2016-02-25T09:46:50.768Z","last_login":"2016-02-25T09:54:43.988Z","logins_count":3},{"id":"auth0|56c4e0e36f50e7772b4b6cf8","email":"390c186c-d737-4d13-98e2-afebc508426f@apikey.arcfmsolution.com","groups":["HostedWorkflow"],"roles":[],"alias":"ApiKey for hosted workflow: test","username":"390c186c-d737-4d13-98e2-afebc508426f@apikey.arcfmsolution.com","picture":"https://s.gravatar.com/avatar/5ab5a054d20675738a61e6a1d54d01ee?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2F39.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56c4e0e36f50e7772b4b6cf8","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56c4e0e36f50e7772b4b6cf8","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56c4e0e36f50e7772b4b6cf8","verb":"Delete"}],"nickname":"390c186c-d737-4d13-98e2-afebc508426f","updated_at":"2016-02-22T21:06:48.586Z","created_at":"2016-02-17T21:06:43.482Z","last_login":"2016-02-22T21:06:48.586Z","logins_count":2},{"id":"auth0|567119f84443b03417276cfe","email":"a78d9db3-9df9-4f55-ac0e-0034046d9f8d@apikey.arcfmsolution.com","groups":["SE.Geospatial.Mobile.Sync.User"],"roles":[],"alias":"MobileSync User","username":"a78d9db3-9df9-4f55-ac0e-0034046d9f8d@apikey.arcfmsolution.com","picture":"https://s.gravatar.com/avatar/4234fae08202f6285bc8d4d261ce4c88?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fa7.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C567119f84443b03417276cfe","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C567119f84443b03417276cfe","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C567119f84443b03417276cfe","verb":"Delete"}],"nickname":"a78d9db3-9df9-4f55-ac0e-0034046d9f8d","updated_at":"2016-01-29T17:03:39.899Z","created_at":"2015-12-16T07:59:52.096Z","last_ip":"159.215.35.1","last_login":"2016-01-29T17:03:39.899Z","logins_count":494},{"id":"auth0|56a9c6a8299756682a9774fc","email":"067993b0-b342-446b-8804-a8da12f17284@apikey.arcfmsolution.com","groups":["Admin"],"roles":[],"alias":"Inspector Sync Test ApiKey","username":"067993b0-b342-446b-8804-a8da12f17284@apikey.arcfmsolution.com","picture":"https://s.gravatar.com/avatar/0c00b2e77d5d087e90b513d56e63b4d1?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2F06.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56a9c6a8299756682a9774fc","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56a9c6a8299756682a9774fc","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56a9c6a8299756682a9774fc","verb":"Delete"}],"nickname":"067993b0-b342-446b-8804-a8da12f17284","updated_at":"2016-01-28T07:51:51.055Z","created_at":"2016-01-28T07:43:36.584Z","last_ip":"70.91.171.225","last_login":"2016-01-28T07:51:51.055Z","logins_count":3},{"id":"auth0|5695613a9a98ba0a6bfd4fc1","email":"e724c576-8576-4db0-b3f8-e9cd100fe555@apikey.arcfmsolution.com","groups":["Admin"],"roles":[],"alias":"TaskService SDK Upgrade Test User","username":"e724c576-8576-4db0-b3f8-e9cd100fe555@apikey.arcfmsolution.com","picture":"https://s.gravatar.com/avatar/da2311446d43289eecbc6812a547e67f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fe7.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C5695613a9a98ba0a6bfd4fc1","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C5695613a9a98ba0a6bfd4fc1","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C5695613a9a98ba0a6bfd4fc1","verb":"Delete"}],"nickname":"e724c576-8576-4db0-b3f8-e9cd100fe555","updated_at":"2016-01-18T20:06:43.132Z","created_at":"2016-01-12T20:25:30.46Z","last_ip":"70.91.171.225","last_login":"2016-01-18T20:06:43.132Z","logins_count":28},{"id":"auth0|56c20df7a69809477ed15e32","email":"2eef0e05-9356-4273-b62a-1c5f1e634c28@apikey.arcfmsolution.com","groups":["HostedWorkflow"],"roles":[],"alias":"ApiKey for hosted workflow: test","username":null,"picture":"https://s.gravatar.com/avatar/6c54ef1b776a28d94f0fddcfeff10cec?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2F2e.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56c20df7a69809477ed15e32","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56c20df7a69809477ed15e32","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56c20df7a69809477ed15e32","verb":"Delete"}],"updated_at":"2016-02-15T17:42:15.121Z","created_at":"2016-02-15T17:42:15.121Z"},{"id":"auth0|56ccf2592df3a5c064ee1513","email":"84383a33-9927-4660-ae1e-5de9a51a40cc@apikey.arcfmsolution.com","groups":["HostedWorkflow"],"roles":[],"alias":"ApiKey for hosted workflow: FollowUpOnPoleInspection","username":null,"picture":"https://s.gravatar.com/avatar/0872fbac20a1455962d20b6013cb4616?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2F84.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56ccf2592df3a5c064ee1513","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56ccf2592df3a5c064ee1513","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56ccf2592df3a5c064ee1513","verb":"Delete"}],"updated_at":"2016-02-23T23:59:21.576Z","created_at":"2016-02-23T23:59:21.576Z"},{"id":"auth0|56ccf2062bdf1c3d419f6b10","email":"946d3c5c-9481-4781-9986-58893940709e@apikey.arcfmsolution.com","groups":["HostedWorkflow"],"roles":[],"alias":"ApiKey for hosted workflow: FollowUpOnPoleCondition","username":null,"picture":"https://s.gravatar.com/avatar/94e1d093065e7c0a89d6142f26338296?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2F94.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56ccf2062bdf1c3d419f6b10","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56ccf2062bdf1c3d419f6b10","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56ccf2062bdf1c3d419f6b10","verb":"Delete"}],"updated_at":"2016-09-16T06:59:24.994Z","created_at":"2016-02-23T23:57:58.225Z"},{"id":"auth0|56ccfe8b9a1fc6826fa1b875","email":"19c91612-642f-4615-a175-bb11f51bf431@apikey.arcfmsolution.com","groups":["HostedWorkflow"],"roles":[],"alias":"ApiKey for hosted workflow: test1","username":null,"picture":"https://s.gravatar.com/avatar/8d146b7377af42574e994d693bf8896f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2F19.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56ccfe8b9a1fc6826fa1b875","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56ccfe8b9a1fc6826fa1b875","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56ccfe8b9a1fc6826fa1b875","verb":"Delete"}],"updated_at":"2016-02-24T00:51:23.459Z","created_at":"2016-02-24T00:51:23.459Z"},{"id":"auth0|56cf71b28e564dda29f6d168","email":"6a846d11-cbd6-4cf4-991d-1ee077ade688@apikey.arcfmsolution.com","groups":["HostedWorkflow"],"roles":[],"alias":"ApiKey for hosted workflow: FollowUpInspectionMicrosoft","username":null,"picture":"https://s.gravatar.com/avatar/0dcf8aa372343b62498b46f60e6e1f5c?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2F6a.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56cf71b28e564dda29f6d168","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56cf71b28e564dda29f6d168","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56cf71b28e564dda29f6d168","verb":"Delete"}],"updated_at":"2016-02-25T21:27:14.835Z","created_at":"2016-02-25T21:27:14.835Z"},{"id":"auth0|5679876b008caac650a5279e","email":"james@apikey.com","groups":["SE.Geospatial.Mobile.Sync.User","Viewer"],"roles":[],"alias":"Mobile Synce User download test","username":"james@apikey.com","picture":"https://s.gravatar.com/avatar/db7330eae8fe3545febfb7f9c7a95678?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fja.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C5679876b008caac650a5279e","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C5679876b008caac650a5279e","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C5679876b008caac650a5279e","verb":"Delete"}],"nickname":"james","updated_at":"2016-04-12T22:02:52.566Z","created_at":"2015-12-22T17:24:59.675Z","last_password_reset":"2016-04-06T19:39:30.294Z","last_ip":"70.181.129.65","last_login":"2016-04-12T22:02:52.566Z","logins_count":148},{"id":"auth0|57041b342eeba0345b961871","email":"c39abc25-8419-4c50-a9f8-175cf7ef436b@apikey.arcfmsolution.com","groups":["HostedWorkflow"],"roles":[],"alias":"ApiKey for hosted workflow: BYFMOB2496a","username":null,"picture":"https://s.gravatar.com/avatar/34595482aff98744cc9375a4495b781a?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fc3.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C57041b342eeba0345b961871","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C57041b342eeba0345b961871","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C57041b342eeba0345b961871","verb":"Delete"}],"updated_at":"2016-04-05T20:08:20.821Z","created_at":"2016-04-05T20:08:20.821Z"},{"id":"auth0|5704122b20d7dcfe47b2a0c5","email":"6227cda1-6773-419c-a4f8-88d8ba6f170a@apikey.arcfmsolution.com","groups":["HostedWorkflow"],"roles":[],"alias":"ApiKey for hosted workflow: MOB2496","username":null,"picture":"https://s.gravatar.com/avatar/0ad2d9537b7f3f9e65c198e1046ab4ad?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2F62.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C5704122b20d7dcfe47b2a0c5","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C5704122b20d7dcfe47b2a0c5","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C5704122b20d7dcfe47b2a0c5","verb":"Delete"}],"updated_at":"2016-04-05T19:29:47.752Z","created_at":"2016-04-05T19:29:47.752Z"},{"id":"auth0|56cdcba61c4c7f2e2fb218ee","email":"5664bd42-aa40-40db-acab-259bc5eedbd5@apikey.arcfmsolution.com","groups":["HostedWorkflow"],"roles":[],"alias":"ApiKey for hosted workflow: kevin","username":null,"picture":"https://s.gravatar.com/avatar/6d212bc90b8556e72633eb04ca7ef53b?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2F56.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56cdcba61c4c7f2e2fb218ee","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56cdcba61c4c7f2e2fb218ee","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56cdcba61c4c7f2e2fb218ee","verb":"Delete"}],"updated_at":"2016-02-24T15:26:30.388Z","created_at":"2016-02-24T15:26:30.388Z"},{"id":"auth0|58093f864c18e801188c3172","email":"07fcf0f8-12ce-4c83-9464-2cc3fb480c4b@apikey.arcfmsolution.com","groups":["Redlining.User"],"roles":[],"alias":"ApiKey for Redlining User","username":null,"picture":"https://s.gravatar.com/avatar/0e7847f4644ce3e69e7a1d498033ef66?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2F07.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C58093f864c18e801188c3172","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C58093f864c18e801188c3172","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C58093f864c18e801188c3172","verb":"Delete"}],"updated_at":"2016-10-20T22:04:54.773Z","created_at":"2016-10-20T22:04:54.773Z"},{"id":"auth0|56cecc8a2bdf1c3d419fd368","email":"f020ea6b-0db4-4f5f-96e9-efed9bfdf57b@apikey.arcfmsolution.com","groups":["HostedWorkflow"],"roles":[],"alias":"ApiKey for hosted workflow: kevin2","username":null,"picture":"https://s.gravatar.com/avatar/bfc16c627c19123999bd8870cf430bd9?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Ff0.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56cecc8a2bdf1c3d419fd368","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56cecc8a2bdf1c3d419fd368","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56cecc8a2bdf1c3d419fd368","verb":"Delete"}],"updated_at":"2016-02-25T09:42:34.665Z","created_at":"2016-02-25T09:42:34.665Z"},{"id":"auth0|5808f0ba5a0ea98a618599a4","email":"5bab540d-0e17-498a-bcd4-2e96a25ca386@apikey.arcfmsolution.com","groups":["Redlining.User"],"roles":[],"alias":"ApiKey for Redlining User","username":null,"picture":"https://s.gravatar.com/avatar/532ea5cb4eaf20ba4134b388a6b6574f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2F5b.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C5808f0ba5a0ea98a618599a4","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C5808f0ba5a0ea98a618599a4","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C5808f0ba5a0ea98a618599a4","verb":"Delete"}],"updated_at":"2016-10-20T16:28:42.917Z","created_at":"2016-10-20T16:28:42.917Z"},{"id":"auth0|56a24b0a2203f4f52ecf9ef9","email":"dc4eb266-203c-45f3-882b-8ae15473cc06@apikey.arcfmsolution.com","groups":["CloudAdmin"],"roles":[],"alias":"TPKUploaderTest","username":null,"picture":"https://s.gravatar.com/avatar/fffe903d05ffcd321d7de254ab4348c3?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fdc.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56a24b0a2203f4f52ecf9ef9","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56a24b0a2203f4f52ecf9ef9","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56a24b0a2203f4f52ecf9ef9","verb":"Delete"}],"updated_at":"2016-01-22T15:30:18.133Z","created_at":"2016-01-22T15:30:18.133Z"},{"id":"auth0|5769ad25aeb9b2c31b7753af","email":"41156277-49f5-4049-9e71-a23e1f3e60dc@apikey.arcfmsolution.com","groups":["HostedWorkflow"],"roles":[],"alias":"ApiKey for hosted workflow: DateTimeTest","username":null,"picture":"https://s.gravatar.com/avatar/81b9e1347126d4a591d6bf6ac8f0db79?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2F41.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C5769ad25aeb9b2c31b7753af","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C5769ad25aeb9b2c31b7753af","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C5769ad25aeb9b2c31b7753af","verb":"Delete"}],"updated_at":"2016-06-21T21:09:57.348Z","created_at":"2016-06-21T21:09:57.348Z"},{"id":"auth0|56ccf47d7541fce12c634529","email":"41b6e0a5-e209-46de-9b66-5c644eb27f4e@apikey.arcfmsolution.com","groups":["HostedWorkflow"],"roles":[],"alias":"ApiKey for hosted workflow: kevin","username":null,"picture":"https://s.gravatar.com/avatar/5ee47fe7c0e7c77945a7f185cd1c427a?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2F41.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56ccf47d7541fce12c634529","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56ccf47d7541fce12c634529","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56ccf47d7541fce12c634529","verb":"Delete"}],"updated_at":"2016-02-24T00:08:29.163Z","created_at":"2016-02-24T00:08:29.163Z"},{"id":"auth0|578d218655a38f591d6e60b9","email":"orbittestredliningadmin@apikey.arcfmsolution.com","groups":["Redlining.Admin"],"roles":[],"alias":null,"username":null,"picture":"https://s.gravatar.com/avatar/c61fdda0e8a7d2447c279ad86018a1ef?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2For.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C578d218655a38f591d6e60b9","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C578d218655a38f591d6e60b9","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C578d218655a38f591d6e60b9","verb":"Delete"}],"updated_at":"2016-07-18T18:35:50.765Z","created_at":"2016-07-18T18:35:50.765Z"},{"id":"auth0|56e1b179594555d712876c44","email":"c8475ace-7c90-4fb6-a2e4-2517a2dd23ac@apikey.arcfmsolution.com","groups":["SE.Geospatial.MobileSync.Admin"],"roles":[],"alias":"Brant test","username":null,"picture":"https://s.gravatar.com/avatar/e7ab40262419e85682e0f77c30c76d71?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fc8.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56e1b179594555d712876c44","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56e1b179594555d712876c44","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56e1b179594555d712876c44","verb":"Delete"}],"updated_at":"2016-03-10T17:40:09.1Z","created_at":"2016-03-10T17:40:09.1Z"},{"id":"auth0|58136fd5b35745ab0ed5b6a5","email":"83c575ad-0b4d-46e1-be98-f0d367bb73ce@apikey.arcfmsolution.com","groups":["SE.Geospatial.Mobile.Sync.User"],"roles":[],"alias":"delete me 2","username":null,"picture":"https://s.gravatar.com/avatar/3840f1036fadf981184485e26b6cbfd9?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2F83.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C58136fd5b35745ab0ed5b6a5","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C58136fd5b35745ab0ed5b6a5","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C58136fd5b35745ab0ed5b6a5","verb":"Delete"}],"updated_at":"2016-10-28T15:33:41.139Z","created_at":"2016-10-28T15:33:41.139Z"},{"id":"auth0|56e0a5f615cdbd0b39cd67cb","email":"18ec16a1-4662-4cdf-b7d6-6c2eef8bf776@apikey.arcfmsolution.com","groups":["HostedWorkflow"],"roles":[],"alias":"ApiKey for hosted workflow: GasValveInspectionWFOneConditionAuth0ApiKey","username":null,"picture":"https://s.gravatar.com/avatar/98c714be93e2f5f0457424f2e7a260e3?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2F18.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56e0a5f615cdbd0b39cd67cb","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56e0a5f615cdbd0b39cd67cb","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56e0a5f615cdbd0b39cd67cb","verb":"Delete"}],"updated_at":"2016-03-09T22:38:46.684Z","created_at":"2016-03-09T22:38:46.684Z"},{"id":"auth0|58891499808d602e8de976b7","email":"changeroles@apikey.com","groups":["Coordinator"],"roles":[],"alias":null,"username":null,"picture":"https://s.gravatar.com/avatar/9859c2135f2b548e7335905dde02b2ba?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fch.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C58891499808d602e8de976b7","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C58891499808d602e8de976b7","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C58891499808d602e8de976b7","verb":"Delete"}],"updated_at":"2017-01-25T21:11:53.264Z","created_at":"2017-01-25T21:11:53.264Z"},{"id":"auth0|56cdccd88e564dda29f63659","email":"506746ab-1ae5-4d44-b9a1-20c819394bf4@apikey.arcfmsolution.com","groups":["HostedWorkflow"],"roles":[],"alias":"ApiKey for hosted workflow: kevin","username":null,"picture":"https://s.gravatar.com/avatar/61c05d6b501a6f6baf3824a977497b21?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2F50.png","tenantId":"OrbitTest","connectionName":"Username-Password-Authentication","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56cdccd88e564dda29f63659","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56cdccd88e564dda29f63659","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=auth0%7C56cdccd88e564dda29f63659","verb":"Delete"}],"updated_at":"2016-02-24T15:31:36.135Z","created_at":"2016-02-24T15:31:36.135Z"}],"href":"https://seaccessdev.azurewebsites.net/api/v1/users","links":[]};
        
        return thing.values;
    }
    getUsers(){
        var temp = {"start":"0","limit":"50","length":"5","total":"5","values":[{"id":"adfs|vmarwano@arcfmsolution.com","email":"vmarwano@arcfmsolution.com","groups":[],"roles":["Redlining.User","MobileConfig.User","Viewer","SE.Geospatial.Mobile.Sync.User"],"alias":null,"username":"Marwan Viewer","picture":"https://s.gravatar.com/avatar/7c85255c0554318b8d5743d85bcf1e14?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fmv.png","tenantId":"OrbitTest","connectionName":"ArcFMSolution","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=adfs%7Cvmarwano%40arcfmsolution.com","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=adfs%7Cvmarwano%40arcfmsolution.com","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=adfs%7Cvmarwano%40arcfmsolution.com","verb":"Delete"}],"given_name":"Marwan","family_name":"Viewer","groups":["AzureAccess","Viewer","OrbitTest Tenant","SE.Geospatial.Mobile.Sync.User"],"upn":"vmarwano@arcfmsolution.com","updated_at":"2017-02-08T16:08:44.06Z","nickname":"vmarwano","created_at":"2015-11-19T17:22:11.841Z","last_ip":"198.202.137.23","last_login":"2017-02-08T16:08:41.553Z","logins_count":159},{"id":"oauth2|ESRI-Portal-saundersk|vmarwano@arcfmsolution.com","email":null,"groups":[],"roles":["Viewer","SE.Geospatial.Mobile.Sync.User","Redlining.User"],"alias":null,"username":"ArcFM Viewer","picture":"https://cdn.auth0.com/avatars/av.png","tenantId":"OrbitTest","connectionName":"ESRI-Portal-saundersk","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=oauth2%7CESRI-Portal-saundersk%7Cvmarwano%40arcfmsolution.com","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=oauth2%7CESRI-Portal-saundersk%7Cvmarwano%40arcfmsolution.com","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=oauth2%7CESRI-Portal-saundersk%7Cvmarwano%40arcfmsolution.com","verb":"Delete"}],"groups":["ArcFM Viewers","OrbitTest Tenant"],"username":"vmarwano@arcfmsolution.com","upn":"aubrey.stalnaker@schneider-electric.com","updated_at":"2017-02-06T17:07:16.892Z","nickname":"ArcFM Viewer","created_at":"2016-01-18T20:51:32.641Z","last_ip":"159.215.35.1","last_login":"2017-02-06T17:07:13.351Z","logins_count":39},{"id":"windowslive|e599921f45bde3e7","email":"arcfmviewer@outlook.com","groups":["Viewer","SE.Geospatial.Mobile.Sync.User","Redlining.Admin","MobileConfig.User"],"roles":["Viewer","SE.Geospatial.Mobile.Sync.User","Redlining.Admin","MobileConfig.User"],"alias":null,"username":"ArcFM Viewer","picture":"https://apis.live.net/v5.0/e599921f45bde3e7/picture","tenantId":"OrbitTest","connectionName":"windowslive","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=windowslive%7Ce599921f45bde3e7","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=windowslive%7Ce599921f45bde3e7","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=windowslive%7Ce599921f45bde3e7","verb":"Delete"}],"given_name":"ArcFM","family_name":"Viewer","locale":"en_US","emails":["arcfmviewer@outlook.com"],"nickname":"arcfmviewer@outlook.com","updated_at":"2017-02-01T23:24:32.965Z","created_at":"2015-11-23T16:45:31.567Z","last_ip":"159.215.35.1","last_login":"2017-02-01T23:24:28.943Z","logins_count":84},{"id":"oauth2|ESRI-Portal-saundersk|kevins@arcfmsolution.com","email":null,"groups":[],"roles":["Viewer","SE.Geospatial.Mobile.Sync.User","Redlining.User"],"alias":null,"username":"Kevin Saunders","picture":"https://cdn.auth0.com/avatars/ks.png","tenantId":"OrbitTest","connectionName":"ESRI-Portal-saundersk","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=oauth2%7CESRI-Portal-saundersk%7Ckevins%40arcfmsolution.com","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=oauth2%7CESRI-Portal-saundersk%7Ckevins%40arcfmsolution.com","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=oauth2%7CESRI-Portal-saundersk%7Ckevins%40arcfmsolution.com","verb":"Delete"}],"groups":["ArcFM Viewers","OrbitTest Tenant"],"username":"kevins@arcfmsolution.com","upn":"kevins@arcfmsolution.com","updated_at":"2017-02-01T21:18:11.837Z","nickname":"Kevin Saunders","created_at":"2016-06-03T21:28:37.226Z","last_ip":"159.215.35.1","last_login":"2017-02-01T21:18:07.776Z","logins_count":35},{"id":"adfs|vjamesr@arcfmsolution.com","email":"vjamesr@arcfmsolution.com","groups":[],"roles":["Redlining.User","MobileConfig.User","Viewer","KvStorage.User","SE.Geospatial.Mobile.Sync.User"],"alias":null,"username":"James Viewer Richards","picture":"https://s.gravatar.com/avatar/ebfcf7122f2e704d3de44869f0871644?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fjv.png","tenantId":"OrbitTest","connectionName":"ArcFMSolution","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=adfs%7Cvjamesr%40arcfmsolution.com","links":[{"rel":"Update","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=adfs%7Cvjamesr%40arcfmsolution.com","verb":"Patch"},{"rel":"Delete","href":"https://seaccessdev.azurewebsites.net/api/v1/users?userId=adfs%7Cvjamesr%40arcfmsolution.com","verb":"Delete"}],"given_name":"James","family_name":"Richards","groups":["AzureAccess","Viewer","OrbitTest Tenant","SE.Geospatial.Mobile.Sync.User"],"upn":"vjamesr@arcfmsolution.com","updated_at":"2016-11-18T21:43:08.172Z","nickname":"vjamesr","created_at":"2016-01-26T23:35:03.267Z","last_ip":"198.202.137.33","last_login":"2016-11-18T21:43:05.719Z","logins_count":17}],"href":"https://seaccessdev.azurewebsites.net/api/v1/users","links":[]};
        return temp.values;
    }
    foramtDataObjForView(cardData, type){
        var modifiedList :any[] = [];
        for(var obj in cardData){
            var tempObj :any = {};
            if(type==='Operational Maps'){
                tempObj = this.createOperationalMapObj(cardData[obj]);
            } else if (type=== 'Base Maps'){
                return this.createBaseMapAndTilePackageObj(cardData[obj], 'url');
            } else if (type=== 'Tile Packages'){
                return this.createBaseMapAndTilePackageObj(cardData[obj], 'size');
            }
            modifiedList.push(tempObj);
        }
        
        return modifiedList;
    }
    createOperationalMapObj(opMaps: any){
        return {
            title: 'some place',
            picture: this.getOperationalMapImage(),
            displayName: 'some place',
            roundPicture: false,
            content: {
                inputType: 'url',
                status: 'Up',
                url: 'https://someGiswebsite.com/thingy'
            }
        };
    }
    createBaseMapAndTilePackageObj(base:any, type: string){
        return [{
            title: 'New Base Map',
            picture: this.getOperationalMapImage(),
            displayName: 'some place',
            roundPicture: false,
            content: {
                inputType: type,
                url: 'https://someGiswebsite.com/thingy',
                size: '10 mb'
            }
        },{
            title: 'World Street Map',
            picture: this.getOperationalMapImage(),
            displayName: 'different place',
            roundPicture: false,
            content: {
                inputType: type,
                url: 'https://website.com/thingy',
                size: '10 mb'
            }
        },{
            title: 'World Imagery Map',
            picture: this.getOperationalMapImage(),
            displayName: 'some place',
            roundPicture: false,
            content: {
                inputType: type,
                url: 'https://someGiswebsite.com/thingy',
                size: '10 mb'
            }
        }];
    }
}