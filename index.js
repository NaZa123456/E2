const ListaDepizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// function ComprobacionDeId(numero) {
//   return numero % 2 === 0;
// }

// ListaDepizzas.forEach((pizza) => {
//   if (ComprobacionDeId(pizza.id)) {
//     console.log(`La pizza '${pizza.nombre}' tiene un ID par: ${pizza.id}`);
//   } else {
//     console.log(`La pizza '${pizza.nombre}' tiene un ID impar: ${pizza.id}`);
//   }
// });

// ListaDepizzas.forEach((pizza) => {
//   if (pizza.precio < 600) {
//     console.log(
//       `La pizza '${pizza.nombre}' tiene un precio menor a 600: ${pizza.precio}`
//     );
//   }
// });

// ListaDepizzas.forEach((pizza) => {
//   console.log(
//     `La pizza '${pizza.nombre}' tiene un precio de ${pizza.precio} pesos`
//   );
// });

ListaDepizzas.forEach((pizza) => {
  console.log(
    `La pizza '${
      pizza.nombre
    }' tiene los siguientes ingredientes: ${pizza.ingredientes.join(", ")}`
  );
});
