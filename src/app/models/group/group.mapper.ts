import { IGroupMapper } from "./interfaces";

const groupMapper: IGroupMapper = (groupInstance) => ({
  id: groupInstance.id,
  name: groupInstance.name,
  permissions: groupInstance.permissions,
});

export { groupMapper };
