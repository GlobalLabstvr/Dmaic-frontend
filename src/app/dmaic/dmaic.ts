import { User } from '../shared/model/user.model';

export interface Dmaic{
    users: {email: string},
    define: string,
    measure: {current: number, target: number},
    analyse: string,
    implementation: string,
    control: string
}