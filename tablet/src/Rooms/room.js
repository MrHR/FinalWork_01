

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
      messages: [
        "message",
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
      messages: [],
      position: {
        x: 0,
        y: 1
      }
    }
  ]
};