import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({
    name: "tabEmployee"
})
export class Employee {
    @PrimaryColumn({type:"varchar", length: 140})
    name: string

    @Column({type:"datetime"})
    creation: Date

    @Column({type:"datetime"})
    modified: Date

    @Column({type:"varchar", length: 140})
    modified_by: string

    @Column({type:"varchar", length: 140})
    owner: string
    
    @Column({type:"int"})
    docstatus: number
    
    @Column({type:"int"})
    idx: number
    
    @Column({type:"varchar", length: 140})
    employee: string

    @Column({type:"varchar", length: 140})
    naming_series: string

    @Column({type:"varchar", length: 140})
    first_name: string

    @Column({type:"varchar", length: 140, nullable: true})
    middle_name: string

    @Column({type:"varchar", length: 140, nullable: true})
    last_name: string

    @Column({type:"varchar", length: 140})
    employee_name: string

    @Column({type:"varchar", length: 140})
    employment_type: string

    @Column({type:"text"})
    image: string

    @Column({type:"varchar", length: 140})
    status: string

    @Column({type:"varchar", length: 140})
    gender: string

    @Column({type:"varchar", length: 140})
    employee_number: string

    @Column({type:"varchar", length: 140})
    user_id: string

    @Column({type:"varchar", length: 140})
    divisi: string

    @Column({type:"varchar", length: 140})
    department: string

    @Column({type:"varchar", length: 140})
    sub_department: string

    @Column({type:"varchar", length: 140})
    designation: string

    @Column({type:"varchar", length: 140})
    reports_to: string

    @Column({type:"varchar", length: 140})
    grade: string

    @Column({type:"varchar", length: 140})
    branch: string
}
