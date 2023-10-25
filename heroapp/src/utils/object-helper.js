export const updateObjectInArray = (items, itemId, objPropName, newObjProps, isDelete = false) => {
  debugger;
  return items.map((item) => {
    if (item[objPropName] === itemId) {
      if (isDelete) return {};
      return { ...item, ...newObjProps }
    }
    else return item;
  })
}