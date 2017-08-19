

export default {
  settings: {
    width: 20,
    height: 10,
    maxPlayers: 2
  },

  assets: [
    {
      color: "#666",
      displayMessage: true,
      blocked: false,
      hasButton: true,
      actionId: 1,
      messages: [
        "Looks like an old cupboard, wanne take a look?",
        "message 2"
      ],
      position: {
        x: 1,
        y: 1
      }
    },
    {
      color: "#000",
      displayMessage: false,
      blocked: true,
      hasButton: false,
      actionId:0,
      messages: [],
      position: {
        x: 0,
        y: 1
      }
    },
    {
      color:"#e34",
      displayMessage: true,
      blocked: false,
      hasButton: false,
      actionId:0,
      messages: [
        "It's a book case, on the books are numbers: 13 43 56 76"
      ],
      position: {
        x:3,
        y:5
      }
    }
  ],
  
  actions: [
    {
      id: 1,
      displayMessage: false,
      instructions: [],
      puzzle: "Lock",
      assets: []
    }
  ]
};