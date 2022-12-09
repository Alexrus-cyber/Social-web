export let updateObjectInArray = (items: Array<object>, itemId: number, objPropName:string | number | symbol, newObjProps: any) => {
    return items.map((u: any) => {
            if (u[objPropName] === itemId) {
                return {...u, ...newObjProps}
            }
            return u;
    })
}