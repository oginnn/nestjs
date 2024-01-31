import { IsDate, IsInt, IsString, MinLength } from "class-validator"

export class CreateEmployeeDto {
    @IsString()
    name: string

    @IsDate()
    creation: Date

    @IsDate()
    modified: Date

    @IsString()
    modified_by: string

    @IsString()
    owner: string
    
    @IsInt()
    docstatus: number
    
    @IsInt()
    idx: number
    
    @IsString()
    employee: string

    @IsString()
    naming_series: string

    @IsString()
    @MinLength(2, {message: 'Name must have atleast 2 characters.'})
    first_name: string

    @IsString()
    middle_name: string

    @IsString()
    last_name: string

    @IsString()
    employee_name: string

    @IsString()
    employment_type: string

    @IsString()
    image: string

    @IsString()
    status: string

    @IsString()
    gender: string

    @IsString()
    employee_number: string

    @IsString()
    user_id: string

    @IsString()
    divisi: string

    @IsString()
    department: string

    @IsString()
    sub_department: string

    @IsString()
    designation: string

    @IsString()
    reports_to: string

    @IsString()
    grade: string

    @IsString()
    branch: string
}
