enum Status {
  OFFLINE,
  ONLINE = 4,
  DELETED
}

// console.log(Status[0])
// console.log(Status["OFFLINE"])

// const Status = {
//   OFFLINE: 0,
//   ONLINE: 1,
//   DELETED: 2
// }


// console.log(Status.OFFLINE)
// console.log(Status.ONLINE)
// console.log(Status.DELETED)


function getResult(status: number) {
  if (status === Status.OFFLINE) {
    return "offline";
  } else if (status === Status.ONLINE) {
    return "online"
  } else if (status === Status.DELETED) {
    return "deleted"
  }
  return "error"
}

const result = getResult(4)

console.log(result)