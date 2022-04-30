export default {
  async addCartItem(context, payload) {
    const userId = context.rootGetters.getId;
    const item = {
      id: payload.id,
      price: payload.price,
      name: payload.name,
      count: payload.count,
    };
    const response = await fetch(
      `https://final-project-12cce-default-rtdb.firebaseio.com/carts/${userId}/${payload.id}.json`,
      {
        method: "POST",
        body: JSON.stringify(item),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "添加至购物车错误");
      throw error;
    }

    const new_cart_item = {
      id: payload.id,
      name: payload.name,
      count: payload.count,
      price: payload.price,
    };

    context.commit("addCartItems", new_cart_item);
  },

  async fetchCartItems(context) {
    const userId = context.rootGetters.getId;
    const response = await fetch(
      `https://final-project-12cce-default-rtdb.firebaseio.com/carts/${userId}.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "获取购物车数据出错");
      throw error;
    }
    const new_cart = [];

    // name，price，count
    for (const item_key in responseData) {
      const item = {
        name: "",
        price: "",
        id: "",
        count: 0,
      };
      for (const key in responseData[item_key]) {
        item.id = responseData[item_key][key].id;
        item.name = responseData[item_key][key].name;
        item.price = responseData[item_key][key].price;
        item.count += +responseData[item_key][key].count;
      }
      new_cart.push(item);
    }

    context.commit("setCartItems", new_cart);
  },
  async deleteCartItem(context, payload) {
    const userId = context.rootGetters.getId;
    const response = await fetch(
      `https://final-project-12cce-default-rtdb.firebaseio.com/carts/${userId}/${payload.id}.json`,
      {
        method: "DELETE",
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "删除物品出错");
      throw error;
    }
    context.fetchCartItems();
  },
};
