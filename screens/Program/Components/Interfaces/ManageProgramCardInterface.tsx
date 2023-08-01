import { ProgramDetailsInterface } from "./ProgramDetailsInterface"

export interface ManageProgramCardProps {
    array: ProgramDetailsInterface;
    type: 'edit' | 'manage'
}