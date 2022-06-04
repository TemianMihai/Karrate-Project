import { GraphQLExecutionContext } from '@nestjs/graphql';
import { UserModel } from './models/user.model';
import { UsersService } from './users.service';
import { RegistrationUserInput } from './input/registration.user.input';
import { Tokens } from './input/tokens.input';
import { ActivateUserInput } from './input/activate.input';
import { LoginInput } from './input/login.input';
import { UpdateUserInput } from './input/update.user.input';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(registerData: RegistrationUserInput): Promise<UserModel>;
    activate(ctx: GraphQLExecutionContext, activateData: ActivateUserInput): Promise<Tokens>;
    login(ctx: GraphQLExecutionContext, loginData: LoginInput): Promise<Tokens>;
    updateUser(user: UserModel, updateData: UpdateUserInput): Promise<UserModel>;
    getUser(user: UserModel, id: string): Promise<UserModel>;
}
