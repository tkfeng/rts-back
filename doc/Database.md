# RTS Database Design

### Schema

#### TileType Schema
##### Fields
- tiletypename: unique, text
- description: text

##### All Types
```
{
  tiletypename: "BASIC",
  description: "Basic tile type, the user lands there and nothing happens.",
}, {
  tiletypename: "ROLL",
  description: "When the user lands there the user will roll to move again.",
}, {
  tiletypename: "START",
  description: "Starting position for players",
}, {
  tiletypename: "END",
  description: "End position for players",
}
```

#### Tile
##### Fields
- tilename: unique, text
- display: text
- tiletypename: FK - TileType

##### Example
```
{
  tilename: "rabbit-basic",
  display: "rabbit",
  tiletypename: "BASIC",
}, {
  tilename: "rabbit-roll",
  display: "tu zi",
  tiletypename: "ROLL",
}, {
  tilename: "sheep-end",
  display: "sheep",
  tiletypename: "END",
}
```

#### Board
##### Fields
- boardname: unique, text
- 

