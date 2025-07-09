let users = [
  {id: 1,name : "dell",}
];
  
  function getAll() {
    if (users.length === 0) {
      return {msg: "Data has not been created yet"};
    }
    return users;
  }
  
  function getById(id) {
    return users.find(u => u.id == id);
  }
  
  function create(data) {
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    const newUser = { id: newId, ...data };
    users.push(newUser);
    return newUser;
  }
  
  function update(id, data) {
    const index = users.findIndex(u => u.id == id);
    if (index === -1) return null;
  
    users[index] = { ...users[index], ...data };
    return users[index];
  }
  
  function remove(id) {
    const index = users.findIndex(u => u.id == id); 
    if (index === -1) return false;
    //hapus 1 item dari index
    users.splice(index, 1);
    return true;
  }
  
  module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: remove
  };
  