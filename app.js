// MAKING A NESTED DIV 

// const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1", {}, "Hey im h1")));

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);



// MAKING A NESTED DIV WITH SIBLINGS WHERE WE PASS THE ARRAY OF OBJECTS


const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "Hey im h1"),
React.createElement("h2", {}, "Hey im h2")
]));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);