"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { requiredStar } from "@/utils/helper/requiredStar";
import { useGetPermissionAllQuery } from "@/components/store/api/premission/permissionApi";
import { Button } from "@/components/ui/button";
import ButtonLoader from "@/components/loader/ButtonLoader";
import {
  useCreateRoleMutation,
  useGetRoleByIdQuery,
  useUpdateRoleMutation,
} from "@/components/store/api/role/roleApi";
import toast from "react-hot-toast";
import HomeLoader from "@/components/loader/HomeLoader";

import { GrNotes } from "react-icons/gr";

interface ModulePermissions {
  create?: boolean;
  read?: boolean;
  update?: boolean;
  delete?: boolean;
  all?: boolean;
}

interface Module {
  name: string;
  actions: {
    permissionId: number;
    action: string;
  }[];
  permissions: ModulePermissions;
}

interface AddRoleProps {
  onClose: () => void;
  editingRole?: any | null;
}

const AddRole = ({ onClose, editingRole }: AddRoleProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isSystemRole, setIsSystemRole] = useState(false);
  const [isAllPermited, setIsAllPermited] = useState(false);
  const [isAllPermitedCheckBoxClicked, setIsAllPermitedCheckBoxClicked] =
    useState(false);
  const [modules, setModules] = useState<Module[]>([]);

  const { data: roleDetails, isLoading } = useGetRoleByIdQuery(editingRole?.id);
  const { data: permissionData, isLoading: loadingPermissions } =
    useGetPermissionAllQuery({});
  const [createRole, { isLoading: creatingRole }] = useCreateRoleMutation();
  const [updateRole, { isLoading: updatingRole }] = useUpdateRoleMutation();

  // Load permissions
  useEffect(() => {
    if (permissionData?.data) {
      const formattedModules = permissionData.data.map((module: any) => {
        const permissions = module.actions.reduce(
          (acc: ModulePermissions, action: any) => {
            acc[action.action] = false;
            return acc;
          },
          {} as ModulePermissions
        );
        return {
          name: module.module,
          actions: module.actions,
          permissions: { ...permissions, all: false },
        };
      });
      setModules(formattedModules);
    }
  }, [permissionData]);

  // Prefill when editing
  useEffect(() => {
    if (editingRole && permissionData?.data && roleDetails?.data) {
      setName(roleDetails.data.name || "");
      setDescription(roleDetails.data.description || "");
      setIsSystemRole(roleDetails.data.isSystemRole || false);

      // 1️⃣ Extract rolePermissions array from API
      const assignedPerms = roleDetails.data.rolePermissions || [];

      // 2️⃣ Build module list based on permissionData
      const formattedModules = permissionData.data.map((module: any) => {
        const perms: ModulePermissions = {};
        module.actions.forEach((action: any) => {
          // find if this permission is allowed in rolePermissions
          const found = assignedPerms.find(
            (p: any) => p.permissionId === action.permissionId
          );

          if (found?.isAllowed) {
            if (action.action === "create") perms.create = true;
            if (action.action === "read") perms.read = true;
            if (action.action === "update") perms.update = true;
            if (action.action === "delete") perms.delete = true;
          } else {
            if (action.action === "create") perms.create = false;
            if (action.action === "read") perms.read = false;
            if (action.action === "update") perms.update = false;
            if (action.action === "delete") perms.delete = false;
          }
        });

        // 3️⃣ Determine if "All" should be checked
        perms.all = Object.values(perms).every((v) => v === true);

        return {
          name: module.module,
          actions: module.actions,
          permissions: perms,
        };
      });

      // 4️⃣ Set default modules with checked boxes
      setModules(formattedModules);
    }
  }, [editingRole, permissionData, roleDetails]);

  // Handle permission toggle
  const handlePermissionChange = (
    moduleIndex: number,
    permission: keyof ModulePermissions,
    value: boolean
  ) => {
    const updatedModules = [...modules];

    if (permission === "all") {
      const permissions = modules[moduleIndex].actions.reduce(
        (acc: ModulePermissions, action: any) => {
          acc[action.action] = value;
          return acc;
        },
        {} as ModulePermissions
      );
      updatedModules[moduleIndex].permissions = permissions;
    } else {
      updatedModules[moduleIndex].permissions[permission] = value;

      const actions = updatedModules[moduleIndex].actions.map((a) => a.action);
      const isAnyUnchecked = actions.find(
        (action) =>
          updatedModules[moduleIndex].permissions[
            action as keyof ModulePermissions
          ] === false
      );
      if (isAnyUnchecked) {
        updatedModules[moduleIndex].permissions.all = false;
      } else {
        updatedModules[moduleIndex].permissions.all = true;
      }
    }

    setModules(updatedModules);
  };

  // Handle all of all permission toggle
  useEffect(() => {
    if (!isAllPermitedCheckBoxClicked) return;
    if (isAllPermited) {
      const updatedModules = modules.map((module) => {
        const permissions = module.actions.reduce(
          (acc: ModulePermissions, action: any) => {
            acc[action.action] = true;
            return acc;
          },
          {} as ModulePermissions
        );
        return {
          ...module,
          permissions: { ...permissions, all: true },
        };
      });
      setModules(updatedModules);
      setIsAllPermitedCheckBoxClicked(false);
    } else {
      const updatedModules = modules.map((module) => {
        const permissions = module.actions.reduce(
          (acc: ModulePermissions, action: any) => {
            acc[action.action] = false;
            return acc;
          },
          {} as ModulePermissions
        );
        return {
          ...module,
          permissions: { ...permissions, all: false },
        };
      });
      setModules(updatedModules);
      setIsAllPermitedCheckBoxClicked(false);
    }
  }, [isAllPermited]);

  // set isAllPermited true if all modules have all permissions selected else false
  useEffect(() => {
    const allPermsSelected = modules.every((module) =>
      Object.values(module.permissions).every((v) => v === true)
    );
    setIsAllPermited(allPermsSelected);
  }, [modules]);

  // Submit create or update
  const handleSubmit = async () => {
    if (!name.trim()) return toast.error("Name is required");

    const selectedPermissions: { permissionId: number; isAllowed: boolean }[] =
      [];

    modules.forEach((module) => {
      module.actions.forEach((action) => {
        let isAllowed = false;
        if (action.action === "create") isAllowed = module.permissions.create as boolean;
        if (action.action === "read") isAllowed = module.permissions.read as boolean;
        if (action.action === "update") isAllowed = module.permissions.update as boolean;
        if (action.action === "delete") isAllowed = module.permissions.delete as boolean;
        selectedPermissions.push({
          permissionId: action.permissionId,
          isAllowed,
        });
      });
    });

    const payload = {
      name,
      description,
      isSystemRole,
      permissions: selectedPermissions,
    };

    try {
      if (editingRole) {
        await updateRole({ id: editingRole.id, ...payload }).unwrap();
        toast.success("Role updated successfully");
      } else {
        await createRole(payload).unwrap();
        toast.success("Role created successfully");
      }
      onClose();
    } catch (err: any) {
      console.error("Error saving role:", err);
      toast.error(err?.data?.message || "Failed to save role");
    }
  };

  if (loadingPermissions || isLoading) return <HomeLoader />;

  const isSaving = creatingRole || updatingRole;

  return (
    <div className="p-5 bg-white">
      <div className="my-4 grid md:grid-cols-2 gap-8">
        <div>
          <Label htmlFor="name">Role Name {requiredStar}</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter role name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-400 w-full rounded"
          />
        </div>

        <div>
          <Label htmlFor="description">Description (optional)</Label>
          <textarea
            id="description"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="border border-gray-600 p-2 w-full rounded"
          />
        </div>

        <div className="flex items-center gap-4">
          <Label htmlFor="isSystemRole" className="cursor-pointer pt-3">
            Is System Role?
          </Label>
          <input
            type="checkbox"
            id="isSystemRole"
            checked={isSystemRole}
            onChange={(e) => setIsSystemRole(e.target.checked)}
          />
        </div>
        <div className="flex justify-end items-center gap-4">
          <input
            type="checkbox"
            id="isAllPermited"
            checked={isAllPermited}
            onChange={(e) => {
              setIsAllPermited(e.target.checked);
              setIsAllPermitedCheckBoxClicked(true);
            }}
          />
          <Label htmlFor="isAllPermited" className="cursor-pointer pt-3">
            Select All Permissions
          </Label>
        </div>
      </div>

      {/* Permissions Table */}
      <table className="w-full border-collapse border mb-5 mt-4">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="p-2 text-left">SL</th>
            <th className="p-2 text-left">Module</th>
            {/* Dynamically show only existing actions + All */}
            <th className="p-2 text-center">Create</th>
            <th className="p-2 text-center">Read</th>
            <th className="p-2 text-center">Update</th>
            <th className="p-2 text-center">Delete</th>
            <th className="p-2 text-center">All</th>
          </tr>
        </thead>
        <tbody>
          {modules.map((module, index) => (
            <tr key={module.name} className="border-b hover:bg-gray-50">
              <td className="p-2">{index + 1}</td>
              <td className="p-2 font-medium">{module.name}</td>

              {(["create", "read", "update", "delete"] as const).map((perm) => {
                // Check if this action exists in module.actions
                const hasAction = module.actions.some((a) => a.action === perm);
                if (!hasAction) return <td key={perm}></td>; // empty cell if action not exists

                return (
                  <td key={perm} className="p-2 text-center">
                    <input
                      type="checkbox"
                      checked={module.permissions[perm]}
                      onChange={(e) =>
                        handlePermissionChange(index, perm, e.target.checked)
                      }
                    />
                  </td>
                );
              })}

              {/* All checkbox */}
              {module.actions.length > 1 ? (
                <td className="p-2 text-center">
                  <input
                    type="checkbox"
                    checked={module.permissions.all}
                    onChange={(e) =>
                      handlePermissionChange(index, "all", e.target.checked)
                    }
                  />
                </td>
              ) : (
                <td></td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Submit Button */}
      <div className="text-right">
        <Button
          onClick={handleSubmit}
          className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-700"
          disabled={isSaving}
        >
          <GrNotes className="mr-2" />
          {isSaving && <ButtonLoader />} {editingRole ? "Update" : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default AddRole;
