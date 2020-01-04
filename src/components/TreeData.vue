<template>
  <div>
    <pre>
      const formatDataToTree = list => {
        let arr = [];
        list.forEach((item, index) => {
          let isRoot = true;
          list.forEach(item2 => {
            if (item.pid && item.pid === item2.id) {
              isRoot = false;
              !Array.isArray(item2.children) && (item2.children = []);
              item2.children.push(item);
            }
          });
          isRoot && arr.push(index);
        })
        return list.filter((item, index) => arr.indexOf(index) > -1);
      }</pre>
  </div>
</template>
