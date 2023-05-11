// String values used in user-facing error messages
export enum EntityNames {
    User = "User"
}

//=== Abstract Error classes
export abstract class EntityMissingIdError extends Error {
    constructor(entity: string) {
        super(`${entity} ID is missing`);
    }
}

export abstract class EntityCannotGetError extends Error {
    constructor(entity: string, id: string, msg: string) {
        super(`Cannot get ${entity} ${id}: ${msg}`);
    }
}

export class EntityNotFoundError extends EntityCannotGetError {
    constructor(entity: string, entityId: string) {
        super(entity, entityId, `No ${entity} with ID "${entityId}"`);
    }
}

export class EntityCannotUpdateError extends Error {
    constructor(entity: string, entityId: string, msg: string) {
        super(`Cannot update ${entity} ${entityId}: ${msg}`);
    }
}

export class EntityCannotCreateError extends Error {
    constructor(entity: string, msg: string) {
        super(`Cannot create ${entity}: ${msg}`);
    }
}

//=== User errors
export class UserCannotGetError extends EntityCannotGetError {
    constructor(id: string, msg: string) {
        super(EntityNames.User, id, msg);
    }
}

export class UserNotFoundError extends EntityNotFoundError {
    constructor(accountId: string) {
        super(EntityNames.User, accountId);
    }
}

export class UserMissingIdError extends EntityMissingIdError {
    constructor() {
        super(EntityNames.User);
    }
}
