export class EmployeeModel {
    id: number;
    name: string;
    designation: string;
    expertise: string;

    constructor(id?: number, name?: string, designation?: string, expertise?: string) {
        this.id = id;
        this.name = name;
        this.designation = designation;
        this.expertise = expertise;
    }
}
