export const delete_data = (data: any, isUserData?: boolean) => {
    delete data['modified']
    delete data['creation']
    delete data['owner']
    delete data['modified_by']

    if (isUserData){
        const roles = []
        for (const role of data['roles']) {
        delete role['name']
        delete role['modified']
        delete role['creation']
        delete role['owner']
        delete role['modified_by']
        roles.push(role)
        }
        data['roles'] = roles
    }
    return data
}