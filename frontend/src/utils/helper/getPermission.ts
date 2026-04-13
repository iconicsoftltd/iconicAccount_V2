// import { shareWithCookies } from "./shareWithCookies"


// const getPermission = (module: string, action: string) => {
//     const permissions = shareWithCookies("get", "permissionsList");
//     const parsePermissions = permissions ? JSON.parse(permissions) : [];
//     const find = parsePermissions.find((permission: any) => permission.module === module && permission.action === action && permission.isAllowed === true);
//     return find ? true : false;

// };

// export default getPermission;


import { selectPermissions, store } from "@/components/store/store";


const getPermission = (module: string, action: string) => {
    // Get current state
    const state = store.getState();

    // Get permissions from Redux
    const permissions = selectPermissions(state);

    // Find if allowed
    const find = permissions.find(
        (permission: any) =>
            permission.module === module &&
            permission.action === action &&
            permission.isAllowed === true
    );

    return !!find; // true if found, false otherwise
};

export default getPermission;