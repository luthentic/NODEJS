const socket = new WebSocket('ws://localhost:8080')

socket.addEventListener('open', event=>{
  socket.send('Hello server')
})

socket.addEventListener('message', event=>{
  console.log('message from server',event.data)
})