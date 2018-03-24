export interface IMeta {
    /**
     * Created date of the object
     */
    created: Date;
    /**
     * Extra user-defined data
     */
    [x: string]: any;
}
