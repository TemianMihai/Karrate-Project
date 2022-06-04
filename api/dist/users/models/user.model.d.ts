export declare class UserModel {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    club: string;
    activationKey?: string;
    refreshToken?: string;
    isActive: boolean;
    isAdmin?: boolean;
    createdAt: Date;
    updatedAt: Date;
    setPassword(password: string): Promise<void>;
}
