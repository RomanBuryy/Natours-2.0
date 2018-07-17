// Complete the below questions using this array:
const array = [
	{
	  username: "john",
	  team: "red",
	  score: 5,
	  items: ["ball", "book", "pen"]
	},
	{
	  username: "becky",
	  team: "blue",
	  score: 10,
	  items: ["tape", "backpack", "pen"]
	},
	{
	  username: "susy",
	  team: "red",
	  score: 55,
	  items: ["ball", "eraser", "pen"]
	},
	{
	  username: "tyson",
	  team: "green",
	  score: 1,
	  items: ["book", "pen"]
	},
  
  ];

  const filterArray = array.filter((obj) => obj.username === "red");
  console.log("filterArray", filterArray);

  const arrayMap = array.map((num) => {return num.username + "?"});

  console.log("Map array: ", arrayMap);