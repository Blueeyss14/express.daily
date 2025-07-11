let items = [
    {id: 1, name: "Test", email: ""},
];

const getAll = () => {
    if (items.length === 0) {
        return {msg: "No item here"}
    }
    return items;
};

const getItemById = (id) => {
    return items.find(i => i.id == id);
}

const createItem = (body) => {

    // ambil id terakhir trus +1, atau 1 kalau array kosong
    const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    const newItem = {
        id: newId, ...body
    };

    items.push(newItem);
    return newItem;
}

const updateItemF = (id, body) => {
    const index = items.findIndex(i => i.id == id);

    if (index < 0) return null;

    const oldItem = items[index];
    const updatedItem = {...oldItem, ...body}
    items[index] = updatedItem;
    return updatedItem;

}

const removeItem = (id) => {
    const index = items.findIndex(i => i.id == id);
    if (index < 0) return false;

    //hapus 1 item dari index
    items.splice(index, 1);
    return true;
}


module.exports = {
    getAll,
    getItemById,
    createItem,
    updateItemF,
    removeItem
};