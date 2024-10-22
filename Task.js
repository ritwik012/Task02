let data = [
    { price: 20, quantity: 25, option: "yes" },
    { price: 12, quantity: 25, option: "yes" },
    { price: 20, quantity: 25, option: "yes" },
    { price: 15, quantity: 25, option: "yes" },
    { price: 15, quantity: 5, option: "yes" }
  ];
  
  const sumQuantities = (data) => {
    let tempStorage = {}; 
    let result = []; 
  
    for (let i = 0; i < data.length; i++) {
      let currentItem = data[i];
      let key = `${currentItem.price}-${currentItem.option}`;
  
      if (tempStorage[key]) {
        tempStorage[key].quantity += currentItem.quantity;
      } else {
        tempStorage[key] = {
          price: currentItem.price,
          quantity: currentItem.quantity,
          option: currentItem.option
        };
      }
    }
  
    for (let key in tempStorage) {
      result.push(tempStorage[key]);
    }
  
    return result;
  };
  
  const result = sumQuantities(data);
  console.log(result);
  