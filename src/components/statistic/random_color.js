// Функція для генерації випадкового кольору
export const getRandomColor = () => {
    // Створити масив з можливими значеннями для кольору
    const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

    // Створити змінну для зберігання кольору
    let color = '#';

    // Додати шість випадкових значень до кольору
    for (let i = 0; i < 6; i++) {
      // Вибрати випадкове значення з масиву
      const index = Math.floor(Math.random() * hexValues.length);

      // Додати значення до кольору
      color += hexValues[index];
    }

    // Повернути колір
    return color;
  };


//   // В файлі App.js
// import React from "react";
// import Profile from "./Profile";
// import Statistics from "./Statistics";
// import FriendList from "./FriendList";
// import TransactionHistory from "./TransactionHistory";

// function App({ user, data, friends, transactions }) {
//   return (
//     <React.StrictMode>
//       <Profile
//         username={user.username}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         stats={user.stats}
//       />
//       <Statistics title="Upload stats" stats={data} />
//       <FriendList friends={friends} />
//       <TransactionHistory items={transactions} />
//     </React.StrictMode>
//   );
// }

// export default App;

// // В файлі index.js
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import user from "./user.json";
// import data from "./statistical-data.json";
// import friends from "./friends.json";
// import transactions from "./transactions.json";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <App user={user} data={data} friends={friends} transactions={transactions} />
// );