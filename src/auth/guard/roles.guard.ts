import { ROLES_KEY } from '@auth/decorator/roles.decorator';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private readonly refletor: Reflector) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const requiredRoles = this.refletor.getAllAndOverride(ROLES_KEY, [context.getHandler(), context.getClass()]);
        if (!requiredRoles) return true;
        const gqlContext = GqlExecutionContext.create(context);
        const { user } = gqlContext.getContext().req;
        return requiredRoles.some((role) => user.roles?.includes(role));
    }
}
