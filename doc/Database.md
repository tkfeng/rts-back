# RTS Database Design

## Schema

### Board
#### Fields
- board_name: unique, text
- display: text

### NodeType Schema
#### Fields
- node_type_name: unique, text
- description: text

#### All Types
```
{
  node_type_name: "BASIC",
  description: "Basic tile type, the user lands there and nothing happens.",
}, {
  node_type_name: "ROLL",
  description: "When the user lands there the user will roll to move again.",
}, {
  node_type_name: "START",
  description: "Starting position for players",
}, {
  node_type_name: "END",
  description: "End position for players",
}
```

### Node
Represent an instance of nodetype

#### Fields
- node_name: unique, text
- display: text
- node_type_name: FK - TileType
- board_name: FK - Board

#### Example
```
{
  node_name: "rabbit-basic-b1",
  display: "rabbit",
  node_type_name: "BASIC",
  board_name: "b1",
}, {
  node_name: "rabbit-roll-b1",
  display: "tu zi",
  node-type-name: "ROLL",
  board-name: "b1",
}, {
  node_name: "sheep-end-b2",
  display: "sheep",
  node-type-name: "END",
  board-name: "b2",
}
```
### Edge
Represent a directed path from from_node to to_node

#### Fields
- edge_name: unique, text
- from_node: FK - Node
- to_node: FK - Node
- board_name: FK - Board

#### Example
```
{
  edge_name: "uuid1",
  from_node: "rabbit-basic-b1",
  to_node: "rabbit-roll-b1",
  board_name: "b1",
}
```
