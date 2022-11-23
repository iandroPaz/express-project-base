import {Table, Column, Model, PrimaryKey, IsUUID} from 'sequelize-typescript';
export const MovieN = 'Not a model';
export const NMovie = 'Not a model';

@Table
export class Movie extends Model { 
    @IsUUID(4)
    @PrimaryKey
    @Column
    id: string;

    @Column
    title: string;

    @Column
    original_title: string;

    @Column
    description: string;

    @Column
    release_date: number;

    @Column
    rt_score: number;

}
