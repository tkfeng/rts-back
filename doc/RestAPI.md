# RTS RestAPI Design

#### Board API
APIs to retrieve and set board related information.

##### GET
`GET /boards` - returns all boards 
- should be paginated in the future

`GET /boards/:boardId` - returns a single board, its meta data as well as its nodes and edges.
- Payload shape
```
{
  boardId: 'uuid-1234',
  display: 'First board',
  nodes: {
    rabbit-basic-b1: {
      node_name: "rabbit-basic-b1",
      node_type_name: "BASIC",
      display: "rabbit",
      to_nodes: ["rabbit-roll-b1"],
    },
    rabbit-roll-b1 : {
      node_name: "rabbit-roll-b1",
      node_type_name: "BASIC",
      display: "rabbit",
      to_nodes: ["sheep-end-b1"],
    }
  }
}
```

##### POST
`POST /boards` - Create a board with a payload of board meta data information as well as its nodes and edges.
